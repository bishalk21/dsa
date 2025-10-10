/** Split a string in Balanced Strings
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 *
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 * Given a balanced string s, split it into some number of substrings such that:
 *   - Each substring is balanced.
 * Return the maximum amount of split balanced strings.
 *
 * Example 1:
 * Input: s = "RLRRLLRLRL"
 * Output: 4
 * Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 *
 * Algorithm:
 * 1. Initialize two counters R and L to 0, and a count variable to 0.
 * 2. Iterate through each character in the string:
 *   - If the character is 'R', increment the R counter.
 *  - If the character is 'L', increment the L counter.
 * 3. Whenever R equals L, it means we have found a balanced substring:
 *   - Increment the count variable.
 *  - Reset R and L counters to 0 for the next potential balanced substring.
 * 4. Return the count variable as the result.
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(1)
 */

function balancedStringSplit(s) {
  let R = 0;
  let L = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      R++;
    } else {
      L++;
    }
    if (R === L) {
      count++;
      R = 0;
      L = 0;
    }
  }
  return count;
}

// optimized
function balancedStringSplits(s) {
  let temp = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }
    if (temp === 0) {
      count++;
      temp = 0;
    }
  }
  return count;
}
