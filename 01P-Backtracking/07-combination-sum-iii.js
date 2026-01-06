/** Combination Sum III
 * https://leetcode.com/problems/combination-sum-iii/
 *
 * Find all valid combinations of k numbers that sum up to n such that
 * the following conditions are true:
 * - Only numbers 1 to 9 are used.
 * - Each number is used at most once.
 * Return a list of all possible valid combinations.
 * The list must not contain the same combination twice,
 * and the combinations may be returned in any order.
 *
 * Example 1:
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * Explanation:
 * 1 + 2 + 4 = 7
 * There are no other valid combinations.
 *
 * Example 2:
 * Input: k = 3, n = 9
 * Output: [[1,2,6],[1,3,5],[2,3,4]]
 * Explanation:
 * 1 + 2 + 6 = 9
 * 1 + 3 + 5 = 9
 * 2 + 3 + 4 = 9
 * There are no other valid combinations.
 *
 * Example 3:
 * Input: k = 4, n = 1
 * Output: []
 * Explanation: There are no valid combinations.
 * Using numbers 1 to 9,
 * it is impossible to get a sum of 1 with four numbers.
 *
 * Definition for the function combinationSum3
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/**
 * Mathematical Explanation:
 * The number of ways to choose k elements from a set of n elements
 * is given by the binomial coefficient C(n, k),
 * which is calculated as:
 *               n!
 * C(n, k) =  -------------
 *           k! * (n - k)!
 *                        9!                                                9!
 * Time Complexity:  ------------------- * k = O(C(9, k) * k) or  ---------------------
 *                      k! * (9 - k)!                               (k - 1)! * (9 - k)!
 * where C(9, k) is the binomial coefficient "9 choose k",
 * representing the number of ways to choose k elements from a set of 9 elements.
 * The additional factor of k accounts for the time taken to copy each valid combination to the result list.
 *
 * Space Complexity: O(k)
 * The space complexity is determined by the maximum depth of the recursion tree,
 * which is k in this case. This space is used for the recursion stack and the temporary path array.
 */

function combinationSum3(k, n) {
  let ans = [];
  let backtrack = function (remaining, path, start) {
    if (remaining === 0 && path.length === k) ans.push([...path]);
    if (remaining <= 0 || path.length >= k) return;
    for (let i = start; i <= 9; i++) {
      let pick = i;
      path.push(pick);
      backtrack(remaining - pick, path, i + 1);
      path.pop();
    }
  };
  backtrack(n, [], 1);
  return ans;
}
