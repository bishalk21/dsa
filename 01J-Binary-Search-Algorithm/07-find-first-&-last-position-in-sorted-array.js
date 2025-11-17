/** Find first & last position in sorted array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 */

function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let ans = [-1, -1];

  // find first position
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) ans[0] = left;

  // find last position
  left = 0;
  right = nums.length - 1;

  while (left < right) {
    // use ceil to avoid infinite loop
    // ceil is used to bias the mid to the right
    let mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  if (nums[right] === target) ans[1] = right;
  return ans;
}
