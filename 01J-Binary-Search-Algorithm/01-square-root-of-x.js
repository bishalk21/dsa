/** Square Root of X
 * https://leetcode.com/problems/sqrtx/
 *
 * Given a non-negative integer x,
 * return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 * Example 1:
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 *
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is approximately 2.82842,
 * and since we round it down to the nearest integer, 2 is returned.
 *
 * Constraints:
 * 0 <= x <= 2^31 - 1
 */

var mySqrt = function (x) {
  if (x === 0) return 0;
  // using built-in method
  // return Math.floor(Math.sqrt(x));
  // return Math.trunc(Math.pow(x, 0.5));

  // using linear search
  // for (let i = 1; i <= x; i++) {
  //   if (i * i === x) return i;
  //   if (i * i > x) return i - 1;
  // }
  // return x;

  // binary search
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);
  // let mid = Math.trunc((left + right) / 2);
  // to prevent overflow in other languages
  let mid = left + Math.floor((right - left) / 2);
  while (left <= right) {
    const squared = mid * mid;
    if (squared === x) {
      return mid;
    } else if (squared > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.trunc((left + right) / 2);
  }
  return right;
};
