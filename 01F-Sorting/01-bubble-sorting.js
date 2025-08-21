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

/**
 * Example usage of Bubble Sort
 * [64, 34, 25, 12, 22, 11, 90]
 * compares arr[0] with with arr[1] and swaps them, resulting in [34, 64, 25, 12, 22, 11, 90]
 * compares arr[1] with arr[2] and swaps them, resulting in [34, 25, 64, 12, 22, 11, 90]
 * compares arr[2] with arr[3] and swaps them, resulting in [34, 25, 12, 64, 22, 11, 90]
 * compares arr[3] with arr[4] and swaps them, resulting in [34, 25, 12, 22, 64, 11, 90]
 * compares arr[4] with arr[5] and swaps them, resulting in [34, 25, 12, 22, 11, 64, 90]
 * compares arr[5] with arr[6] and finds 90 is greater than 64,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [34, 25, 12, 22, 11, 64, 90]
 *
 * compares arr[0] with arr[1] and swaps them, resulting in [25, 34, 12, 22, 11, 64, 90]
 * compares arr[1] with arr[2] and swaps them, resulting in [25, 12, 34, 22, 11, 64, 90]
 * compares arr[2] with arr[3] and swaps them, resulting in [25, 12, 22, 34, 11, 64, 90]
 * compares arr[3] with arr[4] and swaps them, resulting in [25, 12, 22, 11, 34, 64, 90]
 * compares arr[4] with arr[5] and finds 64 is greater than 34,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [25, 12, 22, 11, 34, 64, 90]
 *
 * compares arr[0] with arr[1] and swaps them, resulting in [12, 25, 22, 11, 34, 64, 90]
 * compares arr[1] with arr[2] and swaps them, resulting in [12, 22, 25, 11, 34, 64, 90]
 * compares arr[2] with arr[3] and swaps them, resulting in [12, 22, 11, 25, 34, 64, 90]
 * compares arr[3] with arr[4] and finds 34 is greater than 25,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [12, 22, 11, 25, 34, 64, 90]
 *
 * compares arr[0] with arr[1] and swaps them, resulting in [11, 12, 22, 25, 34, 64, 90]
 * compares arr[1] with arr[2] and finds 22 is less than 12,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [11, 12, 22, 25, 34, 64, 90]
 *
 * compares arr[0] with arr[1] and finds 12 is less than 11,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [11, 12, 22, 25, 34, 64, 90]
 *
 * compares arr[0] with arr[1] and finds 11 is less than 12,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [11, 12, 22, 25, 34, 64, 90]
 *
 * compares arr[0] with arr[1] and finds 12 is less than 11,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [11, 12, 22, 25, 34, 64, 90]
 *
 * compares arr[0] with arr[1] and finds 11 is less than 12,
 * meaning they are in order and no swap is needed or isSwapped is false and
 * the algorithm can terminate early with arr being [11, 12, 22, 25, 34, 64, 90]
 */
