/** Quick Sort Implementation
 * Quick Sort is a highly efficient sorting algorithm and
 * is based on partitioning an array into smaller sub-arrays.
 * The steps are:
 * 1. Choose a 'pivot' element from the array.
 * 2. Partition the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
 * 3. Recursively apply the above steps to the sub-arrays.
 *
 * Time Complexity: O(n log n) on average (when the pivot divides the array into two equal halves),
 *                  O(n^2) in the worst case (already sorted or reverse sorted array and poor pivot selection)
 * Space Complexity: O(log n) due to recursive stack space (divide and conquer approach)
 *
 * - no extra memory or space allocation is needed for the sorting process, making it an in-place sorting algorithm.
 * - cache friendly due to good locality of reference, which can lead to better performance on modern hardware.
 * - partitioning is efficient (log n) and can be done in-place, which contributes to its overall efficiency.
 * - randomize pivots avoid worst-case scenarios and improve performance on average.
 * - most standard libraries (e.g., C++ STL, Java's Arrays.sort) use quicksort or a hybrid of quicksort for sorting due to its efficiency and low memory usage.
 * - it is not a stable sorting algorithm, meaning that the relative order of equal elements is not guaranteed to be preserved.
 * - avoid worst case scenarios by using techniques like random pivot selection or the median-of-three method.
 * - quick sort is often faster than merge sort for small to medium-sized arrays due to lower constant factors and better cache performance.
 *
 * Sort an array - quick sort is not efficient enough for this problem, but it is a common sorting algorithm that is often used in practice.
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

function quickSort(array) {
  // Base case: if the array has 0 or 1 element, it's already sorted
  if (array.length <= 1) return array;

  // need start and end index to keep track of the portion of the array being sorted
  let startIndex = 0;
  let endIndex = array.length - 1;
  // partition the array and get the pivot index
  if (startIndex < endIndex) {
    let pivotIndex = findPivotIndex(array, startIndex, endIndex);
    quickSort(array, startIndex, pivotIndex - 1); // Recursively sort the left sub-array
    quickSort(array, pivotIndex + 1, endIndex); // Recursively sort the right sub-array
  }
  return array;
}

function findPivotIndex(array, startIndex, endIndex) {
  let pivotValue = array[endIndex]; // choose the last element as the pivot
  let pos = -1; // will track the position of the last element smaller than the pivot

  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] < pivotValue) {
      // swap array[i] with array[startIndex]
      pos++;
      //   [array[i], array[pos]] = [array[pos], array[i]];
      let temp = array[i];
      array[i] = array[pos];
      array[pos] = temp;
    }
  }
  // swap the pivot element with the element at pos + 1
  // [array[pos + 1], array[endIndex]] = [array[endIndex], array[pos + 1]];
  let temp = array[pos + 1];
  array[pos + 1] = array[endIndex];
  array[endIndex] = temp;

  return pos + 1; // return the index of the pivot after partitioning
}
