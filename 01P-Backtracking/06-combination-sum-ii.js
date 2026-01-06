/** Combination Sum II
 * https://leetcode.com/problems/combination-sum-ii/
 *
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
 *
 * Example 2:
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output: [[1,2,2],[5]]
 *
 * Definition for the function combinationSum2
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * Time Complexity: O(N^2) (sorting) + O(N^(T/M + 1))) (for backtracking)
 * Time Complexity: O(N^(T/M + 1)))
 * where N is the number of candidates,
 * T is the target value,
 * and M is the minimum value among the candidates.
 * The term (T/M) represents the maximum depth of the recursion tree,
 * as in the worst case, we can reach the target by repeatedly adding the smallest candidate M.
 *
 * Space Complexity: O(T/M)
 * The space complexity is determined by the maximum depth of the recursion tree,
 * which is (T/M) in the worst case.
 * This space is used for the recursion stack and the temporary path array.
 */

function combinationSum2(candidates, target) {
  let ans = [];
  // Sort the candidates to handle duplicates
  candidates.sort((a, b) => a - b);
  let backtrack = function (remaining, path, start) {
    if (remaining === 0) ans.push([...path]);
    if (remaining <= 0) return;
    for (
      let i = start;
      i < candidates.length && candidates[i] <= remaining;
      i++
    ) {
      let pick = candidates[i];
      // Skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(pick);
      backtrack(remaining - pick, path, i + 1);
      path.pop();
    }
  };
  backtrack(target, [], 0);
  return ans;
}
