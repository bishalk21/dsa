/** Reverse String II
 * https://leetcode.com/problems/reverse-string-ii/
 *
 * Given a string s and an integer k,
 * reverse the first k characters for every 2k characters
 * counting from the start of the string.
 *
 * If there are fewer than k characters left,
 * reverse all of them.
 * If there are less than 2k but greater than or equal to k characters,
 * then reverse the first k characters and leave the other as original.
 *
 * Example 1:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 *
 * Example 2:
 * Input: s = "abcd", k = 2
 * Output: "bacd"
 *
 * In JavaScript, strings are immutable,
 * so we need to convert the string to an array of characters,
 * perform the reversal, and then join the array back into a string.
 *
 * Algorithm:
 * 1. Convert the string to an array of characters.
 * 2. Loop through the array in increments of 2k.
 * 3. For each segment, reverse the first k characters in place.
 * 4. If there are fewer than k characters left, reverse all of them.
 * 5. If there are less than 2k but greater than or equal to k characters,
 *   reverse the first k characters and leave the other as original.
 * 6. Join the array back into a string and return it.
 *
 * 8. Time Complexity: O(n), where n is the length of the string.
 * 9. Space Complexity: O(n) for the array of characters.
 * 10. The in-place reversal uses O(1) additional space.
 */

function reverseStr(s, k) {
  s = s.split("");
  let n = s.length;
  // jump 2k steps
  for (let x = 0; x < n; x = x + 2 * k) {
    // reverse the first k chars starting from x
    let mid = Math.floor(k / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + k - i - 1];
      s[x + k - i - 1] = temp;
    }
  }
  // reverse a string
  // let n = s.length
  // let mid = Math.floor(n / 2)
  // for (let i = 0; i < mid; i++) {
  //     // swap(s[i], s[n - 1 - i])
  //     let temp = s[i]
  //     s[i] = s[n - 1 - i]
  //     s[n - 1 - i] = temp
  // }
  return s.join("");
}
