/** Palindrome Array Check
 * Given an array of integers, return true if the array is a palindrome or false otherwise.
 *
 * Algorithm Approach 1:
 * - Convert the array to a string and check if the string is equal to its reverse.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * Algorithm Approach 2:
 * - Use two pointers to compare elements from the start and end of the array.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */

// Approach 1 (without built-in functions)
function isPalindromeArray(arr) {
  let str = arr.join("");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Approach 2 (without built-in functions)
function isPalindromeArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
