/** Longest balanced Substring I
 * https://leetcode.com/problems/longest-balanced-substring-i/
 *
 * You are given a string s consisting of lowercase English letters. A substring of s is called balanced if each letter that occurs in the substring appears the same number of times.
 *
 * A substring of s is called balanced if all distinct character in the substring
 * appear the same number of times.
 * (For example, "aabbcc" is balanced because 'a', 'b', and 'c' all appear 2 times, while "aabbccc" is not balanced because 'a' and 'b' appear 2 times but 'c' appears 3 times.)
 * Return the length of the longest balanced substring of s. If there is no balanced substring, return 0.
 *
 * Example 1:
 * Input: s = "abbac"
 * Output: 4
 * Explanation: The longest balanced substring is "abba", which has a length of 4.
 *              both distinct characters 'a' and 'b' appear 2 times in "abba".
 * Example 2:
 * Input: s = "zzabccy"
 * Output: 4
 * Explanation: The longest balanced substring is "zabc", which has a length of 4.
 *              the distinct characters 'z', 'a', 'b', and 'c' all appear 1 time in "zabc".
 * Example 3:
 * Input: s = "aba"
 * Output: 2
 * Explanation: The longest balanced substring is "ab" or "ba", which has a length of 2.
 *              both distinct characters 'a' and 'b' appear 1 time in "ab" and "ba".
 *
 * Constraints:
 * * 1 <= s.length <= 1000
 * * s consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */

/** Algorithm: Sliding Window
 * 1. understand the problem
 *    - we need to find the longest balanced substring in the given string s.
 *    - a balanced substring is one where all distinct characters appear the same number of times.
 *    - suppose k is the number of distinct characters in the substring,
 *      then each character must appear n times, where n is a positive integer.
 * 2. plan
 *    - we can use a sliding window approach to find the longest balanced substring.
 *    - we will maintain a frequency map to count the occurrences of each character in the current window.
 *    - we will expand the right pointer of the window to include more characters until the substring is no longer balanced.
 *    - when the substring is no longer balanced, we will move the left pointer to try to restore balance.
 *    - we will keep track of the maximum length of a balanced substring found during this process.
 * 3. data structures
 *    - we could use a Map to store the frequency of characters in the current window.
 *    - but since we are only dealing with lowercase English letters,
 *      we can use an array of size 26 to store the frequency of each character.
 *      it will be more efficient and faster than a Map in terms of both time and space complexity.
 *      Array index access is O(1) while Map access is O(log n) in the worst case.
 * 4. implementation
 *    - start with pointer start = 0
 *    - frequency array freq of size 26 initialized to 0 should be initialized inside the loop
 *      to reset the frequency count for each new starting point.
 *    - for pointer end from 0 to s.length - 1:
 *      - increment the frequency of the character at end pointer in freq array
 *      - check if the current substring from start to end is balanced:
 *        - find the number of distinct characters in the current window
 *        - find the frequency of the first distinct character
 *          (this will be the expected frequency for all characters)
 *        - check if all distinct characters have the same frequency
 *      - if the substring is balanced, update the maximum length
 *      - if the substring is not balanced, move the start pointer to the right until it becomes balanced again
 * 5. test the implementation with the provided examples and edge cases
 *
 * Time Complexity: O(n^2) in the worst case, where n is the length of the string.
 *                  This is because in the worst case, we may need to check each substring for balance,
 *                  which takes O(n) time, and there are O(n) substrings.
 * Space Complexity: O(1) since the frequency array has a fixed size of 26, regardless of the input size.
 */

function longestBalancedSubStr(s) {
  let n = s.length;
  let maxLen = 0; // to store the length of the longest balanced substring
  for (let start = 0; start < n; start++) {
    let freq = new Array(26).fill(0); // frequency array for characters 'a' to 'z'
    let k = 0; // number of distinct characters in the current window
    let maxFreq = 0; // frequency of the most frequent character in the current window
    for (let end = start; end < n; end++) {
      // let charIndex = s.charCodeAt(end) - 'a'.charCodeAt(0); // get the index for the character
      let charIndex = s.charCodeAt(end) - 97; // get the index for the character
      if (freq[charIndex] === 0) k++; // if it's a new character, increment the count of distinct characters
      freq[charIndex]++; // increment the frequency of the current character
      // maxFreq = Math.max(maxFreq, freq[charIndex]); // update the maximum frequency in the current window
      if (freq[charIndex] > maxFreq) maxFreq = freq[charIndex]; // update the maximum frequency in the current window
      let winLen = end - start + 1; // length of the current window
      if (winLen % k !== 0) continue; // if the window length is not divisible by the number of distinct characters, it cannot be balanced

      let minFreq = Infinity; // to find the minimum frequency among the distinct characters
      for (let i = 0; i < 26; i++) {
        if (freq[i] > 0 && freq[i] < minFreq) {
          // if Infinity > 2
          minFreq = freq[i]; // update the minimum frequency
        }
      }

      if (maxFreq === minFreq) {
        // if the maximum frequency equals the minimum frequency, then all characters have the same frequency
        // maxLen = Math.max(maxLen, winLen); // update the maximum length of a balanced substring
        if (winLen > maxLen) maxLen = winLen; // update the maximum length of a balanced substring
      }
    }
  }
  return maxLen;
}
