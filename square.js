function mySqrt(x) {
  if (x < 2) return x;
  let left = 1, right = Math.floor(x / 2), ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sq = mid * mid;

    if (sq === x) return mid;
    if (sq < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}
console.log(mySqrt(8)); // Output: 2console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(3)); // Output: 1
console.log(mySqrt(0)); // Output: 0
console.log(mySqrt(16)); // Output: 4


