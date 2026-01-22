/** N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/
 *
 * Tribonacci sequence is a generalization of the Fibonacci sequence.
 * In Fibonacci sequence, each number is the sum of the two preceding ones,
 * whereas in Tribonacci sequence, each number is the sum of the three preceding ones.
 * The sequence starts with T0 = 0, T1 = 1, T2 = 1.
 *
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 *
 * Example 1:
 * Input: n = 4
 * Output: 4
 * Explanation: T3 = 0 + 1 + 1 = 2, T4 = 1 + 1 + 2 = 4.
 *              The sequence is: 0, 1, 1, 2, 4, 7, 13, ...
 *
 * Example 2:
 * Input: n = 25
 * Output: 1389537
 * Explanation: The 25th Tribonacci number is 1389537.
 *
 * Constraints:
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, i.e., answer <= 2^31 - 1.
 *
 * @param {number} n
 * @return {number}
 */

/** using DP - Bottom-Up Approach with Tabulation (Iteration)
 * - Overlapping Subproblems: The Tribonacci sequence has overlapping subproblems,
 *                            as the same Tribonacci numbers are computed multiple times in the recursive approach.
 *                           i.e., T(n-1), T(n-2), and T(n-3) are computed multiple times for different values of n.
 *                           By storing the results of these subproblems, we can avoid redundant calculations.
 * - Optimal Substructure: The optimal solution for T(n) can be constructed from the optimal solutions of its subproblems T(n-1), T(n-2), and T(n-3).
 *   This means we can build the solution for T(n) using the previously computed values.
 *
 * DRY principle (Don't Repeat Yourself) - by storing the results of smaller subproblems,
 * we avoid recomputing them multiple times, thus improving efficiency.
 *
 * Time Complexity: O(n) - linear time complexity as we compute each Tribonacci number once.
 * Space Complexity: O(n) - linear space complexity due to the storage of computed Tribonacci numbers.
 */

function tribonacci(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}
