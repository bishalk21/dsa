/** Valid Word Square
 * https://leetcode.com/problems/valid-word-square/
 *
 * Given an array of strings words, return true if it forms a valid word square,
 * and false otherwise.
 *
 * A sequence of strings forms a valid word square if the kth row and column
 * read the exact same string, where 0 ≤ k < max(numRows, numColumns).
 * where k is the index of the row and column, numRows is the number of rows in words, and numColumns is the maximum number of columns in words.
 *
 * Example 1:
 * Input: words = ["abcd","bnrt","crmy","dtye"]
 * Output: true
 * Explanation: The first row and first column both read "abcd".
 *              The second row and second column both read "bnrt".
 *              The third row and third column both read "crmy".
 *              The fourth row and fourth column both read "dtye".
 * Example 2:
 * Input: words = ["abcd","bnrt","crm","dt"]
 * Output: true
 * Explanation: The first row and first column both read "abcd".
 *              The second row and second column both read "bnrt".
 *              The third row and third column both read "crm".
 *              The fourth row and fourth column both read "dt".
 * Example 3:
 * Input: words = ["ball","area","read","lady"]
 * Output: false
 * Explanation: The third row reads "read" while the third column reads "lead".
 *              Therefore, it is NOT a valid word square.
 *
 * Constraints:
 * 1 <= words.length <= 500
 * 1 <= words[i].length <= 500
 * words[i] consists of only lowercase English letters.
 *
 * @param {string[]} words
 * @return {boolean}
 */

/** Algorithm 1: Brute Force
 * 1. Get the number of rows and columns in the words array.
 * 2. Iterate through each row and column, comparing the characters at the corresponding positions.
 * 3. If any characters do not match, return false.
 * 4. If all characters match, return true.
 *
 * Time Complexity: O(n * m), where n is the number of rows and m is the maximum number of columns in the words array.
 * Space Complexity: O(1), as we are using only a constant amount of extra space.
 */
var validWordSquare = function (words) {
  let rows = words.length;
  let cols = 0;
  for (let i = 0; i < rows; i++) {
    cols = Math.max(cols, words[i].length);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let rowChar = j < words[i].length ? words[i][j] : null;
      let colChar = i < words[j]?.length ? words[j][i] : null;

      if (rowChar !== colChar) {
        return false;
      }
    }
  }
  return true;
};

/**
 * - get the number of rows = words.length
 * - obviously, the number of columns = max length of the strings in the words array = words[i].length, where i is the index of the string in the words array
 * - iterate through each row and column, comparing the characters at the corresponding positions
 * - if any characters do not match, return false
 * - if column index is out of bounds for the current row, or row index is out of bounds for the current column, return false
 * - if all characters match, return true
 */
function validWordSquare(words) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (
        j >= words.length ||
        i >= words[j].length ||
        words[i][j] !== words[j][i]
      ) {
        return false;
      }
    }
  }

  return true;
}
