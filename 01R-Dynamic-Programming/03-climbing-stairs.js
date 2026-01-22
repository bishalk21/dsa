/** Climbing Stairs [Easy]
 * https://leetcode.com/problems/climbing-stairs/
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 *              1. 1 step + 1 step
 *              2. 2 steps
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 *              1. 1 step + 1 step + 1 step
 *              2. 1 step + 2 steps
 *              3. 2 steps + 1 step
 *
 * Constraints:
 * 1 <= n <= 45
 *
 * @param {number} n
 * @return {number}
 *
 * Hint:
 * - The problem has optimal substructure and overlapping subproblems,
 *   which makes it suitable for dynamic programming.
 * - We can use either a top-down approach with memoization (Recursion) or a bottom-up approach with tabulation (Iteration).
 * - The time complexity of both approaches is O(n), and the space complexity is O(n) for memoization
 *   and O(1) for tabulation (if we only keep track of the last two computed values).
 */

// top-down approach with memoization (Recursion)
let climbStore = {};
function climbStairsMemo(n) {
  if (n <= 2) return n;
  if (!climbStore[n]) {
    climbStore[n] = climbStairsMemo(n - 1) + climbStairsMemo(n - 2);
  }
  return climbStore[n];
}

// bottom-up approach with tabulation (Iteration)
function climbStairsTab(n) {
  if (n <= 2) return n;
  let dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
