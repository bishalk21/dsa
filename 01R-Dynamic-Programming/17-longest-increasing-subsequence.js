/** Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Given an integer array nums,
 * return the length of the longest strictly increasing subsequence.
 *
 * A subsequence is a sequence that can be derived from an array
 * by deleting some or no elements without
 * changing the order of the remaining elements.
 * For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 *
 * Example 1:
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Example 2:
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 * Explanation: The longest increasing subsequence is [0,1,2,3], therefore the length is 4.
 *
 * Example 3:
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 * Explanation: The longest increasing subsequence is [7], therefore the length is 1.
 *
 * Constraints:
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 *
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @time O(n^2) where n is length of nums
 * @space O(n) where n is length of nums
 * @description Dynamic Programming
 */

function lengthOfLIS(nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);
  dp[0] = 1;
  // length of longest increasing subsequence
  let lisLen = 1;
  for (let i = 1; i < n; i++) {
    // for smaller elements before i
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        lisLen = Math.max(lisLen, dp[i]);
      }
    }
  }
  return lisLen;
}

/** Bruteforce Approach
 * @time O(2^n) where n is length of nums
 * @space O(n) where n is length of nums
 * @description Recursion
 */
function lengthOfLIS_Bruteforce(nums) {
  let n = nums.length;
  let fn = (idx, prev) => {
    if (idx === n) return 0;
    // not take
    let notTake = fn(idx + 1, prev);
    // take
    let take = 0;
    if (nums[idx] > prev) {
      take = 1 + fn(idx + 1, nums[idx]);
    }
    return Math.max(take, notTake);
  };
  return fn(0, -Infinity);
}
