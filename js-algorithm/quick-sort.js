function sort(arr){
  let resultArray = arr.slice()
  if(resultArray.length<=1){
    return resultArray
  }
  const sArr=[],mArr =[arr[0]],bArr=[],cut =resultArray[0]
  for(let i=1;i<resultArray.length;i++){
    if(arr[i]<cut){
      sArr.push(arr[i])
    }else if(arr[i] === cut){
      mArr.push(arr[i])
    }else{
      bArr.push(arr[i])
    }
  }
  resultArray = [...sort(sArr),...mArr,...sort(bArr)]
  return resultArray
}

const sortedArr = sort([5,10,-3,-10,1,100,99])
console.log(sortedArr);