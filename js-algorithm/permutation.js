// 全排列
const permutation = arr =>{
  const res = []
  if(arr.length === 1){
    return arr
  }
  if(arr.length === 2){
    return [arr,[arr[1],arr[0]]]
  }
  for(let i =0;i<arr.length;i++){
    const  first = arr[i]
    const  restArr = arr.slice(0,i).concat(arr.slice(i+1))
    const  permutationRestArr = permutation(restArr)
    for(let j=0;j<permutationRestArr.length;j++){
      res.push([first,...permutationRestArr[j]])
    }
  }
  return res
}
console.log(permutation([1,2,3,4]));