/** Transformed Array
 * https://leetcode.com/problems/transformed-array/
 *
 * You are given an integer array nums that represents a circular array.
 * A circular array means the end of the array connects to the beginning of the array.
 * Formally, nums[i] is adjacent to nums[(i + 1) % n] and nums[(i - 1 + n) % n] for every index i (0-indexed).
 * Your task is to create a new array result of same size following the given rules:
 *
 * For each index i (where 0 <= i < nums.length), perform the following independent actions:
 * - if nums[i] > 0, start at index i and move nums[i] steps to the right in the circular array,
 *   set result[i] to the value of index where you land.
 * - if nums[i] < 0, start at index i and move abs(nums[i]) steps to the left in the circular array,
 *   set result[i] to the value of index where you land.
 * - if nums[i] === 0, set result[i] to nums[i]
 * Return the resulting array result.
 *
 * Note: Since nums is circular, moving past the last element wraps around to the beginning, and
 *       moving before the first element wraps back to the end.
 *
 * Example 1:
 * Input: nums = [3, -2, 1, 1]
 * Output: [1, 1, 1, 3]
 * Explanation: The array is circular, so index 3 is adjacent to index 0.
 *              - For index 0, nums[0] = 3, so we move 3 steps to the right: nums[3] and result[0] = 1.
 *              - For index 1, nums[1] = -2, so we move 2 steps to the left: nums[3] and result[1] = 1.
 *              - For index 2, nums[2] = 1, so we move 1 step to the right: nums[3] and result[2] = 1.
 *              - For index 3, nums[3] = 1, so we move 1 step to the right: nums[0] and result[3] = 3.
 * Example 2:
 * Input: nums = [-1, 4, -1]
 * Output: [-1, -1, 4]
 * Explanation: The array is circular, so index 2 is adjacent to index 0.
 *              - For index 0, nums[0] = -1, so we move 1 step to the left: nums[2] and result[0] = -1.
 *              - For index 1, nums[1] = 4, so we move 4 steps to the right: nums[2] and result[1] = -1.
 *              - For index 2, nums[2] = -1, so we move 1 step to the left: nums[1] and result[2] = 4.
 * Constraints:
 * 1 <= nums.length <= 100
 * -100 <= nums[i] <= 100
 *
 * @param {number[]} nums
 * @return {number[]}
 */

/** Algorithm Approach
 * Time Complexity: O(n) where n is the length of the input array nums.
 *                  We iterate through the array once to construct the result.
 * Space Complexity: O(n) for the result array that we create to store the transformed values.
 *
 * - We can solve this problem by iterating through the input array nums and
 *   constructing the result array based on the given rules.
 * - For each index i, we check the value of nums[i] and
 *   determine how many steps to move and in which direction (right for positive, left for negative).
 * - We can use modulo arithmetic to handle the circular nature of the array and
 *   ensure that we wrap around correctly when moving past the end or before the beginning of the array.
 * - The formula for calculating the new index when moving to the right is: (i + nums[i]) % n
 * - The formula for calculating the new index when moving to the left is: (i - abs(nums[i]) + n) % n
 * - We also need to handle the case when nums[i] is 0, in which case we simply set result[i] to nums[i].
 * - Finally, we return the constructed result array.
 */

function constructTransformedArray(nums) {
  let n = nums.length;
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    // in single iteration, we can determine the value of result[i] based on the value of nums[i]
    // let newIndex = ((i + nums[i]) % n + n) % n; // this formula handles both positive and negative nums[i] and ensures newIndex is always between 0 and n-1
    // result[i] = nums[newIndex];

    if (nums[i] === 0) {
      /** what if nums = [-10, -10]
       * Index 0: nums[0] = -10 < 0, move 10 steps to the left, new index = (0 - 10 + 2) % 2 = 0, result[0] = nums[0] = -10
       * Index 1: nums[1] = -10 < 0, move 10 steps to the left, new index = (1 - 10 + 2) % 2 = 1, result[1] = nums[1] = -10
       */
      // nums[i] === 0
      result[i] = nums[i];
      console.log(
        `Index ${i}: nums[${i}] = ${nums[i]} === 0, result[${i}] = nums[${i}] = ${result[i]}`,
      );
    } else if (nums[i] > 0) {
      // move nums[i] steps to the right
      // use modulo to wrap around the array and handle cases where nums[i] is greater than n
      // how modulo works: (i + nums[i]) % n will give the correct index even if nums[i] is greater than n
      // for example, if i = 0, nums[i] = 3, and n = 4, then (0 + 3) % 4 = 3, which is the correct index to move to the right
      let newIndex = (i + nums[i]) % n;
      result[i] = nums[newIndex];
      console.log(
        `Index ${i}: nums[${i}] = ${nums[i]} > 0, move ${nums[i]} steps to the right, new index = ${newIndex}, result[${i}] = nums[${newIndex}] = ${result[i]}`,
      );
    }
    // (nums[i] < 0)
    else {
      // move abs(nums[i]) steps to the left
      // i = 1, nums[i] = -2, n = 4, steps = 2, newIndex = (1 - 2) % 4 = -1 % 4 = -1 + 4 = 3, which is the correct index to move to the left
      let steps = Math.abs(nums[i]);
      let newIndex = (i - steps) % n;
      if (newIndex < 0) newIndex += n; // handle negative index after modulo
      result[i] = nums[newIndex];
      console.log(
        `Index ${i}: nums[${i}] = ${nums[i]} < 0, move ${Math.abs(nums[i])} steps to the left, new index = ${newIndex}, result[${i}] = nums[${newIndex}] = ${result[i]}`,
      );
    }
  }
  return result;
}
