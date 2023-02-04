// 非递归
// function fac(number){
//   let res = number
//   for(let i=number-1;i>0;i--){
//     res *= i
//   }
//   return res
// }
// 递归
function fac(number){
  if(number===1) return 1
  return number * fac(number-1)
}
console.log(fac(10));