/** Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1,
 * or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * Example 1:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 * Explanation: s2 does not contain any permutation of s1.
 */

function checkInclusion(s1, s2) {
  let hashS1 = new Array(26).fill(0);
  let hashS2 = new Array(26).fill(0);
  let windowLength = s1.length;

  for (let i = 0; i < windowLength; i++) {
    hashS1[s1.charCodeAt(i) - 97]++;
    hashS2[s2.charCodeAt(i) - 97]++;
  }

  let i = 0;
  let j = windowLength - 1;

  while (j < s2.length) {
    if (isHashSame(hashS1, hashS2)) return true;
    hashS2[s2.charCodeAt(i) - 97]--;
    i++;
    j++;
    if (j < s2.length) {
      hashS2[s2.charCodeAt(j) - 97]++;
    }
  }
  return false;
}

function isHashSame(hashS1, hashS2) {
  for (let i = 0; i < 26; i++) {
    if (hashS1[i] !== hashS2[i]) return false;
  }
  return true;
}
