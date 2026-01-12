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

class TrieNode {
  constructor() {
    this.children = {}; // Map of character to TrieNode
    this.isEndOfWord = false; // True if the node marks the end of a word
  }
}

function findWords(board, words) {
  let ans = [];
  let m = board.length; // number of rows
  let n = board[0].length; // number of columns

  let root = new TrieNode();
  // Build the Trie
  for (let word of words) {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  let backtrack = (x, y, node, path) => {
    // Check boundaries
    if (x < 0 || y < 0 || x >= m || y >= n) return;
    let char = board[x][y];
    // Check if the character is already visited or not in Trie
    if (char === "#" || !node.children[char]) return;
    node = node.children[char];
    path += char;
    // Check if we found a word
    if (node.isEndOfWord) {
      ans.push(path);
      node.isEndOfWord = false; // Avoid duplicates
    }

    // Mark the cell as visited
    board[x][y] = "#";
    // Explore neighbors
    backtrack(x + 1, y, node, path); // down
    backtrack(x - 1, y, node, path); // up
    backtrack(x, y + 1, node, path); // right
    backtrack(x, y - 1, node, path); // left
    // Restore the cell
    board[x][y] = char;
  };

  // Start backtracking from each cell in the board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      backtrack(i, j, root, "");
    }
  }
  return ans;
}
