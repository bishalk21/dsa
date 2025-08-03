/**
 * Max Consecutive Ones
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * nums = [1,1,0,1,1,1]
 * Output: 3
 *
 * nums = [1,0,1,1,0,1]
 * Output: 2
 *
 * Algorithm:
 * - initialize a counter for the current streak of 1's `currentCount` and a variable to track the maximum streak `maximimCount`.
 * - iterate through the array:
 *  - if the current element is 1, increment the current streak counter.
 * - if the current element is 0, compare the current streak with the maximum streak and reset the current streak counter.
 * - after the loop, check again to ensure the last streak is considered.
 * - return the maximum streak.
 * * Time Complexity: O(n), where n is the length of the array.
 * * Space Complexity: O(1), as we are using a constant amount of space.
 */

function findMaxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maximumCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      maximumCount = Math.max(maximumCount, currentCount);
      currentCount = 0;
    }
  }

  return Math.max(maximumCount, currentCount);
}
