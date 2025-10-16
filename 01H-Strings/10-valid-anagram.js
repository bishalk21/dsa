/** Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Algorithm: sort and compare
 * 1. Convert both strings to character arrays
 * 2. Sort both character arrays
 * 3. Convert sorted character arrays back to strings
 * 4. Compare the two sorted strings and return the result
 *
 * Time Complexity: O(n log n) - due to sorting
 * Space Complexity: O(n) - for storing the sorted character arrays
 *
 * Map is the better approach when solving any counting problems,
 * as it provides a more efficient way to count character frequencies.
 * max characters in the alphabet is 26, so space complexity is O(1)
 *
 * Algorithm: map (frequency counter)
 * 1. If the lengths of the strings are different, return false
 * 2. Create a frequency map for the first string
 * 3. Iterate through the second string and decrement the frequency map
 * 4. If any character's frequency goes below zero, return false
 * 5. If all characters match, return true
 * Time Complexity: O(n) - single pass through both strings
 * Space Complexity: O(1) - fixed size of the frequency map (26 letters in the alphabet)
 */

function isAnagram(s, t) {
  // return s.split("").sort().join("") === t.split("").sort().join("");

  // Step 1: Convert both strings to character arrays
  const charArrayS = s.split("");
  const charArrayT = t.split("");
  // Step 2: Sort both character arrays
  charArrayS.sort();
  charArrayT.sort();
  // Step 3: Convert sorted character arrays back to strings
  const sortedS = charArrayS.join("");
  const sortedT = charArrayT.join("");
  // Step 4: Compare the two sorted strings and return the result
  return sortedS === sortedT;
}

function isAnagramMap(s, t) {
  // 1. If the lengths of the strings are different, return false
  if (s.length !== t.length) return false;

  // 2. Create a frequency map for the first string
  let map = {};

  // populate the map with the frequency of each character in string s
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  // 3. Iterate through the second string and decrement the frequency map
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) {
      return false; // 4. If any character's frequency goes below zero, return false
    } else {
      map[t[i]]--;
    }
  }
  return true; // 5. If all characters match, return true
}
