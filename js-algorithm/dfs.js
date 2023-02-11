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

const dfs = nodeTree =>{
   if(nodeTree.children && nodeTree.children.length){
     nodeTree.children.forEach(node => {
        console.log(node.index);
        dfs(node)
     });
   }
}