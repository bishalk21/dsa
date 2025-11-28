/** Knuth-Morris-Pratt (KMP) Algorithm
 * Used for substring search within a main string.
 * Time Complexity: O(m + n)
 * Space Complexity: O(n)
 * where m is the length of the main string and n is the length of the pattern.
 *
 * Find the Index of the First Occurrence in a String
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

function strStr(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;

  let LPS = [0]; // Longest Prefix Suffix array

  // Preprocess the needle to create the LPS array
  let i = 0;
  let j = 1;

  while (j < n) {
    if (needle[i] === needle[j]) {
      LPS[j] = i + 1;
      i++;
      j++;
    } else {
      if (j === 0) {
        LPS[j] = 0;
        j++;
      } else {
        i = LPS[i - 1];
      }
    }
  }

  // Search for the needle in the haystack using the LPS array
  i = 0; // Pointer for haystack
  j = 0; // Pointer for needle
  while (i < m) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = LPS[j - 1];
      }
    }
    if (j === n) {
      return i - n; // Found the needle, return the starting index
    }
  }
  return -1; // Needle not found in haystack
}
