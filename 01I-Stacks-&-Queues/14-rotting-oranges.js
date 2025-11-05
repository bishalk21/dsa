/** Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 *
 * You are given an m x n grid where each cell can have one of three values:
 * - 0 representing an empty cell,
 * - 1 representing a fresh orange, or
 * - 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 *
 * Example 1:
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 *
 * Example 2:
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 *
 * Example 3:
 * Input: grid = [[2,1,0,1],[1,0,2,1], [0,1,1,1], [1,1,1,2]]
 * Output: 2
 */

var orangesRotting = function (grid) {
  // TC = O(m*n) = O(n^2)
  // SC = O(m*n)

  let m = grid.length;
  let n = grid[0].length;

  let queue = [];
  // first add all the rotten oranges into queue
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let minutes = 0;

  // mark adj nodes as rotten and push into queue
  // continue till queue is not empty
  while (queue.length) {
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);
    console.log("----------------");
    let [x, y, min] = queue.shift();
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, min + 1]);
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, min + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, min + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, min + 1]);
    }
    minutes = Math.max(min, minutes);
  }

  // finally run over each element in check if any fresh oranges are remaining

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return minutes;
};

orangesRotting([
  [2, 1, 0, 1],
  [1, 0, 2, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 2],
]);
