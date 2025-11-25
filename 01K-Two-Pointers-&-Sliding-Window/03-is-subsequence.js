/** Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters
 * without disturbing the relative positions of the remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 */

function isSubsequence(s, t) {
  let pointerS = 0;
  let pointerT = 0;

  while (pointerT < t.length) {
    if (s[pointerS] === t[pointerT]) {
      pointerS++;
    }
    pointerT++;
  }
  return pointerS === s.length;
}
