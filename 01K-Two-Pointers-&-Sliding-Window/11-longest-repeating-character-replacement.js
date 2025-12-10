/** Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 *
 * You are given a string s and an integer k.
 * You can choose any character of the string and
 * change it to any other uppercase English character.
 * You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter
 * you can get after performing the above operations.
 *
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * Example 2:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4.
 * Notice that you do not have to use all the k operations.
 */

function characterReplacement(s, k) {
  let map = {};
  let i = 0;
  let j = 0;
  let maxLength = 0;
  let windowSize = 0;
  map[s[0]] = 1;

  // Time Complexity: O(26N) ~ O(N)
  // Space Complexity: O(1)
  // since the charset is fixed to 26 uppercase English letters

  while (j < s.length) {
    if (windowIsValid(map, k)) {
      windowSize = j - i + 1;
      maxLength = Math.max(maxLength, windowSize);
      j++;
      map[s[j]] = !map[s[j]] ? 1 : map[s[j]] + 1;
      //   map[s[j]] = (map[s[j]] || 0) + 1;
    } else {
      map[s[i]]--;
      i++;
    }
  }
  return maxLength;
}

function windowIsValid(map, k) {
  let maxCount = 0;
  let totalCount = 0;
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(65 + i);
    if (map[char]) {
      totalCount += map[char];
      maxCount = Math.max(maxCount, map[char]);
    }
  }
  return totalCount - maxCount <= k;
}

// using arrays
// Time Complexity: O(26N) ~ O(N) -
// Space Complexity: O(1)
// since the charset is fixed to 26 uppercase English letters
function charactersReplacement(s, k) {
  let i = (j = 0);
  let maxLength = 0;
  let count = new Array(26).fill(0); // for 'A' to 'Z' ascii 65 to 90
  let windowSize = 0;
  count[s.charCodeAt(0) - 65] = 1; // 'A' = 65

  while (j < s.length) {
    if (windowIsValidArray(count, k)) {
      windowSize = j - i + 1;
      maxLength = Math.max(maxLength, windowSize);
      j++;
      count[s.charCodeAt(j) - 65]++;
    } else {
      count[s.charCodeAt(i) - 65]--;
      i++;
    }
  }
  return maxLength;
}

function windowIsValidArray(count, k) {
  let maxCount = 0;
  let totalCount = 0;
  for (let i = 0; i < 26; i++) {
    totalCount += count[i];
    maxCount = Math.max(maxCount, count[i]);
  }
  return totalCount - maxCount <= k;
}
