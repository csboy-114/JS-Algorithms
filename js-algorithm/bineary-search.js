function findElement(arr,target){
  let half = Math.floor((arr.length-1)/2)
  while(half >= 0 || half <= arr.length-1){
   if(target === arr[half]){
     return half
   }
   if(target> arr[half]){
      half = half + Math.floor((arr.length-1-half)/2)
   }else{
      half = Math.floor(half/2)
   }
  }
  return -1
}
const arr = [1,5,9,13,99,100]
console.log(findElement(arr,13));