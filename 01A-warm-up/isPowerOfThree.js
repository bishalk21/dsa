/** Power of Three
 * https://leetcode.com/problems/power-of-three/
 * Given an integer n, return true if it is a power of three.
 * Otherwise, return false.
 * An integer n is a power of three,
 * if there exists an integer x such that n == 3^x.
 *
 * Example 1:
 * Input: n = 27
 * Output: true
 * explanation: 27 = 3^3
 *
 * Example 2:
 * Input: n = 10
 * Output: false
 * explanation: 10 is not a power of 3.
 *
 * Algorithm Approach: Iterative Division
 * - If n is less than or equal to 0, return false (since powers of three are positive).
 * - Continuously divide n by 3 while n is divisible by 3.
 * - If at the end of the division process n equals 1, return true (indicating n is a power of three).
 * - Otherwise, return false.
 *
 * - Time Complexity: O(log3(n)) where n is the input number.
 * - Space Complexity: O(1)
 *
 * - Alternative Approach: Mathematical Check
 * - The maximum power of three that fits in a 32-bit signed integer is 3^19 = 1162261467.
 * - Therefore, any power of three must be a divisor of 1162261467.
 * - Check if n is greater than 0 and if 1162261467 is divisible by n.
 * - This approach has a time complexity of O(1) and space complexity of O(1).
 */

function isPowerOfThree(n) {
  if (n <= 0) return false;

  //   while (n % 3 === 0) { // until n is no longer divisible by 3
  //     n /= 3;
  //   }
  //   return n === 1;
  // Alternative Mathematical Check
  // return n > 0 && 1162261467 % n === 0;

  if (n === 1) return true; // 3^0 = 1
  if (n < 3) return false; // Powers of three are >= 3^1 = 3
  while (n > 3) {
    if (n % 3 !== 0) return false;
    n /= 3;
  }
  return n === 1;
}
