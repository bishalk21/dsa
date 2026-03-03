/** Partitioning into Minimum Numbers of Deci-Binary Numbers
 * https://leetcode.com/problems/partitioning-into-minimum-numbers-of-deci-binary-numbers/
 *
 * A decimal number is called deci-binary if each of its digits is either 0 or 1
 * without any leading zeros.
 * For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
 * Given a string n that represents a positive decimal integer,
 * return the minimum number of positive deci-binary numbers needed so that they sum up to n.
 *
 * Example 1:
 * Input: n = "32"
 * Output: 3
 * Explanation: 10 + 11 + 11 = 32
 *
 * Example 2:
 * Input: n = "82734"
 * Output: 8
 * Explanation: 10000 + 10000 + 10000 + 10000 + 1000 + 1000 + 100 + 34 = 82734
 *
 * Example 3:
 * Input: n = "27346209830709182346"
 * Output: 9
 * Explanation: 10000000000000000000 + 10000000000000000000 + 1000000000000000000 + 10000000000000000 + 1000000000000000 + 10000000000000 + 1000000000 + 10000 + 234609830709182346 = 27346209830709182346
 *
 * Constraints:
 * 1 <= n.length <= 10^5
 * n consists of only digits.
 * n does not contain any leading zeros and represents a positive integer.
 *
 * @param {string} n
 * @return {number}
 */

/** Approach: Greedy
 * The minimum number of deci-binary numbers needed to sum up to n is equal to the maximum digit in n.
 * This is because each deci-binary number can contribute at most 1 to each digit position.
 * For example, if the maximum digit in n is 3,
 * we can use three deci-binary numbers to contribute 1 to that digit position,
 * and the remaining digits can be contributed by other deci-binary numbers.
 * Therefore, the answer is simply the maximum digit in the string n.
 * The time complexity of this algorithm is O(m), where m is the length of the input string n, since we need to iterate through the digits to find the maximum digit.
 * The space complexity is O(1) since we are using a constant amount of extra space.
 */
function minPartitions(n) {
  let maxDigit = 0;
  for (let i = 0; i < n.length; i++) {
    maxDigit = Math.max(maxDigit, parseInt(n[i]));
  }
  return maxDigit;
}

function minPartitions(n) {
  let maxDigit = 0;
  for (let i = 0; i < n.length; i++) {
    // Convert character to integer
    // let digit = parseInt(n[i]);
    // let digit  = n.charCodeAt(i) - 48; // '0'.charCodeAt(0) is 48
    let digit = n.charCodeAt(i) - "0".charCodeAt(0);
    maxDigit = Math.max(maxDigit, digit);
  }
  return maxDigit;
}
