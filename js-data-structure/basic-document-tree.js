class Node{
  constructor(value,parentNode=null) {
    this.parent = parentNode
    this.value = value
    this.children = []
  }
  addNode(val){
    const node = new Node(val,this)
    this.children.push(node)
    return {node:node,index:this.children.length-1}
  }
  removeNode(index){
    this.children.splice(index,1)
  }
}


class Tree{
  constructor(rootValue) {
    this.root = new Node(rootValue)
  }
}

const filesystem = new Tree('/')

const documentsData = filesystem.root.addNode('/document')
const gamesNodeData =  filesystem.root.addNode('/games')

documentsData.node.addNode('results.txt')
gamesNodeData.node.addNode('cod.exe')

console.log(filesystem);