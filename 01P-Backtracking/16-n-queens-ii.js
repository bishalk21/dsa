/** N-Queens II [hard]
 * https://leetcode.com/problems/n-queens-ii/
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 *
 * Example 1:
 * Input: n = 4
 * Output: 2
 * Solutions: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 *
 * Example 2:
 * Input: n = 1
 * Output: 1
 * Solutions: [["Q"]]
 * Explanation: There is one distinct solution to the 1-queens puzzle as shown above.
 *
 * @param {number} n
 * @return {number}
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

function totalNQueens(n) {
  let count = 0;
  let backtrack = (row, colSet, diag1Set, diag2Set) => {
    // base case: all n queens are placed
    if (row === n) {
      count++;
      return;
    }
    for (let col = 0; col < n; col++) {
      let diag1 = row - col;
      let diag2 = row + col;
      // skip if the column or diagonals are already occupied
      if (colSet.has(col) || diag1Set.has(diag1) || diag2Set.has(diag2)) {
        continue;
      }
      // place the queen
      colSet.add(col);
      diag1Set.add(diag1);
      diag2Set.add(diag2);
      // move to the next row
      backtrack(row + 1, colSet, diag1Set, diag2Set);
      // backtrack: remove the queen and try the next column
      colSet.delete(col);
      diag1Set.delete(diag1);
      diag2Set.delete(diag2);
    }
  };
  backtrack(0, new Set(), new Set(), new Set());
  return count;
}
