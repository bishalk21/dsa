/**
 * Selection Sort Algorithm
 * this algorithm works by repeatedly finding the minimum element from the unsorted part
 * and putting it at the beginning
 *
 * Time Complexity: O(n^2) in the worst and average case
 * Space Complexity: O(1)
 */

let arr = [64, 25, 12, 22, 11];

function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element
    // if only the minimum element has changed
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

// Example usage
const sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);

/**
 * Example usage of Selection Sort
 * [64, 25, 12, 22, 11]
 * finds the minimum element (11) and swaps it with the first element (64),
 * resulting in [11, 25, 12, 22, 64]
 * finds the minimum element (12) and swaps it with the second element (25),
 * resulting in [11, 12, 25, 22, 64]
 * finds the minimum element (22) and swaps it with the third element (25),
 * resulting in [11, 12, 22, 25, 64]
 * finds the minimum element (25), since it is already in the correct position,
 * algorithm terminates and goes to the next iteration
 * finds the minimum element (64), since it is already in the correct position,
 * algorithm terminates and its last iteration confirms the array is sorted.
 */
