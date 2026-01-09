/** Word Search [medium]
 * https://leetcode.com/problems/word-search/
 *
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A","B","C","E"],
 *                 ["S","F","C","S"],
 *                 ["A","D","E","E"]],
 *        word = "ABCCED"
 * Output: true
 *
 * Example 2:
 * Input: board = [["A","B","C","E"],
 *                ["S","F","C","S"],
 *               ["A","D","E","E"]],
 *       word = "SEE"
 * Output: true
 *
 * Example 3:
 * Input: board = [["A","B","C","E"],
 *                ["S","F","C","S"],
 *               ["A","D","E","E"]],
 *      word = "ABCB"
 * Output: false
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/**
 * Backtracking
 * Time O(N * 3^L) | Space O(L)
 * N: number of cells in the board
 * L: length of the word to be found
 *
 * Time complexity explanation: O(N * 3^L)
 * In the worst case, we may have to explore all cells in the board (N cells).
 * For each cell, we may have to explore up to 3 directions (up, down, left, right)
 * for each character in the word (L characters).
 * Thus, the overall time complexity is O(N * 3^L).
 *
 * Space complexity explanation: O(L)
 * The space complexity is determined by the recursion stack used in the backtracking process.
 * The maximum depth of the recursion stack is L (the length of the word to be found).
 * Thus, the overall space complexity is O(L).
 */

function exist(board, word) {
  let ans = false;
  let m = board.length; // number of rows
  let n = board[0].length; // number of columns
  let backtrack = (row, col, index) => {
    // base case: if index equals word length, we found the word
    if (index === word.length) {
      ans = true;
      return;
    }

    // mark the cell as visited by replacing the character with a placeholder
    let original = board[row][col];
    board[row][col] = "#";
    // explore all 4 directions: up, down, left, right
    // top
    if (row > 0 && word[index] === board[row - 1][col]) {
      backtrack(row - 1, col, index + 1);
    }
    // bottom
    if (row < m - 1 && word[index] === board[row + 1][col]) {
      backtrack(row + 1, col, index + 1);
    }
    // left
    if (col > 0 && word[index] === board[row][col - 1]) {
      backtrack(row, col - 1, index + 1);
    }
    // right
    if (col < n - 1 && word[index] === board[row][col + 1]) {
      backtrack(row, col + 1, index + 1);
    }

    // restore the original character in the cell after exploring all directions
    board[row][col] = original;
  };

  // for each cell in the board,
  // start a backtracking search if the first letter matches
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        // found a starting point, start backtracking search
        // i = row index, j = column index, index = current index in the word
        backtrack(i, j, 1);
      }
    }
  }
  return ans;
}
