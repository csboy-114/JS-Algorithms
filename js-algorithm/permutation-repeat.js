// 全排列 有重复
function getPermutations(options,length){
   const permutation = []
   if(length === 1){
    return options.map(option=>[option])
   }
   const partialPermutations = getPermutations(options,length - 1)
   for(const option of options){
       for(const existingPermutation of partialPermutations){
        permutation.push([option].concat(existingPermutation))
       }
   }
   return permutation
}

const digits = [1,2,3]
const resultLength = 2
console.log(getPermutations(digits,resultLength));