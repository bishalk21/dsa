/** Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Algorithm:
 * 1. Initialize a pointer `x` to track the current character index in the first string.
 * 2. Loop through each character of the first string using the pointer `x`.
 * 3. For each character, compare it with the corresponding character in all other strings.
 *   - If a mismatch is found or if any string is shorter than the current index, return the substring of the first string from the start to the current index.
 * 4. If the loop completes without finding a mismatch, return the entire first string as the longest common prefix.
 * 5. If the input array is empty, return an empty string.
 * 6. If any string in the array is empty, return an empty string.
 * 7. The time complexity is O(S) where S is the sum of all characters in all strings.
 *   The space complexity is O(1) as we are using only a constant amount of extra space.
 * 8. This approach efficiently finds the longest common prefix by leveraging character-by-character comparison.
 */

function longestCommonPrefix(strs) {
  // pointer for first string
  let x = 0;
  // loop until the end of the first string to compare with other strings
  while (x < strs[0].length) {
    // get the current character from the first string
    let char = strs[0][x]; // f from flower
    // loop through the other strings to compare the character at the same position
    for (let i = 1; i < strs.length; i++) {
      // if the character is not the same
      // if the current string is shorter than the current position
      if (strs[i][x] !== char || x == strs[i].length) {
        // return the substring from the first string up to the current position
        return strs[0].substring(0, x);
      }
    }
    ++x;
  }
  return strs[0];
}
