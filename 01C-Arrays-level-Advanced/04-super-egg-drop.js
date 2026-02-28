/** Super Egg Drop
 * https://leetcode.com/problems/super-egg-drop/
 *
 * You are given k identical eggs and
 * you have access to a building with n floors labeled from 1 to n.
 *
 * You know that there exists a floor f such that 0 <= f <= n and
 * any egg dropped at a floor higher than f will break,
 * and any egg dropped at or below floor f will not break.
 *
 * Each move, you may take an unbroken egg and
 * drop it from any floor x (where 1 <= x <= n).
 * If the egg breaks, you can no longer use it.
 * However, if the egg does not break, you can reuse it in future moves.
 *
 * Return the minimum number of moves that you need to
 * determine with certainty what the value of f is.
 *
 * Example 1:
 * Input: k = 1, n = 2
 * Output: 2
 * Explanation:
 * Drop the egg from floor 1. If it breaks, we know that f = 0.
 * Otherwise, drop the egg from floor 2. If it breaks, we know that f = 1.
 * If it doesn't break, we know that f = 2.
 * Thus, we need at least 2 moves to determine f with certainty.
 *
 * Example 2:
 * Input: k = 2, n = 6
 * Output: 3
 * Explanation:
 * Drop the first egg from floor 3. If it breaks, we can drop the second egg from floor 1 and floor 2 to determine f.
 * If it doesn't break, we can drop the second egg from floor 4 and floor 5 to determine f.
 * Thus, we need at least 3 moves to determine f with certainty.
 *
 * Example 3:
 * Input: k = 3, n = 14
 * Output: 4
 * Explanation:
 * Drop the first egg from floor 4. If it breaks, we can drop the second egg from floor 1, floor 2, and floor 3 to determine f.
 * If it doesn't break, we can drop the second egg from floor 8. If it breaks, we can drop the third egg from floor 5, floor 6, and floor 7 to determine f.
 * If it doesn't break, we can drop the second egg from floor 12. If it breaks, we can drop the third egg from floor 9, floor 10, floor 11 to determine f.
 * If it doesn't break, we can drop the second egg from floor 13. If it breaks, we can drop the third egg from floor 12 to determine f.
 * If it doesn't break, we can drop the second egg from floor 14 to determine f.
 * Thus, we need at least 4 moves to determine f with certainty.
 *
 * Constraints:
 * * 1 <= k <= 100
 * * 1 <= n <= 10^4
 *
 * @param {number} k
 * @param {number} n
 * @return {number}
 */

/** Brute Force Approach: Basic Recursive Solution
 * - Steps:
 *   1. function superEggDrop(k, n) that takes the number of eggs (k) and the number of floors (n) as input.
 *   2. Base cases:
 *      - If n is 0, return 0 (no moves needed).
 *      - If k is 1, return n (we need to test each floor sequentially).
 *   3. Initialize a variable minMoves to Infinity to keep track of the minimum number of moves needed.
 *  4. Loop through each floor i from 1 to n:
 *     - Calculate the number of moves needed if we drop an egg from floor i:
 *       - If the egg breaks, we need to check the floors below (i-1) with one less egg (k-1).
 *       - If the egg does not break, we need to check the floors above (n-i) with the same number of eggs (k).
 *     - The total moves needed for dropping from floor i is 1 (for the current drop) + max(moves if it breaks, moves if it doesn't break).
 *     - Update minMoves with the minimum of the current minMoves and the moves calculated for floor i.
 * 5. Return minMoves after the loop.
 *
 * - Time Complexity: O(m * 2^m), where m is the number of moves needed to test n floors with k eggs.
 *                    This is because for each move, we are making two recursive calls (one for the case when the egg breaks and one for when it doesn't).
 * - Space Complexity: O(m), where m is the number of moves needed to test n floors with k eggs. This is due to the recursive call stack.
 *
 * Note: This brute force approach is not efficient for large values of n and k, and it may lead to a time limit exceeded error on larger inputs.
 *       A more efficient dynamic programming approach should be used for larger inputs.
 */
function superEggDrop(k, n) {
  if (n === 0) return 0;
  if (k === 1) return n;
  let minMoves = Infinity;
  for (let i = 1; i <= n; i++) {
    let moves =
      1 + Math.max(superEggDrop(k - 1, i - 1), superEggDrop(k, n - i));
    minMoves = Math.min(minMoves, moves);
  }
  return minMoves;
}

/** Dynamic Programming Approach
 *
 * Key Insight:
 * - Instead of directly calculating the minimum moves for n floors and k eggs,
 *   we can reframe the problem in terms of moves and eggs:
 * - We want to find the minimum number of moves (m) such that we can test at least n floors with k eggs.
 * how many moves (m) do we need to test n floors with k eggs?
 * - how many floors can we test with m moves and k eggs?
 *
 * logic: dp[m][k] = dp[m-1][k-1] + dp[m-1][k] + 1,
 *        m is the number of moves, k is the number of eggs, and n is the number of floors.
 * - dp[m][k] represents the maximum number of floors that can be tested with m moves and k eggs.
 * - If we drop an egg from a certain floor:
 *   - If the egg breaks, we can test dp[m-1][k-1] floors below that floor
 *     (since we have one less move and one less egg).
 *   - If the egg does not break, we can test dp[m-1][k] floors above that floor
 *     (since we have one less move but the same number of eggs).
 *  - The +1 accounts for the current floor we are testing.
 * - We keep increasing the number of moves (m) until dp[m][k] is at least n,
 *   which means we can test all n floors with k eggs and m moves.
 *
 * steps:
 * - need a dp array of size k + 1 to store the maximum number of floors
 *   that can be tested with m moves and k eggs.
 * - initialize moves to 0 and
 *   keep increasing it until dp[k]
 *   (the maximum number of floors that can be tested with k eggs) is at least n.
 * - For each move, we update the dp array in reverse order (from k down to 1)
 *   to ensure that we are using the results from the previous move correctly.
 *
 * - Time Complexity: O(k * m), where m is the number of moves needed to test n floors with k eggs.
 * - Space Complexity: O(k), since we only need to store the current and previous row of the dp table.
 */
function superEggDrop(k, n) {
  let dp = new Array(k + 1).fill(0);
  let moves = 0;
  while (dp[k] < n) {
    for (let i = k; i >= 1; i--) {
      dp[i] = dp[i] + dp[i - 1] + 1;
    }
    moves++;
  }
  return moves;
}
