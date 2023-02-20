class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}
// 172页
class Tree{
  constructor(){
    this.root = null
  }
  insert(value){
    if(this.root ===null){
      this.root = new Node(value)
    }else{
      this.insertNode(this.root,value)
    }
  }
  insertNode(node,value){
    const newNode = new Node(value)
    if(node === null){
       node = newNode
    }
    if(node.value > value){
      if(node.left === null){
        node.left = newNode
      }else{
        this.insertNode(node.left,value)
      }
    }
    if(node.value < value){
      if(node.right === null){
        node.right = newNode
      }else{
        this.insertNode(node.right,value)
      }
    }
  }
  search(value){
    return this.searchNode(this.root,value)
  }
  searchNode(node,value){
    if(node.value === value){
      return true
    }
    if(node.value>value){
      if(node.left === null) return false
      return this.searchNode(node.left,value)
    }else if(node.value < value){
      if(node.right === null) return false
      return this.searchNode(node.right,value)
    }
  }
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root,callback)
  }
  inOrderTraverseNode(node,callback){
    // 中序遍历
    if(node!==null){
      this.inOrderTraverseNode(node.left,callback)
      callback(node.value)
      this.inOrderTraverseNode(node.right,callback)
    }
  }
  preOrderTraverse(callback){
    this.inOrderTraverseNode(this.root,callback)
  }
  preOrderTraverseNode(node,callback){
    // 先序遍历
    if(node!==null){
      callback(node.value)
      this.inOrderTraverseNode(node.left,callback)
      this.inOrderTraverseNode(node.right,callback)
    }
  }
  postOrderTraverse(callback){
    this.inOrderTraverseNode(this.root,callback)
  }
  postOrderTraverseNode(node,callback){
    // 后序遍历
    if(node!==null){
      callback(node.value)
      this.inOrderTraverseNode(node.left,callback)
      this.inOrderTraverseNode(node.right,callback)
    }
  }
  min(){
    return this.minNode(this.root)
  }
  minNode(node){
    let current =node
    while(current && current.left){
      current = current.left
    }
    return current
  }
  max(){
    return this.maxNode(this.root)
  }
  maxNode(node){
    let current =node
    while(current && current.right){
      current = current.right
    }
    return current
  }
  remove(value){
    this.root = this.removeNode(this.root,value)
  }
  removeNode(node,value){
    if(node === null){
      return null
    }
    if(node.value > value){
      node.left = this.removeNode(node.left,value)
      return node
    }else if(node.value < value){
      node.right = this.removeNode(node.right,value)
      return node
    }else{
      // 找到相等值
      if(node.left === null && node.right === null){
        // 叶子节点
        node = null
        return null
      }
      if(node.left === null){
        // 有一个子节点
        node = node.right
        return node
      }else if(node.right ===null){
        node = node.left
        return node
      }
      // 有两个子节点
      const aux = this.minNode(node.right)
      node.value = aux.value
      node.right = this.removeNode(node.right,value)
      return node
    }
  }
}

const bst = new Tree()

bst.insert(2)
bst.insert(1)
bst.insert(3)
bst.insert(8)
bst.insert(9)
bst.insert(7)
bst.insert(15)
bst.insert(17)
bst.insert(19)

console.log(bst);
