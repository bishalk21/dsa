/** Largest Odd Number in String
 * https://leetcode.com/problems/largest-odd-number-in-string/
 *
 * You are given a string num, representing a large integer.
 * Return the largest-valued odd integer (as a string) that is a non-empty substring of num,
 * or an empty string "" if no odd integer exists.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * Example 1:
 * Input: num = "52"
 * Output: "5"
 * Explanation: The only non-empty substrings are "5", "2", and "52".
 * "5" is the only odd number.
 *
 * Example 2:
 * Input: num = "4206"
 * Output: ""
 * Explanation: There are no odd numbers in "4206".
 *
 * Algorithm:
 * 1. Start from the end of the string and move backwards.
 * 2. Check if the current character is an odd digit (1, 3, 5, 7, 9).
 * 3. If an odd digit is found, return the substring from the start of the string to the current position (inclusive).
 * 4. If no odd digit is found by the time the start of the string is reached, return an empty string.
 * 5. Time Complexity: O(n), where n is the length of the string.
 * 6. Space Complexity: O(1) if we don't consider the output string, otherwise O(n) for the output string.
 *
 * Also: can use regex to find the last odd digit and slice the string accordingly
 */

function largestOddNumber(num) {
  let n = num.length - 1;
  //   while (n >= 0) {
  //     if (Number(num[i]) % 2 === 1) {
  for (let i = n; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      // odd number check

      return num.substring(0, i + 1); // return substring from start to i+1
    }
    // n--;
  }
  return ""; // no odd number found
}
