/** Trionic Array I
 * https://leetcode.com/problems/trionic-array-i/
 *
 * You are given an interger array nums of length n
 * An array is trionic if there exists indices 0 < p < q < n - 1 such that:
 * - nums[0...p] is strictly increasing
 * - nums[p...q] is strictly decreasing
 * - nums[q...n - 1] is strictly increasing
 *
 * Return true if the given array is trionic, otherwise return false.
 *
 * Example 1:
 * Input: nums = [1,3,5,4,2,6]
 * Output: true
 * Explanation: The array is trionic with p = 2 and q = 4.
 *              - nums[0...2] = [1,3,5] is strictly increasing (1 < 3 < 5).
 *              - nums[2...4] = [5,4,2] is strictly decreasing (5 > 4 > 2).
 *              - nums[4...5] = [2,6] is strictly increasing (2 < 6).
 *
 * Example 2:
 * Input: nums = [2,1,3]
 * Output: false
 * Explanation: There is no way to make the array trionic.
 *
 * Constraints:
 * 3 <= n <= 100
 * -1000 <= nums[i] <= 1000
 *
 * @param {number[]} nums
 * @return {boolean}
 */

function isTrionicArray(nums) {
  let n = nums.length;
  // corner case: need at least 3 elements to form trionic array
  if (n < 3) return false;
  // p must be at least 1 and at most n-2 (since 0 < p)
  for (let p = 1; p < n - 2; p++) {
    // q must be at least p+1 and at most n-1 (since p < q < n-1)
    for (let q = p + 1; q < n - 1; q++) {
      // check increasing from 0 to p
      if (
        isIncreasing(nums, 0, p) &&
        isDecreasing(nums, p, q) &&
        isIncreasing(nums, q, n - 1)
      ) {
        return true;
      }
    }
  }
  return false;
}
function isIncreasing(arr, start, end) {
  for (let i = start; i < end; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function isDecreasing(arr, start, end) {
  for (let i = start; i < end; i++) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  return true;
}
