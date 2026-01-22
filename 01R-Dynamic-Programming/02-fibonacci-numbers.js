/** Fibonacci Numbers
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
 * starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 * Example 1:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * Example 2:
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * Example 3:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 * Constraints:
 * 0 <= n <= 30
 *
 * @param {number} n
 * @return {number}
 *
 * Hint:
 * - The problem has optimal substructure and overlapping subproblems,
 *   which makes it suitable for dynamic programming.
 * - We can use either a top-down approach with memoization (Recursion) or a bottom-up approach with tabulation (Iteration).
 * - The time complexity of both approaches is O(n), and the space complexity is O(n) for memoization
 *   and O(1) for tabulation (if we only keep track of the last two Fibonacci numbers).
 */

/** using DP
 * - Overlapping Subproblems: The Fibonacci sequence has overlapping subproblems,
 *                            as the same Fibonacci numbers are computed multiple times in the recursive approach.
 *                            i.e., F(n-1) and F(n-2) are computed multiple times for different values of n.
 *                            By storing the results of these subproblems, we can avoid redundant calculations.
 * - Optimal Substructure: The optimal solution for F(n) can be constructed from the optimal solutions of its subproblems F(n-1) and F(n-2).
 *
 * DRY principle (Don't Repeat Yourself) - by storing the results of smaller subproblems,
 * we avoid recomputing them multiple times, thus improving efficiency.
 *
 * Using naive recursion, fib(100) would take an impractically long time
 * due to its exponential time complexity O(2^n) but with DP, it can be computed in linear time O(n).
 * For fib(n) for bigger values, exponential growth of recursive calls leads to astronomically
 * large number of operations, making it computationally infeasible within a reasonable time frame.
 *
 * Time Complexity: O(n) - linear time complexity as we compute each Fibonacci number once.
 * Space Complexity: O(n) - linear space complexity due to the storage of computed Fibonacci numbers.
 */

// top-down approach with memoization (Recursion)
let store = {};
function fibMemo(n) {
  if (n <= 1) return n;
  if (!store[n]) {
    store[n] = fibMemo(n - 1) + fibMemo(n - 2);
  }
  return store[n];
}

// bottom-up approach with tabulation (Iteration)
function fibTab(n) {
  if (n <= 1) return n;
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
