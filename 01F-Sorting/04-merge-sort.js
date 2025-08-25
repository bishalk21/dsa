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
