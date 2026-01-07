/** Permutations II [Medium]
 * https://leetcode.com/problems/permutations-ii/
 *
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all possible unique permutations in any order.
 *
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: [[1,1,2],[1,2,1],[2,1,1]]
 *
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Definition for singly-linked list.
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * Time Complexity: O(n * n!)
 * where n is the length of the input array nums.
 * There are at most n! unique permutations of the array,
 * and generating each permutation takes O(n) time
 * due to the need to copy the current permutation to the result list.
 *
 * Space Complexity: O(n)
 * The space complexity is determined by the maximum depth of the recursion tree,
 * which is n in this case. This space is used for the recursion stack and the temporary path array.
 */

function permuteUnique(nums) {
  let ans = [];
  // Sort the array to handle duplicates as they will be adjacent
  nums.sort((a, b) => a - b);
  let backtrack = (path, choices) => {
    if (path.length === nums.length) {
      ans.push([...path]);
      return;
    }
    for (let i = 0; i < choices.length; i++) {
      // Skip duplicates
      if (i > 0 && choices[i] === choices[i - 1]) continue;
      path.push(choices[i]);
      // let newChoices = choices.slice(0, i).concat(choices.slice(i + 1));
      // let newChoices = [...choices.slice(0, i), ...choices.slice(i + 1)];
      backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
      path.pop();
    }
  };
  backtrack([], nums);
  return ans;
}
