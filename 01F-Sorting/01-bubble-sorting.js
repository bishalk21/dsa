/**
 * Bubble Sort Algorithm
 * it repeatedly steps through the list or array,
 * compares adjacent elements and swaps them if they are in the wrong order,
 * until the entire list is sorted.
 *
 * Time Complexity: O(n^2) in the worst and average case,
 *                  - O(n) in the best case (when the array is already sorted)
 * Space Complexity: O(1) - Bubble sort is an in-place sorting algorithm
 */

function bubbleSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return array;
}

// example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);
