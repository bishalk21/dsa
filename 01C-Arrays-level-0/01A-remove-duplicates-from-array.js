/** Remove duplicates from Array
 * Given an array, your task is to return a new array with all the
 * duplicate elements removed.
 * You should preserve the order of the first occurrence of each element.
 *
 * Input: an array of any primitive values (numbers, strings, etc.)
 *        - Primitive numbers: Number, String, Boolean, Null, Undefined
 * Output: a new array containing only unique elements, in the order they first appear.
 *
 * Edge cases:
 * - empty array should return an empty array
 * - duplicates can be of different types (e.g., 1 and "1" are not the same)
 * - object and array references are considered unique even if they look identical
 */

/** Algorithm (without using custom built-in methods)
 * - Create a new array to store unique elements
 * - Iterate through the input array
 * - For each element, check if it is already in the new array
 * - If not, add it to the new array
 * - Return the new array
 */

function removeDuplicatesWithoutBuiltInMethods(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function removeDuplicates(arr) {
  // Using Set to store unique elements
  return [...new Set(arr)];
}

function removeDuplicatedUsingBuiltInMethods(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
