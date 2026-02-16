/** Longest Balanced Substring II
 * https://leetcode.com/problems/longest-balanced-substring-ii/
 *
 * You are given a string s consisting of the characters 'a', 'b', and 'c'.
 * A substring of s is called balanced if all distinct characters that occurs in the substring
 * appears the same number of times.
 * (For example, "aabbcc" is balanced because 'a', 'b', and 'c' all appear 2 times,
 *  while "aabbccc" is not balanced because 'a' and 'b' appear 2 times but 'c' appears 3 times.)
 * Return the length of the longest balanced substring of s. If there is no balanced substring, return 0.
 *
 * Example 1:
 * Input: s = "abbac"
 * Output: 4
 * Explanation: The longest balanced substring is "abba", which has a length of 4.
 *              both distinct characters 'a' and 'b' appear 2 times in "abba".
 * Example 2:
 * Input: s = "aabcc"
 * Output: 3
 * Explanation: The longest balanced substring is "abc", which has a length of 3.
 *              the distinct characters 'a', 'b', and 'c' all appear 1 time in "abc".
 * Example 3:
 * Input: s = "aba"
 * Output: 2
 * Explanation: The longest balanced substring is "ab" or "ba", which has a length of 2.
 *              both distinct characters 'a' and 'b' appear 1 time in "ab" and "ba".
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters 'a', 'b', and 'c'.
 *
 * @param {string} s
 * @return {number}
 */

/** Algorithm: Prefix Sum + Hash Map
 * 1. understand the problem
 *    - we need to find the longest balanced substring in the given string s.
 *    - a balanced substring is one where all distinct characters appear the same number of times.
 *    - since we only have three characters 'a', 'b', and 'c', we can have at most 3 distinct characters in a balanced substring.
 * 2. plan
 *   - we can use a prefix sum approach to keep track of the count of each character up to the current index.
 *   - we can represent the balance of characters using a hash map where the key is a tuple of the differences in counts of the characters.
 *   - for example, we can use the differences (count(a) - count(b), count(a) - count(c)) as the key in the hash map.
 *   - when we encounter the same key again, it means that the substring between the previous index and the current index is balanced.
 *   - we can keep track of the maximum length of such balanced substrings found during the traversal.
 * 3. data structures
 *   - we can use a hash map to store the first occurrence of each balance state.
 *   - we can also use variables to keep track of the counts of 'a', 'b', and 'c' as we traverse the string.
 * 4. implementation
 *   - initialize a hash map with the initial balance state (0, 0) at index -1 to handle the case when the balanced substring starts from index 0.
 *   - initialize count variables for 'a', 'b', and 'c' to 0.
 *   - initialize a variable maxLength to keep track of the longest balanced substring found.
 *   - iterate through the string s with an index:
 *     - update the counts of 'a', 'b', and 'c' based on the current character.
 *     - calculate the current balance state as a tuple of differences (count(a) - count(b), count(a) - count(c)).
 *     - if this balance state has been seen before in the hash map, calculate the length of the substring from the previous index to the current index and update maxLength if it's larger.
 *     - if this balance state has not been seen before, store the current index in the hash map for this balance state.
 *  - return maxLength at the end of the iteration.
 *
 *
 */

function longestBalancedSubstring(s) {
  let n = s.length;
  let maxLength = 0;
  // case 1: exactly 1 distinct character
  // s = "aaabbcc"
  let i = 0;
  while (i < n) {
    let j = i;
    while (j < n && s[j] === s[i]) {
      j++;
    }
    maxLength = Math.max(maxLength, j - i);
    i = j;
  }
  // case 2: exactly 2 distinct characters
  // s = "aabbcc"
  let pairs = [
    ["a", "b", "c"],
    ["a", "c", "b"],
    ["b", "c", "a"],
  ];
  for (let [x, y, z] of pairs) {
    let map = new Map();
    map.set(0, -1); // to handle the case when the balanced substring starts from index 0
    let balance = 0; // balance = count(x) - count(y)
    for (let index = 0; index < n; index++) {
      let char = s[index];
      if (char === z) {
        map.clear(); // reset the map when we encounter the third character
        map.set(0, index); // reset the balance to 0 at the current index
        balance = 0; // reset the balance
      } else if (char === x) {
        balance++;
      } else {
        balance--;
      }
      if (map.has(balance)) {
        maxLength = Math.max(maxLength, index - map.get(balance));
      } else {
        map.set(balance, index);
      }
    }
  }

  // case 3: exactly 3 distinct characters
  // s = "abcabc"
  let count = new Map();
  count.set("0,0", -1); // to handle the case when the balanced substring starts from index 0
  let charA = 0,
    charB = 0,
    charC = 0; // count of 'a', 'b', and 'c'
  for (let index = 0; index < n; index++) {
    let char = s[index];
    if (char === "a") charA++;
    else if (char === "b") charB++;
    else charC++;
    let key = `${charA - charB},${charA - charC}`; // balance of 'a' with respect to 'b' and 'c'
    if (count.has(key)) {
      maxLength = Math.max(maxLength, index - count.get(key));
    } else {
      count.set(key, index);
    }
  }
  return maxLength;
}
