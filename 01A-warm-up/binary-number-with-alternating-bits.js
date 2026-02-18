/** Binary Number with Alternating Bits
 * https://leetcode.com/problems/binary-number-with-alternating-bits/
 *
 * Given a positive integer, check whether it has alternating bits: namely,
 * if two adjacent bits will always have different values.
 * (In other words, the binary representation of the number consists of alternating 0s and 1s.)
 *
 * Example 1:
 * Input: n = 5
 * Output: true
 * Explanation: The binary representation of 5 is: 101
 *
 * Example 2:
 * Input: n = 7
 * Output: false
 * Explanation: The binary representation of 7 is: 111.
 *
 * Example 3:
 * Input: n = 11
 * Output: false
 * Explanation: The binary representation of 11 is: 1011.
 *
 * Constraints:
 * - 1 <= n <= 2^31 - 1
 *
 * @param {number} n
 * @return {boolean}
 */

/** Algorithm 1: Bit Manipulation
 * Time Complexity: O(1) - The number of bits in the integer is fixed (32 bits for a 32-bit integer), so it is constant time.
 * Space Complexity: O(1) - The space used is constant, as we are only using a few variables to store intermediate results.
 */
function hasAlternatingBits(n) {
  // Get the last bit of n
  let lastBit = n & 1;
  // Right shift n to check the next bit
  n >>= 1;
  // Loop until n becomes 0
  while (n > 0) {
    // Get the current bit
    let currentBit = n & 1;
    // If the current bit is the same as the last bit, return false
    if (currentBit === lastBit) {
      return false;
    }
    // Update lastBit to currentBit
    lastBit = currentBit;
    // Right shift n to check the next bit
    n >>= 1;
  }
  // If we have checked all bits and found no adjacent bits that are the same, return true
  return true;
}

/**
 * n = 5 (binary: 101)
 * lastBit = 5(101) & 1(001) = 1
 * n >>= 1 -----> 101 >> shift right by 1 bit -----> 10 (2 in decimal)
 * while (n > 0) { ---> 10 (2) > 0
 *      currentBit = 2(10) & 1(01) = 0
 *      lastBit (1) = currentBit (0) = 0
 *      n >>= 1 -----> 10 >> shift right by 1 bit -----> 1 (1 in decimal)
 *
 * 1 > 0
 * currentBit = 1(1) & 1(1) = 1
 * lastBit (0) = currentBit (1) = 1
 * n >>= 1 -----> 1 >> shift right by 1 bit -----> 0 (0 in decimal)
 *
 * 0 > 0 (false) ---> exit loop and return true
 */
