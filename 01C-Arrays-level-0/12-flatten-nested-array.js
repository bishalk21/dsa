/** Flatten Nested Array
 * https://namastedev.com/practice/flatten-nested-array
 *
 * Create a function that takes a nested array of arbitrary depth
 * and returns a flattened array where
 * all nested elements are extracted and placed in a single-level array.
 *
 * Example 1:
 * Input: [1, [2, [3, 4], 5], 6]
 * Output: [1, 2, 3, 4, 5, 6]
 *
 * Example 2:
 * Input: [[['a']], [['b', 'c']], 'd']
 * Output: ['a', 'b', 'c', 'd']
 *
 * Algorithm Approach: Recursion
 * - Use recursion to handle arbitrary depth of nesting.
 * - Initialize an empty array to hold the flattened result.
 * - Iterate through each element of the input array.
 * - If the element is an array, recursively flatten it and concatenate the result to the flattened array.
 * - If the element is not an array, push it directly to the flattened array.
 * - Return the flattened array.
 * - This approach ensures that all levels of nesting are handled correctly.
 *
 * - Time Complexity: O(n) where n is the total number of elements in the nested array.
 * - Space Complexity: O(n) for the output array.
 */

function flattenArray(nestedArr) {
  // if an empty array is passed, return an empty array
  if (nestedArr.length === 0) return [];

  // empty array to hold the flattened result
  let flattenedArr = [];

  // iterate through each element of the input array
  for (let i = 0; i < nestedArr.length; i++) {
    let element = nestedArr[i];
    // if the element is an array, recursively flatten it
    if (Array.isArray(element)) {
      flattenedArr = flattenedArr.concat(flattenArray(element));
    } else {
      // if the element is not an array, push it directly to the flattened array
      flattenedArr.push(element);
    }
  }
  return flattenedArr; // return the flattened array
}
