/** Word Search II [hard]
 * https://leetcode.com/problems/word-search-ii/
 *
 * Given an m x n board of characters and a list of strings words,
 * return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once in a word.
 *
 * Example 1:
 * Input: board = [["o","a","a","n"],
 *                 ["e","t","a","e"],
 *                 ["i","h","k","r"],
 *                 ["i","f","l","v"]],
 *       words = ["oath","pea","eat","rain"]
 * Output: ["eat","oath"]
 *
 * Example 2:
 * Input: board = [["a","b"],
 *                ["c","d"]],
 *      words = ["abcb"]
 * Output: []
 *
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string []}
 */

function findWords(board, words) {
  let result = [];
  let m = board.length; // number of rows
  let n = board[0].length; // number of columns
  let backtrack = () => {};
  backtrack();
  return result;
}
