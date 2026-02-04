/** Unique Paths
 * https://leetcode.com/problems/unique-paths/
 *
 * There is a robot on an m x n grid.
 * The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
 * The robot can only move either down or right at any point in time.
 * Given the two integers m and n,
 * return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The test cases are generated so that the answer will be less than or equal to 2 * 10^9.
 *
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right
 *              corner:
 *              1. Right -> Down -> Down
 *              2. Down -> Down -> Right
 *              3. Down -> Right -> Down
 *
 * Constraints:
 * 1 <= m, n <= 100
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/**
 * @time O(m*n) where m is number of rows and n is number of columns
 * @space O(m*n) where m is number of rows and n is number of columns
 * @description Dynamic Programming with Memoization - Top Down Recursive Approach
 */

function uniquePaths(m, n) {
  let dp = Array.from({ length: m }, () => new Array(n).fill(-1));
  let fn = (x, y) => {
    // base cases
    // if top and left corner reached
    if (x === 0 && y === 0) return 1;
    // if out of bounds
    if (x < 0 || y < 0) return 0;
    // if already computed
    if (dp[x][y] !== -1) return dp[x][y];
    // move up and left
    let up = fn(x - 1, y);
    let left = fn(x, y - 1);
    return (dp[x][y] = up + left);
  };
  return fn(m - 1, n - 1);
}

/** Dynamic Programming - Bottom Up Iterative Approach
 * @time O(m*n) where m is number of rows and n is number of columns
 * @space O(m*n) where m is number of rows and n is number of columns
 */
function uniquePaths(m, n) {
  let dp = Array.from({ length: m }, () => new Array(n).fill(-1));
  // base case: first row and first column
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // number of ways to reach cell (i, j)
      // is sum of ways to reach from top and left cells
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
