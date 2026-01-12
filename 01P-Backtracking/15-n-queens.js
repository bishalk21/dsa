/** N-Queens [hard]
 * https://leetcode.com/problems/n-queens/
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queens' placement,
 * where 'Q' and '.' both indicate a queen and an empty space, respectively.
 *
 * Example 1:
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 *
 * Example 2:
 * Input: n = 1
 * Output: [["Q"]]
 * Explanation: There is one distinct solution to the 1-queens puzzle as shown above.
 *
 * @param {number} n
 * @return {string[][]}
 */

/**
 * Backtracking
 * Time Complexity: O(N!), N = number of queens
 * Space Complexity: O(N)
 *
 * Time Complexity Explanation:
 * The time complexity of the N-Queens problem using backtracking is O(N!)
 * because, in the worst case, we may need to explore all possible arrangements
 * of queens on the board. For each row, we have N choices for placing a queen,
 * and for each subsequent row, the number of valid choices decreases as we place
 * more queens. This leads to a factorial growth in the number of configurations
 *
 * Space Complexity Explanation:
 * The space complexity is O(N) due to the storage used for the board
 * and the sets that track occupied columns and diagonals. Each recursive call
 * adds a new layer to the call stack, and in the worst case, we may have N
 * recursive calls on the stack at once (one for each row of the board).
 */

let transformBoard = (board) => {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }
  return newBoard;
};

function solveNQueens(n) {
  let result = [];

  // n * n board
  //   let board = new Array(n).fill(0).map(() => new Array(n).fill("."));
  let board = Array.from({ length: n }, () => new Array(n).fill("."));
  let backtrack = (board, row, colSet, diag1Set, diag2Set) => {
    // base case: all n queens are placed
    if (row === n) {
      result.push(transformBoard(board));
      return;
    }
    // iterate through each column in the current row
    for (let col = 0; col < n; col++) {
      // skip if the column or diagonals are already occupied by another queen
      if (
        colSet.has(col) ||
        diag1Set.has(row - col) ||
        diag2Set.has(row + col)
      ) {
        continue;
      }
      // place the queen
      board[row][col] = "Q";
      colSet.add(col);
      diag1Set.add(row - col);
      diag2Set.add(row + col);
      // move on to the next row
      backtrack(board, row + 1, colSet, diag1Set, diag2Set);
      // backtrack: remove the queen and try the next column
      board[row][col] = ".";
      colSet.delete(col);
      diag1Set.delete(row - col);
      diag2Set.delete(row + col);
    }
  };
  // start backtracking from the first row
  // using sets to track occupied columns and diagonals
  backtrack(board, 0, new Set(), new Set(), new Set());

  return result.length;
}
