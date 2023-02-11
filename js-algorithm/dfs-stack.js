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
const dfs = node =>{
  let stack = []
  let nodes = []
  if(node){
     stack.push(node)
     while(stack.length){
        const node = stack.pop()
        nodes.push(node)
        let children = node.children || []
        for(let i= children.length-1;i>=0;i--){
          stack.push(children[i])
        }
     }
  }
  return nodes
}
console.log(dfs(obj));