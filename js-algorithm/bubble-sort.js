function sort(arr){
  const resultArray = arr.slice()
  for(let i=0;i<resultArray.length;i++){
    for(let j= i+1;j<resultArray.length;j++){
      if(resultArray[i]>resultArray[j]){
        temp = resultArray[i]
        resultArray[i] = resultArray[j]
        resultArray[j] = temp
      }
    }
  }
  return resultArray
}

const sortedArr = sort([5,10,-3,-10,1,100,99])
console.log(sortedArr);