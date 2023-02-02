export class LinkedList{
  constructor() {
    this.head = null
    this.tail = null
  }
  insertAfter(value,afterValue){
    const existingNode = this.find(afterValue)
    if(existingNode){
      const newNode = { value :value,next:existingNode.next }
      existingNode.next = newNode
    }
    
  }
  find(value){
    if(!this.head){
      return null
    }
    let curNode = this.head
    while(curNode){
      if(curNode.value === value){
        return curNode
      }
      curNode = curNode.next
    }
    return null
  }
  delete(value){
    if(!this.head){
      return null
    }
    let curNode = this.head
    while(this.head && this.head.value === value){
      this.head = this.head.next
    }
    while(curNode.next){
      if(curNode.next.value === value){
        curNode.next = curNode.next.next
      }else{
        curNode = curNode.next
      }
    }
    if(this.tail.value === value){
      this.tail = curNode
    }
  }
  append(value){
    const newNode = {value:value,next:null}
    if(this.tail){
      this.tail.next = newNode
    }
    this.tail = newNode
    if(!this.head){
      this.head = newNode
    }
  }
  prepend(value){
    const newNode = {value:value,next:this.head}
    this.head = newNode
    if(!this.tail){
      this.tail = newNode
    }
  }
  deleteHead(){
    if(!this.head){
      return null
    }
    const deletedItem = this.head
    if(this.head.next){
      this.head = this.head.next
    }else{
      this.head = null
      this.tail = null
    }
    return deletedItem
  }
  toArray(){
    const NodeArr = []
    let curNode = this.head
    NodeArr.push(curNode)
    while(curNode.next){
      NodeArr.push(curNode.next)
      curNode = curNode.next
    }
    return NodeArr
  }
}

const l1 = new LinkedList()
// l1.append(1)
// l1.append('Hello Here')
// l1.append('Max')
// l1.append(true)
// l1.append(18.51)
// l1.append('First value')

// console.log(l1.toArray());
// console.log(l1.insertAfter('Max','白沙'));
// console.log(l1.toArray());