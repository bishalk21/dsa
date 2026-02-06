/** Counting Sort Algorithm
 * - non-comparison based sorting algorithm.
 * - efficient sorting algorithm for sorting integers within a specific range.
 * - it counts the occurrences of each unique integer in the input array,
 *   and then uses this count to determine the position of each integer in the output array.
 * - it is particularly effective
 *   when the range of input values (k) is not significantly larger than the number of elements (n) to be sorted.
 *   (i.e., when k is O(n)).
 * - it is more efficient than comparison-based sorting algorithms (like quicksort, mergesort) when the range of input values is small.
 *
 * Time Complexity: O(n + k) where n is the number of elements in the input array and k is the range of input values.
 *                  O(n) when k is O(n).
 * Space Complexity: O(n + k) - requires additional space for the output array and the count array.
 *                   O(n) when k is O(n).
 *
 * Sort Colors
 * https://leetcode.com/problems/sort-colors/
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 *
 * Follow up: Could you come up with a one-pass algorithm using only O(1) extra space?
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function countingSort(nums) {
  // finding range of input values (k) to determine the size of the count array
  // finding the range is like finding the maximum value in the input array, which is O(n) time complexity
  // find the maximum value in the input array to determine the size of the count array
  let max = Math.max(...nums); // [2,0,2,1,1,0] => max = 2
  // create a count array to store the count of each unique integer in the input array
  // the size of the count array is max + 1 because we need to account for the integer 0 as well
  let count = new Array(max + 1).fill(0);
  // count the occurrences of each unique integer in the input array
  for (let num of nums) {
    count[num]++;
  }
  // index to keep track of the position in the original array
  let index = 0;
  // iterate through the count array and place the integers in the original array based on their count
  // loop till end of count array or until the max value included
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      nums[index] = i; // place the integer i in the original array and move to the next index
      index++;
      count[i]--; // decrement the count of the integer i
    }
  }

  return nums; // return the sorted array
}
