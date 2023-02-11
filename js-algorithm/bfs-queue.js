let obj = { 
  children: [{ 
      index: 0, 
      children: [{ 
          index: 1, 
          children: [{ 
              index: 3 
          }] 
      }] 
  }, { 
      index: 4 
  }, { 
      index: 5, 
      children: [{ 
          index: 7, 
          children: [{ 
              index: 8 
          }] 
      }] 
  }, { 
      index: 6 
  }] 
}
/**
 *  1.深度优先遍历 非递归版 栈版本
 *  
 */
const bfs = node =>{
  let queue = []
  let nodes = []
  if(node){
    queue.push(node)
    while(queue.length){
      const node = queue.shift()
      nodes.push(node)
      let children = node.children || []
      for(let i=0;i<children.length;i++){
        queue.push(children[i])
      }
    }
  }
  return nodes
}
console.log(bfs(obj));