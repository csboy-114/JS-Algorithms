function min(arr = []) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
function isEven(num) {
  return num % 2 === 0;
}
console.log(min([7, 8, 2, 9, 10, 1, 0]));
