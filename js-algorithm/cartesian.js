const product = (colors,sizes)=>{
   const res =[]
   for(let color of colors){
      for(let size of sizes){
         if(Array.isArray(color)){
            res.push([...color,size])
         }else{
            res.push([color,size])
         }
      }
   }
   return res
}


const colors = ['黑色', '白色', '金色']
const sizes =['5.5', '6.5', '7.5']
const styles = ['v neck','round neck']

// console.log(fn(colors,sizes));

const cartesian = (...args) =>{
 return args.reduce((prev,next)=>{
      prev = product(prev,next)
      return prev
   })
}

console.log(cartesian(colors,sizes,styles));