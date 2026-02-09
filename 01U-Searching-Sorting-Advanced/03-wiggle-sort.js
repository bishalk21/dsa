/** Wiggle Sort
 * https://leetcode.com/problems/wiggle-sort/
 *
 * Given an integer array nums, reorder it in-place such that nums[0] < nums[1] > nums[2] < nums[3]....
 * You may assume the input array always has a valid answer.
 *
 * Example 1:
 * Input: nums = [3,5,2,1,6,4]
 * Output: [3,5,1,6,2,4]
 * Explanation: One possible answer is [3,5,1,6,2,4]. Another possible answer is [1,6,2,5,3,4].
 *
 * Example 2:
 * Input: nums = [6,6,5,6,3,8]
 * Output: [6,6,5,6,3,8]
 * Explanation: One possible answer is [6,6,5,6,3,8]. Another possible answer is [6,8,5,6,3,6].
 *
 * Constraints:
 * 1 <= nums.length <= 5 * 10^4
 * 0 <= nums[i] <= 10^4
 * It is guaranteed that there will be an answer for the given input nums.
 *
 * Follow up: Can you do it in O(n) time and/or in-place with O(1) extra space?
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/** Algorithm: One Pass In-Place
 * Time Complexity: O(n) where n is the number of elements in the input array.
 * Space Complexity: O(1) since we are modifying the input array in-place and not using any extra space.
 * The algorithm iterates through the input array once, starting from the second element (index 1).
 * For each element at index i, it checks if the current element is in the correct order with respect to the previous element (index i - 1).
 * If the index i is odd, it checks if nums[i] < nums[i - 1], and if so, it swaps them to maintain the wiggle property.
 * If the index i is even, it checks if nums[i] > nums[i - 1], and if so, it swaps them to maintain the wiggle property.
 * By doing this in a single pass, we ensure that the array is reordered in-place without needing extra space for another array.
 * This approach efficiently achieves the desired wiggle sort order in O(n) time and O(1) space.
 */
function wiggleSort(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (
      (i % 2 === 1 && nums[i] < nums[i - 1]) ||
      (i % 2 === 0 && nums[i] > nums[i - 1])
    ) {
      // swap nums[i] and nums[i - 1]
      // [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
      let temp = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
    }
  }
  return nums;
}
