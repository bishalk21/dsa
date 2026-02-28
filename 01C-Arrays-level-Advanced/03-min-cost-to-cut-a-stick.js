/** Minimum Cost to Cut a Stick
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
 *
 * Given a stick of length n units.
 * The stick is labelled from 0 to n.
 * For example, a stick of length 6 is labelled as follows:
 * 0 ----- 1 ----- 2 ----- 3 ----- 4 ----- 5 ----- 6
 *
 * Given an integer array cuts where cuts[i] is the position you should perform a cut at.
 * You should perform the cuts in order, you can change the sequence of the cuts as you wish.
 * (i.e., the first cut can be done at any position in cuts).
 *
 * The cost of one cut is the length of the stick to be cut.
 * (i.e., if you have a stick of length 6 and you cut at position 1 the cost will be 6 because the length of the stick is 6).
 * The total cost is the sum of costs of all cuts.
 * (i.e., if you cut at positions 1, 3 and 4 in order, the total cost will be 7 + 6 + 4 = 17).
 * When you cut a stick, it will be split into two smaller sticks
 * (i.e., the sum of their lengths is the length of the stick before the cut).
 * The new sticks are then used in the subsequent cuts.
 *
 * Return the minimum total cost of the cuts.
 *
 * Example 1:
 * Input: n = 7, cuts = [1,3,4,5]
 * Output: 16
 * Explanation: Using cuts order as [1,3,4,5] would get the total cost as 16 (7 + 6 + 4 + 3)
 *              which is the minimum total cost.
 *
 * Example 2:
 * Input: n = 9, cuts = [5,6,1,4,2]
 * Output: 22
 * Explanation: If you try the cuts order as [1, 2, 4, 5, 6], the total cost will be 25 (9 + 8 + 6 + 4 + 3).
 *              However, if you change the order to [5, 6, 1, 4, 2], the total cost will be 22 (9 + 4 + 6 + 3 + 2),
 *              which is the minimum total cost.
 *
 * Constraints:
 * * 2 <= n <= 10^6
 * * 1 <= cuts.length <= min(n - 1, 100)
 * * 1 <= cuts[i] <= n - 1
 * * all the integers in cuts array are distinct.
 *
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */

/** Brute Force Approach: Basic Recursive Solution
 * - Steps:
 *   1. Define a recursive function `dfs(start, end)` that calculates the minimum cost to cut the stick between `start` and `end`.
 *   2. Base case: If `start` is greater than or equal to `end`, return 0 (no cost).
 *   3. Initialize `minCost` to Infinity.
 *   4. Iterate through each cut in the `cuts` array:
 *      - If the cut is between `start` and `end`, calculate the cost of cutting at that position:
 *        - The cost is the length of the stick being cut (end - start).
 *        - Recursively calculate the cost of cutting the left and right parts of the stick after the cut.
 *        - Update `minCost` with the minimum of the current `minCost` and the total cost of cutting at that position.
 *  5. Return `minCost` after iterating through all cuts.
 * - Time Complexity: O(m * 2^m), where m is the number of cuts.
 *                    This is because for each cut, we are making two recursive calls (left and right).
 * - Space Complexity: O(m), where m is the number of cuts. This is due to the recursive call stack.
 *
 * Note: This brute force approach may lead to a "RangeError: Maximum call stack size exceeded" for larger inputs due to deep recursion. To optimize this, we can use memoization to store previously computed results and avoid redundant calculations.
 */
function minCost(n, cuts) {
  let dfs = (start, end) => {
    let minCost = Infinity;
    // Base case: If the start is greater than or equal to the end,
    // it means we have a valid cut, so return 0
    if (start >= end) return 0;
    //RangeError: Maximum call stack size exceeded
    if (cuts.length === 0) return 0;
    // for (let cut of cuts) {
    //   let cost = end - start;
    //   let leftCost = dfs(start, cut);
    //   let rightCost = dfs(cut, end);
    //   if (cut > start && cut < end) {
    //     cost += leftCost + rightCost;
    //     minCost = Math.min(minCost, cost);
    //   }
    // }
    for (let i = 0; i < cuts.length; i++) {
      let cut = cuts[i];
      let cost = end - start;
      let leftCost = dfs(start, cut);
      let rightCost = dfs(cut, end);
      if (cut > start && cut < end) {
        cost += leftCost + rightCost;
        minCost = Math.min(minCost, cost);
      }
    }
    return minCost === Infinity ? 0 : minCost;
  };
  return dfs(0, n);
}

/** Dynamic Programming Approach
 * - Steps:
 *   1. Use a memoization object `dp` to store previously computed results for specific `start` and `end` values.
 *   2. In the `dfs` function, before performing any calculations, check if the result for the current `start` and `end` is already computed and stored in `dp`. If it is, return that value.
 *   3. If not, proceed with the same logic as the brute force approach to calculate the minimum cost.
 *   4. After calculating the minimum cost for the current `start` and `end`, store the result in `dp` before returning it.
 *
 * - Time Complexity: O(m^2 * m) = O(m^3), where m is the number of cuts.
 *                    This is because we are iterating through all cuts for each pair of start and end,
 *                    and there are O(m^2) pairs of start and end (state that dp stores results for each pair).
 * - Space Complexity: O(m^2), where m is the number of cuts. This is due to the memoization storage in `dp` for each pair of start and end.
 *
 * Note: Sorting the cuts array is not strictly necessary for the logic to work correctly, as we are checking for cuts between start and end in the recursive calls. However, it can be helpful for optimization, but it is not required for the correctness of the solution.
 */
function minCostDP(n, cuts) {
  // Sort the cuts array to ensure we are processing cuts in order
  // however, since we are checking for cuts between start and end in the recursive calls, sorting is not strictly necessary for the logic to work correctly. It can be helpful for optimization, but it is not required for the correctness of the solution.
  //   cuts.sort((a, b) => a - b);

  let dp = {};
  let dfs = (start, end) => {
    // Base case: If the start is greater than or equal to the end,
    // it means we have a valid cut, so return 0
    if (start >= end) return 0;
    let key = `${start}-${end}`;
    if (dp[key] !== undefined) return dp[key];
    // minCost is initialized to Infinity to ensure that any valid cut will be less than this initial value.
    let minCost = Infinity;
    for (let cut of cuts) {
      if (cut > start && cut < end) {
        let cost = end - start;
        let leftCost = dfs(start, cut);
        let rightCost = dfs(cut, end);
        cost += leftCost + rightCost;
        minCost = Math.min(minCost, cost);
      }
    }
    dp[key] = minCost === Infinity ? 0 : minCost;
    return dp[key];
  };
  return dfs(0, n);
}

/** Dynamic Programming Approach using Map()
 * Map() vs Object:
 * - Map() allows keys of any type, while Object keys are typically strings or symbols.
 * - Map() maintains the order of insertion, while Object does not guarantee order.
 * - Map() has built-in methods like `set`, `get`, `has`, and `delete`, while Object requires manual handling for these operations.
 * - Map() is generally more efficient for frequent additions and deletions of key-value pairs, while Object can be more performant for static data structures with a fixed set of keys.
 * - In this implementation, we use Map() to store the computed results for specific `start` and `end` values in the `dp` variable. The logic remains the same as the previous dynamic programming approach, but we utilize Map() for better performance and cleaner code when handling the memoization of results.
 * - Time Complexity: O(m^3), where m is the number of cuts. This is because we are iterating through all cuts for each pair of start and end, and there are O(m^2) pairs of start and end.
 * - Space Complexity: O(m^2), where m is the number of cuts. This is due to the memoization storage in `dp` for each pair of start and end.
 */
function minCostBottomUp(n, cuts) {
  let dp = new Map();
  let dfs = (start, end) => {
    if (start >= end) return 0;
    let key = `${start}-${end}`;
    if (dp.has(key)) return dp.get(key);
    let minCost = Infinity;
    for (let cut of cuts) {
      if (cut > start && cut < end) {
        let cost = end - start;
        let leftCost = dfs(start, cut);
        let rightCost = dfs(cut, end);
        cost += leftCost + rightCost;
        minCost = Math.min(minCost, cost);
      }
    }
    dp.set(key, minCost === Infinity ? 0 : minCost);
    return dp.get(key);
  };
  return dfs(0, n);
}
