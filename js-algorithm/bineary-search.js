function findElement(arr,target){
  debugger
  let half = ~~((arr.length-1)/2)
  while(target!== arr[half]){
    if(target<arr[half]){
      half /=2 
    }else if(target>arr[half]){
      half = ~~((half + arr.length-1)/2)
    }else {
      target = arr[half]
    }
  }
  return target ?? 'cant not find'
}
// 递归形式
function findElement1(arr,target){
  debugger
  let half = ~~((arr.length-1)/2)
  
    if(target<arr[half]){
      half /=2 
      findElement1(arr.slice(0,half),target)
    }else if(target>arr[half]){
      half = ~~((half + arr.length-1)/2)
      findElement1(arr.slice(half),target)
    }else {
      target = arr[half]
    }
  return target
}
const arr = [1,5,9,13,99,100]
console.log(findElement(arr,99));