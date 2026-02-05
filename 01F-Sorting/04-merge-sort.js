/**
 * Merge Sort Algorithm (Divide and Conquer Algorithm)
 *
 * - divides the array into smaller sub-arrays,
 *   array = [5, 2, 9, 1, 5, 6] => [5, 2, 9] and [1, 5, 6]
 *
 *   sorts them independently, and then merges them back together.
 * - it is more efficient than simple algorithms like insertion sort,
 *   especially for larger datasets.
 *
 * Time Complexity: O(n log n) in all cases (worst, average, best)
 * Space Complexity: O(n) - requires additional space for the temporary arrays.
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

function mergeSort(array) {
  if (array.length <= 1) return array; // Base case: arrays with 0 or 1 element are already sorted

  // step 1: Divide
  let middle = Math.floor(array.length / 2); // Find the middle index (using floor to round down)

  // step 2: Conquer
  let left = mergeSort(array.slice(0, middle)); // Recursively sort the left half
  let right = mergeSort(array.slice(middle)); // Recursively sort the right half

  // step 3: merge
  return merge(left, right);
}

// helper function to merge two sorted arrays
function merge(left, right) {
  let mergedArray = [];
  let pointer1 = 0; // tracks position for left array
  let pointer2 = 0; // tracks position for right array
  let m = left.length;
  let n = right.length;

  // merge
  while (pointer1 < m && pointer2 < n) {
    if (left[pointer1] < right[pointer2]) {
      // mergedArray.push(left[pointer1++])
      mergedArray.push(left[pointer1]);
      pointer1++;
    } else {
      // mergedArray.push(right[pointer2++])
      mergedArray.push(right[pointer2]);
      pointer2++;
    }
  }
  // append any remaining elements from either array
  // return [...mergedArray, ...left.slice(pointer1), ...right.slice(pointer2)];
  mergedArray = mergedArray
    .concat(left.slice(pointer1))
    .concat(right.slice(pointer2));

  return mergedArray;
}
