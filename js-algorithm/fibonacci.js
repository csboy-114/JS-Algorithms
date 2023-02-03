function fib(n){
  const nums = [1,1]
  for(let i=2;i<n+1;i++){
    nums.push(nums[i-2]+nums[i-1])
  }
  return nums[n]
}
console.log(fib(4));