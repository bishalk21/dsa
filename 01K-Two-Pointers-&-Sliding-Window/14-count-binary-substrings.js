/** Count Binary Substrings
 * https://leetcode.com/problems/count-binary-substrings/
 *
 * Give a binary string s,
 * return the number of non-empty substrings that have the same number of 0's and 1's,
 * and all the 0's and all the 1's in these substrings are grouped consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they occur.
 *
 * Example 1:
 * Input: s = "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's:
 *              "0011", "01", "1100", "10", "0011", and "01".
 *              Notice that some of these substrings repeat and
 *              are counted the number of times they occur.
 * Example 2:
 * Input: s = "10101"
 * Output: 4
 * Explanation: There are 4 substrings:
 *              "10", "01", "10", and "01" that have equal number of consecutive 1's and 0's.
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s[i] is either '0' or '1'.
 *
 * @param {string} s
 * @return {number}
 */

/**
 * Logic:
 * - We can count the lengths of consecutive runs of characters (0's and 1's) in the string.
 * - For each run of characters, we can determine how many valid substrings can be formed with the previous run.
 * - The number of valid substrings that can be formed between two runs is the minimum of the lengths of the two runs.
 * - We can keep track of the previous run length and the current run length as we iterate through the string.
 * - Whenever we encounter a change in character, we can calculate the number of valid substrings using the previous and current run lengths, and then update the previous run length to be the current run length.
 * - Finally, we need to account for the last run after the loop ends.
 *
 * Time Complexity: O(n) - We iterate through the string once to count the runs and calculate the valid substrings.
 * Space Complexity: O(1) - We use a constant amount of space to store the counts and lengths of runs.
 *
 * s = "00110011"
 * prevRunLength = 0, currRunLength = 1, count = 0
 * - i = 1: s[i] = s[i - 1] => s[1] = s[0] => 0, currRunLength++ => currRunLength = 2
 * - i = 2: s[i] != s[i - 1] => 1 != 0, count = 0 + min(prevRunLength, currRunLength) => count = 0
 *          prevRunLength = currRunLength => 2, currRunLength = 1
 * - i = 3: s[i] = s[i - 1] => s[3] = s[2] => 1, currRunLength++ => currRunLength = 2
 * - i = 4: s[i] != s[i - 1] => 0 != 1, count = 0 + min(prevRunLength, currRunLength) => count = 2
 *          prevRunLength = currRunLength => 2, currRunLength = 1
 * - i = 5: s[i] = s[i - 1] => s[5] = s[4] => 0, currRunLength++ => currRunLength = 2
 * - i = 6: s[i] != s[i - 1] => 1 != 0, count = 2 + min(prevRunLength, currRunLength) => count = 4
 *          prevRunLength = currRunLength => 2, currRunLength = 1
 * - i = 7: s[i] = s[i - 1] => s[7] = s[6] => 1, currRunLength++ => currRunLength = 2
 * After the loop ends, count = 4 + min(prevRunLength, currRunLength) => count = 6
 */

function countBinarySubstrings(s) {
  // count of valid substrings with equal number of consecutive 0's and 1's
  let count = 0;
  // length of the previous run of characters (either 0's or 1's)
  let prevRunLength = 0;
  // length of the current run of characters (either 0's or 1's)
  let currRunLength = 1;
  // iterate through the string starting from the second character
  for (let i = 1; i < s.length; i++) {
    // if the current character is the same as the previous character
    if (s[i] === s[i - 1]) {
      // increment the length of the current run
      currRunLength++;
    } else {
      // if the current character is different from the previous character
      // add the minimum of the previous run length and the current run length to the count
      count += Math.min(prevRunLength, currRunLength);
      // update the previous run length to be the current run length
      prevRunLength = currRunLength;
      // reset the current run length to 1 for the new character
      currRunLength = 1;
    }
  }
  // after the loop, add the minimum of the last run lengths to the count
  count += Math.min(prevRunLength, currRunLength);
  return count;
}
