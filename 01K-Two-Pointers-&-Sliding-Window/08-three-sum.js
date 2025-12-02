/** Three Sum
 * https://leetcode.com/problems/3sum/description/
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Example 2:
 * Input: nums = []
 * Output: []
 * Example 3:
 * Input: nums = [0]
 * Output: []
 * @param {number[]} nums
 * @return {number[][]}
 */

/** Optimized Approach: Sorting + Two Pointer Technique
 * - Sort the array to handle duplicates and use two-pointer technique
 * - Iterate through the array, for each element, use two pointers to find pairs
 *  that sum to the negative of the current element
 * - Skip duplicates to ensure unique triplets
 * Time Complexity: twoSum is O(n) and in threeSum we are calling twoSum n times, so O(n^2)
 *    - O(n^3) if we go with brute force approach
 * Space Complexity: O(log n) for sorting, O(k) for the output where k is the number of triplets
 */

function threeSum(nums) {
  let ans = [];
  // Sort the array
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // Skip duplicate elements for the first number
    if (nums[i] !== nums[i - 1]) {
      // Two-pointer approach for the remaining part of the array
      twoSum(nums, i, ans);
    }
  }
  return ans;
}

function twoSum(nums, x, ans) {
  let i = x + 1;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[x] + nums[i] + nums[j];
    if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([nums[x], nums[i], nums[j]]);
      i++;
      j--;
      // Skip duplicate elements for the second number
      while (i < j && nums[i] === nums[i - 1]) {
        i++;
      }
      // Skip duplicate elements for the third number
      //   while (i < j && nums[j] === nums[j + 1]) {
      //     j--;
      //   }
    }
  }
}
