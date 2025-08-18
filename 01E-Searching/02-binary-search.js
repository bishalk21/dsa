/**
 * Binary Search Algorithm
 * This function performs a binary search on a sorted array to find a target value.
 * - This function searches for a target value in a sorted array.
 * - It returns the index of the target if found, otherwise returns -1.
 *
 *  how it works:
 * - The array must be sorted (in ascending order) before using binary search.
 * - it repeatedly divides the search interval in half.
 * - If the target value is less than the middle element,
 *     - it narrows the search to the lower half.
 *     - the right pointer is moved to the middle index minus one (right = mid - 1).
 * - if the target value is greater than the middle element,
 *     - it narrows the search to the upper half.
 *     - the left pointer is moved to the middle index plus one (left = mid + 1).
 * - If the target value is equal to the middle element, it returns the index of the middle element.
 * - If the target value is not found, it returns -1.
 *
 * Base case:
 * - If the left pointer exceeds the right pointer, it means the target is not in the array.
 *
 * Time Complexity: O(log n) - where n is the number of elements in the array.
 * Space Complexity: O(1) - no additional space is used that scales with input size.
 */

function binarySearch(array, target) {
  // initialize left and right pointers
  let left = 0;
  let right = array.length - 1;

  // Continue searching while the left pointer is less than or equal to the right pointer
  // while loop is better than for loop here because it allows dynamic adjustment of pointers
  while (left <= right) {
    // calculate the middle index
    let middle = Math.floor((left + right) / 2);
    // check if the target is found at the middle index
    if (array[middle] === target) {
      // Return the index if the target is found
      return middle;
    }
    // If the target is less than the middle element, narrow the search to the left half
    else if (array[middle] > target) {
      // Move the right pointer to the middle index minus one
      right = middle - 1;
    }
    // if the target is greater than the middle element, narrow the search to the right half
    else {
      // Move the left pointer to the middle index plus one
      left = middle + 1;
    }
  }
  // Return -1 if the target is not found
  return -1;
}

// Example usage:
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(sortedNumbers, target);
console.log(`Target ${target} found at index: ${result}`); // Output: Target 5 found at index: 4

// Example usage with a target not in the array
const notFoundTarget = 10;
const notFoundResult = binarySearch(sortedNumbers, notFoundTarget);
console.log(`Target ${notFoundTarget} found at index: ${notFoundResult}`);
// Output: Target 10 found at index: -1
// Note: The array must be sorted for binary search to work correctly.
