/** Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function lengthOfLongestSubstring(s) {
  let map = {};
  let i = 0;
  let j = 0;
  let maxLength = 0;
  let windowSize = 0;

  // Time Complexity: O(N)
  // Space Complexity: O(min(M,N))
  // where M is the size of the charset, N is the size of the string
  for (j = 0; j < s.length; j++) {
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }
    map[s[j]] = j;
    windowSize = j - i + 1;
    maxLength = Math.max(maxLength, windowSize);
  }

  //   while (j < s.length) {
  //     if (map[s[j]] === undefined || map[s[j]] < i) {
  //       map[s[j]] = j;
  //       windowSize = j - i + 1;
  //       maxLength = Math.max(maxLength, windowSize);
  //       j++;
  //     } else {
  //       i = map[s[j]] + 1;
  //     }
  //   }
  return maxLength;
}
