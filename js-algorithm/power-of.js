// function isPowerOftwo(num){
//   // return Math.log2(num) % 1 === 0
//   debugger
//   if(num<1){
//     return false
//   }
//   let dividedNumber = num
//   while(dividedNumber !== 1){
//     if(dividedNumber % 2 !==0){
//       return false
//     }
//     dividedNumber /= 2
//   }
//   return true
// }
function isPowerOftwo(number){
  if(number<1){
    return false
  }
   return (number & (number-1)) === 0
}

console.log(isPowerOftwo(8));
console.log(isPowerOftwo(5));
console.log(isPowerOftwo(16));
console.log(isPowerOftwo(13));