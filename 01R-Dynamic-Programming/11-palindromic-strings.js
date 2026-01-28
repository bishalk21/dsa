/** Palindromic Strings
 * https://www.leetcode.com/problems/palindromic-substrings/
 *
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 *
 * Example 1:
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 *
 * Example 2:
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */

function countSubstrings(s) {
  let count = 0;
  let n = s.length;
  // 2d array to store palindrome status
  let dp = Array.from({ length: n }, () => Array(n).fill(null));
  // every single character is a palindrome
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
    // 2 character substrings
    // if (i < n - 1 && s[i] === s[i + 1]) {
    //   dp[i][i + 1] = true;
    //   count++;
    // }
  }
  // 2 character substrings
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    } else {
      dp[i][i + 1] = false;
    }
  }
  // substrings of length 3 or more
  for (let length = 3; length <= n; length++) {
    for (let start = 0; start <= n - length; start++) {
      let end = start + length - 1;
      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        count++;
      } else {
        dp[start][end] = false;
      }
    }
  }
  return count;
}
