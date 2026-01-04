/** Subsets
 * https://leetcode.com/problems/subsets/
 *
 * Given an integer array nums of unique elements,
 * return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 * Define the backtracking function to generate subsets
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time Complexity: O(N * 2^N) where N is the number of elements in nums
// Space Complexity: O(N * 2^N) to store all subsets

function subsets(nums) {
  let ans = [];
  let backtrack = (start, path) => {
    ans.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return ans;
}
