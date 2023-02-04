function findElement(arr,target){
  let startIndex = 0,endIndex = arr.length-1
  while(startIndex <= endIndex){
    const middleIndex = startIndex + Math.floor((endIndex-startIndex)/2)
    if(target === arr[middleIndex]){
      return middleIndex
    }
    if(target > arr[middleIndex]){
      startIndex = middleIndex + 1
    }else{
      endIndex = middleIndex - 1
    }
  }
  return -1
}
const arr = [1,5,9,13,99,100]
console.log(findElement(arr,98));