/** Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 *
 * Example 1:
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 * Example 2:
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

/** Brute Force Approach - Sliding Window
 * Time Complexity: O((m - n + 1) * n) = O(m * n) = O(n^2) in the worst case,
 * where m is the length of haystack and n is the length of needle.
 *
 * Space Complexity: O(1)
 */

function strStr(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;

  for (let i = 0; i <= m - n; i++) {
    // Time Complexity: O(m - n + 1), where m is the length of haystack and n is the length of needle
    let j = 0;
    for (j = 0; j < n; j++) {
      // Time Complexity: O(n), where n is the length of needle
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === n) {
      return i;
    }
  }
  return -1;
}
