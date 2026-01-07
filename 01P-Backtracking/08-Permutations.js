/** Permutations [Medium]
 * https://leetcode.com/problems/permutations/
 *
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * Definition for singly-linked list.
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * Time Complexity: O(n * n!)
 * where n is the length of the input array nums.
 * There are n! permutations of the array,
 * and generating each permutation takes O(n) time
 * due to the need to copy the current permutation to the result list.
 *
 * Space Complexity: O(n)
 * The space complexity is determined by the maximum depth of the recursion tree,
 * which is n in this case. This space is used for the recursion stack and the temporary path array.
 */

function permute(nums) {
  let ans = [];
  let k = nums.length;
  let backtrack = (path) => {
    if (path.length === k) {
      ans.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
    }
  };
  return ans;
}
