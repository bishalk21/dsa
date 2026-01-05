/** Combination Sum
 * https://leetcode.com/problems/combination-sum/
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates
 * where the chosen numbers sum to target.
 * You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of
 * at least one of the chosen numbers is different.
 * The test cases are generated such that
 * the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 *
 * Example 1:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7.
 * 7 = 7 is also a candidate.
 * These are the only two combinations.
 *
 * Example 2:
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 *
 * Example 3:
 * Input: candidates = [2], target = 1
 * Output: []
 *
 * Definition for the function combinationSum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}s
 */

/**
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

function combinationSum(candidates, target) {
  let ans = [];
  let backtrack = function (remaining, path, start) {
    if (remaining === 0) ans.push([...path]);
    if (remaining <= 0) return;

    for (let i = start; i < candidates.length; i++) {
      let pick = candidates[i];
      path.push(pick);
      backtrack(remaining - pick, path, i);
      path.pop();
    }
  };
  backtrack(target, [], 0);
  return ans;
}
