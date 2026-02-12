/** Longest Balanced Subarray I
 * https://www.leetcode.com/problems/longest-balanced-subarray-i/
 *
 * You are given a 0-indexed binary array nums.
 *
 * A subarray is called balanced if the number of distinct even numbers
 * in the subarray is equal to the number of distinct odd numbers in the subarray.
 *
 * Return the length of the longest balanced subarray in nums.
 *
 * Example 1:
 * Input: nums = [2,5,4,3]
 * Output: 4
 * Explanation: The longest balanced subarray is the entire array [2,5,4,3].
 *              It has 2 distinct even numbers (2 and 4) and
 *              2 distinct odd numbers (5 and 3).
 * Example 2:
 * Input: nums = [3,2,2,5,4]
 * Output: 5
 * Explanation: The longest balanced subarray is the entire array [3,2,2,5,4].
 *              It has 2 distinct even numbers (2 and 4) and
 *              2 distinct odd numbers (3 and 5).
 * Example 3:
 * Input: nums = [1,2,3,2]
 * Output: 3
 * Explanation: The longest balanced subarray is [2,3,2].
 *              It has 1 distinct even number (2) and
 *              1 distinct odd number (3).
 *
 * Constraints:
 * - 1 <= nums.length <= 1500
 * - 1 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number}
 */

/** Algorithm: Sliding Window + HashMap
 * - We can use a sliding window approach to find the longest balanced subarray.
 * - We will maintain two hash maps to count the distinct even and odd numbers in the current window.
 * - We will expand the right pointer of the window to include new elements and update the counts in the hash maps.
 * - If the number of distinct even numbers is equal to the number of distinct odd numbers,
 *   we will update the maximum length of the balanced subarray.
 * - If the number of distinct even numbers is greater than the number of distinct odd numbers,
 *   we will move the left pointer of the window to the right until the counts are balanced again.
 * - We will repeat this process until we have processed all elements in the array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function longestBalancedSubarray(nums) {
  // nums = [2,5,4,3]
  let n = nums.length; // n = 4
  let maxLength = 0;
  // try each starting point of the subarray
  for (let start = 0; start < n; start++) {
    // early exit: if the remaining length of the array is less than or equal to maxLength, we can break the loop
    if (n - start <= maxLength) break;
    // set to store distinct even and odd numbers in the current window
    let evenCount = new Set();
    let oddCount = new Set();
    // expand the window to the right
    for (let end = start; end < n; end++) {
      let num = nums[end];
      if (num % 2 === 0) {
        evenCount.add(num);
      } else {
        oddCount.add(num);
      }
      // check if balanced at each step
      // update maxLength if balanced
      if (evenCount.size === oddCount.size) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
      /**
       * start = 0, end = 0, num = 2, evenCount = {2}, oddCount = {}, maxLength = 0
       * start = 0, end = 1, num = 5, evenCount = {2}, oddCount = {5}, maxLength = (0, 1 - 0 + 1) = 2
       * start = 0, end = 2, num = 4, evenCount = {2, 4}, oddCount = {5}, maxLength = 2
       * start = 0, end = 3, num = 3, evenCount = {2, 4}, oddCount = {5, 3}, maxLength = (2, 3 - 0 + 1) = 4
       * start = 1, end = 1, num = 5, evenCount = {}, oddCount = {5}, maxLength = 4
       * start = 1, end = 2, num = 4, evenCount = {4}, oddCount = {5}, maxLength = 4
       * start = 1, end = 3, num = 3, evenCount = {4}, oddCount = {5, 3}, maxLength = (4, 3 - 1 + 1) = 4
       * start = 2, end = 2, num = 4, evenCount = {4}, oddCount = {}, maxLength = 4
       * start = 2, end = 3, num = 3, evenCount = {4}, oddCount = {3}, maxLength = (4, 3 - 2 + 1) = 4
       * start = 3, end = 3, num = 3, evenCount = {}, oddCount = {3}, maxLength = 4
       */
    }
    // evenCount.clear();
    // oddCount.clear();
  }
  return maxLength;
}

/** Longest Balanced Subarray II
 * https://www.leetcode.com/problems/longest-balanced-subarray-ii/
 *
 * The problem is similar to Longest Balanced Subarray I,
 * but we need to find the longest balanced subarray
 * that contains at least one even number and at least one odd number.
 * The approach is the same as Longest Balanced Subarray I,
 * but we need to add an additional check to ensure that
 * the balanced subarray contains at least one even and one odd number.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function longestBalancedSubarrayII(nums) {
  let n = nums.length;
  let maxLength = 0;
  for (let start = 0; start < n; start++) {
    if (n - start <= maxLength) break;
    let evenCount = new Set();
    let oddCount = new Set();
    for (let end = start; end < n; end++) {
      let num = nums[end];
      // add the current number to the appropriate set (even or odd)
      (num & 1 ? oddCount : evenCount).add(num);
      // check if balanced and contains at least one even and one odd number
      if (evenCount.size === oddCount.size && evenCount.size > 0) {
        let currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
      }
    }
    // evenCount.clear();
    // oddCount.clear();
  }
  return maxLength;
}
