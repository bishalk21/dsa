/** Minimum Removals to Balance Array
 * https://leetcode.com/problems/minimum-removals-to-balance-array/
 *
 * You are given an integer array nums and an integer k
 * An array is considered balanced if the value of its maximum element is
 * at most k times the value of its minimum element.
 * You may remove any number of elements from nums without making it empty
 * Return the minimum number of elements to remove so that remaining array is balanced.
 *
 * Note: an array of size 1 is considered balanced as
 *       its maximum and minimum are equal, and the condition always holds true.
 *
 * Example 1:
 * Input: nums = [2,1,5], k = 2
 * Output: 1
 * Explanation: We can remove 5 from the array to make it balanced. The remaining array is [2,1] where the maximum element is 2 and the minimum element is 1. Since 2 is at most 2 times 1, the array is balanced.
 *              Remove nums[2] = 5 to get the balanced array nums = [2,1].
 *              Now max = 2 and min = 1, and max is at most k * min (2 <= 2 * 1), so the array is balanced
 *              thus the minimum number of removals is 1.
 *
 * Example 2:
 * Input: nums = [1,6,2,9], k = 3
 * Output: 2
 * Explanation: Remove nums[0] = 1 and nums[3] = 9 to get the balanced array nums = [6,2].
 *              Now max = 6 and min = 2, and max is at most k * min (6 <= 3 * 2), so the array is balanced.
 *              Thus the minimum number of removals is 2.
 *
 * Example 3:
 * Input: nums = [4,6], k = 2
 * Output: 0
 * Explanation: The array is already balanced since max = 6 and min = 4, and max is at most k * min (6 <= 2 * 4).
 *              Thus the minimum number of removals is 0.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^9
 * 1 <= k <= 10^5
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/** Algorithm: Sliding Window
 * Time Complexity: O(n log n) due to sorting the array,
 *                  where n is the number of elements in the input array.
 * Space Complexity: O(1) if we ignore the space used for sorting,
 *                   otherwise O(n) due to the space used by the sorting algorithm.
 *
 * The algorithm first sorts the input array to easily find the minimum and maximum elements in any subarray.
 * Then, it uses a sliding window approach with two pointers (left and right) to find the longest balanced subarray
 * where the condition nums[right] <= k * nums[left] holds true.
 * The minimum removals needed is then calculated as the total length of the array minus
 * the length of this longest balanced subarray.
 * The sliding window technique allows us to efficiently find the longest balanced subarray in a single pass
 * after sorting, resulting in an overall efficient solution to the problem.
 */

function minimumRemovals(nums, k) {
  let n = nums.length;

  // base case - if the array has only one element, it's already balanced
  if (n === 1) return 0;

  // sort the array to easily find the minimum and maximum elements
  nums.sort((a, b) => a - b);

  // pointer to track the minimum element
  let left = 0;
  // maxLength to track the length of the longest balanced subarray
  // maxLength is used to find the longest balanced subarray
  // where nums[right] <= k * nums[left]
  // at minimum, we can have a balanced subarray of length 1 (any single element is balanced)
  let maxLength = 1;
  // iterate through the sorted array with a right pointer
  for (let right = 0; right < n; right++) {
    // while the current subarray is not balanced, move the left pointer to the right
    while (nums[right] > k * nums[left] && left < right) {
      left++;
    }
    // update the maxLength of the balanced subarray found so far
    // right - left + 1 gives the length of the current balanced subarray
    maxLength = Math.max(maxLength, right - left + 1);
  }
  // the minimum removals is the total length minus the length of the longest balanced subarray
  return n - maxLength;
}
