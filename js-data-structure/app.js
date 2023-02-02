class Node{
  constructor(value =null) {
    this.value = value
    this.left = null
    this.right =null
    this.parent = null
  }
  add(value){
    if(this.value === null){
      this.value = value
      return 
    }
    if(this.value < value){
      if(!this.right){
        const newNode = new Node(value)
        newNode.parent = this
        this.right = newNode
      }else{
        this.right.add(value)
      }
      return
    }
    if(this.value > value){
      if(!this.left){
        const newNode = new Node(value)
        newNode.parent = this
        this.left = newNode
      }else{
        this.left.add(value)
      }
      return
    }
  }
  find(value){
    if(this.value === value){
      return this
    }
    if(this.value<value && this.right){
      return this.right.find(value)
    }
    if(this.value>value && this.left){
      return this.left.find(value)
    }
  }
  remove(value){
    const identifiedNode = this.find(value);
    if(!identifiedNode){ 
      throw new Error('Could not find node with that value!')
    }
    // 删除叶子节点。
    if(!identifiedNode.left && !identifiedNode.right){
      const identifiedParent = identifiedNode.parent
      identifiedParent.removeNode(identifiedNode)
      return
    }
    // 删除的这个节点有左子节点和右子节点,或者只有其中一个节点。
    if(identifiedNode.left && identifiedNode.right){
      const nextBiggerNode = identifiedNode.right.findNext()
      if(nextBiggerNode.value !== identifiedNode.right.value){
        this.remove(nextBiggerNode.value)
        identifiedNode.value = nextBiggerNode.value
        identifiedNode.left.parent = identifiedNode
        identifiedNode.right.parent = identifiedNode
      }else{
        identifiedNode.value = identifiedNode.right.value
        identifiedNode.right = identifiedNode.right.right
        identifiedNode.left.parent = identifiedNode
        identifiedNode.right.parent = identifiedNode
      }
    }else{
      const childNode = identifiedNode.left || identifiedNode.right
      identifiedNode.left = childNode.left
      identifiedNode.right = childNode.right
      identifiedNode.value = childNode.value
    }
  }
  removeNode(node){
    if(this.left && this.left === node){
      this.left = null
      return 
    }
    if(this.right && this.right === node){
      this.right = null
      return
    }
  }
  findNext(){
    if(!this.left){
      return this
    }
    return this.left.findNext();
  }
}

class Tree{
  constructor() {
    this.root = new Node()
  }
  add(value){
    this.root.add(value)
  }
  remove(value){
    this.root.remove(value)
  }
  find(value){
    return this.root.find(value)
  }
}

const tree = new Tree();
tree.add(10)
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(20)
tree.add(25)
tree.add(23)
tree.add(28)
tree.add(26)
tree.add(39)
tree.remove(39)
tree.remove(20)
tree.remove(25)
console.log(tree);


console.log(tree.find(6));
console.log(tree.find(7));
console.log(tree.find(39));

