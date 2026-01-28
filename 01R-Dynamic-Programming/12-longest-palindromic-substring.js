/** Longest Palindromic Substring
 * https://www.leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters (lower-case and/or upper-case),
 *
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  let n = s.length;
  let ans = [0, 0]; // start, end
  // 2d array to store palindrome status
  let dp = Array.from({ length: n }, () => Array(n).fill(null));
  // every single character is a palindrome
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    ans = [i, i];
    // 2 character substrings
    // if (i < n - 1 && s[i] === s[i + 1]) {
    //   dp[i][i + 1] = true;
    //   ans = [i, i + 1];
    // }
  }
  // 2 character substrings
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
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
        ans = [start, end];
      } else {
        dp[start][end] = false;
      }
    }
  }
  //   return s.slice(ans[0], ans[1] + 1);
  return s.substring(ans[0], ans[1] + 1);
  // substring vs slice
  // substring(start, end) -> end is exclusive
  // slice(start, end) -> end is exclusive
  // + 1 because we want to include the end index and substring/slice exclude the end index
}
