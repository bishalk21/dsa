/** Subsets II
 * https://leetcode.com/problems/subsets-ii/
 *
 * Given an integer array nums that may contain duplicates,
 * return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 *
 * Example 1:
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
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

function subsetsWithDup(nums) {
  let ans = [];
  // Sort the array to handle duplicates as they will be adjacent
  nums.sort((a, b) => a - b);
  let backtrack = (start, path) => {
    ans.push([...path]);
    for (let i = start; i < nums.length; i++) {
      // Skip duplicates
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return ans;
}
