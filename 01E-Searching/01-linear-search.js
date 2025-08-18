/**
 * Linear Search Algorithm
 * This function performs a linear search on an array to find a target value.
 * - This function searches for a target value in an array.
 * - It returns the index of the target if found, otherwise returns -1.
 *
 * Time Complexity: O(n) - where n is the number of elements in the array.
 * Space Complexity: O(1) - no additional space is used that scales with input size.
 */

function linearSearch(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // check if the current element matches the target
    if (array[i] === target) {
      // Return the index if the target is found
      return i;
    }
  }
  // Return -1 if the target is not found
  return -1;
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(numbers, target);
console.log(`Target ${target} found at index: ${result}`); // Output: Target 4 found at index: 3
