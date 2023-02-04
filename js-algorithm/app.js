function findElement(arr,target){
  let index = 0
  for(item of arr){
    if(item === target) return index
    index++
  }
}

const arr = [5,3,10,-10,33,51]
console.log(findElement(arr,33));