/** Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character
 * while preserving the order of characters.
 * No two characters may map to the same character,
 * but a character may map to itself.
 *
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Algorithm:
 * 1. Check if lengths of s and t are different. If yes, return false.
 * 2. Create two maps to store character mappings from s to t and t to s.
 * 3. Iterate through characters of both strings:
 *   a. If mapping doesn't exist in both maps, create it.
 *  b. If mapping exists, check if it matches the current characters.
 *    If not, return false.
 * 4. If all characters are processed without conflicts, return true.
 * Time Complexity: O(n), where n is the length of the strings.
 * Space Complexity: O(1), since the size of the maps is limited by the character set.

*/

function isIsomorphic(s, t) {
  // corner case: if lengths are different
  if (s.length !== t.length) return false;
  // create two maps to store character mappings
  let mapStoT = {};
  let mapTtoS = {};

  // iterate through characters of both strings
  // store mapping in both maps
  for (let i = 0; i < s.length; i++) {
    // if mapping doesn't exist, create it
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
      // if mapping exists, check if it matches
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
}
