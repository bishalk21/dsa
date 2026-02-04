/** Quick Sort Implementation
 * Quick Sort is a highly efficient sorting algorithm and
 * is based on partitioning an array into smaller sub-arrays.
 * The steps are:
 * 1. Choose a 'pivot' element from the array.
 * 2. Partition the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
 * 3. Recursively apply the above steps to the sub-arrays.
 *
 * Time Complexity: O(n log n) on average, O(n^2) in the worst case
 * Space Complexity: O(log n) due to recursive stack space
 *
 * Sort an array
 * https://leetcode.com/problems/sort-an-array/
 *
 * Given an array of integers nums,
 * sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions
 * in O(n log(n)) time complexity and with the smallest space complexity possible.
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: after sorting the array, the position of some numbers
 *              are not changed (for example, 2 and 3), while the position
 *              of other numbers are changed (for example, 1 and 5).
 *
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessarily unique.
 *
 * Constraints:
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 * @param {number[]} array
 * @return {number[]}
 */
