/**
 * Insertion Sort Algorithm
 * Sorts an array by repeatedly inserting elements into their correct position.
 * - FIRST index item is considered sorted,
 * - subsequent items are then compared to the sorted portion and inserted at the correct position.
 * - This process is repeated for all elements in the array.
 * - Insertion sort is adaptive, meaning it performs better on partially sorted arrays.
 *
 * Time Complexity: O(n^2) in the worst and average cases,
 *                  O(n) in the best case (when the array is already sorted).
 * Space Complexity: O(1) - only a constant amount of additional memory is required.
 */

let arr = [5, 2, 9, 1, 5, 6];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // store the current element
    let current = array[i];
    // previous element
    let previous = i - 1;

    // finding the correct position for the current element
    while (array[previous] > current && previous >= 0) {
      // 5 > 2
      array[previous + 1] = array[previous]; // array[1] = array[0] = 5
      previous--; // -1
    }
    // insert the current element into the correct position
    array[previous + 1] = current; // array[-1 + 1] = array[0] = 2
  }
  return array;
}

// corner case
let arr2 = [3, 4, 5, 7, 1, 2];
// here while 3, 4, 5 ,7  are shifted to right,
// we need to make sure that array is not out of bounds or array[previous] is defined
// previous >= 0

// example usage
let sortedArray = insertionSort(arr);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]

let sortedArray2 = insertionSort(arr2);
console.log(`sortedArray2: ${sortedArray2}`); // Output: [1, 2, 3, 4, 5, 7]
