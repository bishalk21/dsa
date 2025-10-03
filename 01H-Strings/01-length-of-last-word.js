/** Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * Example 1:
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 *
 * Example 2:
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 *
 * Algorithm 1: Using Built-in functions
 * - Trim the string to remove leading and trailing spaces
 * - Split the string by spaces to get an array of words
 * - Return the length of the last word in the array
 * - Time complexity: O(n)
 * - Space complexity: O(n) due to split operation
 *
 * Algorithm 2: Without using Built-in functions - two loops
 * 1. Trim all the trailing spaces at the end of the string
 *    - Start from the end of the string
 *    - Move backwards until we find a non-space character or the length becomes less than or equal to 0
 * 2. count the characters until we hit a space or the start of the string
 *    - traverse backwards
 *    - if we hit a space, decrease the length n until we hit a non-space character
 *    - n is the position of the last character of the last word after trimming
 *    - keep counting by decreasing n and increasing count
 *    - until we hit a space or n becomes less than 0
 *    - the count is the length of the last word
 * 3. return the count
 * - Time complexity: O(n)
 * - Space complexity: O(n), extra space used while splitting the sentence into an array of words
 *
 * Algorithm 3: Without using Built-in functions - single loop
 * 1. Traverse from the backwards
 * 2. Skip all the trailing spaces at the end of the string
 * 3. if we hit a non-space character, start counting until we hit a space or the start of the string
 * 4. return the count
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */

// Using Built-in functions
function lengthOfLastWordUsingBuiltIn(s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
}

// Without using Built-in functions
function lengthOfLastWord(s) {
  let n = s.length - 1;
  // trim the trailing spaces at the end of the string
  while (n >= 0) {
    // if (s[n] === " ") {
    //   --n;
    // } else {
    //   break;
    // }

    if (s[n] != " ") break;
    --n;
  }

  // n is the position of the last character of the last word
  // count the characters until we hit a space or the start of the string
  let count = 0;
  while (n >= 0) {
    // if (s[n] != " ") {
    //   --n;
    //   ++count;
    // } else {
    //   break;
    // }

    if (s[n] === " ") break;
    --n;
    ++count;
  }
  return count;
}

// Without using Built-in functions - single loop
function lengthOfLastWordSingleLoop(s) {
  let n = s.length - 1; // last index
  let count = 0;

  // skip trailing spaces
  while (n >= 0) {
    // if found a non-space character, start counting
    if (s[n] != " ") {
      ++count;
    }
    // if found a space after counting, we can stop
    else if (count > 0) {
      break;
    }
    --n;
  }
  return count;
}
