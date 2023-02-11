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
 *  1.把节点树中的节点深度取出来，存到nodelist中
 *  
 */
const dfs = (node,nodeList) =>{
   nodeList.push(node)
   if(node.children){
    node.children.forEach(item=>{
       dfs(item,nodeList)
    })
   }
   return nodeList
}
console.log(dfs(obj,[]));