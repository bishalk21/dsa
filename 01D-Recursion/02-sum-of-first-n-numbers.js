/**
 * Sum of first n numbers
 * Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
 *
 * Base Condition: stops recursion when n is 0.
 * recursive case: adds n to the result of sum(n - 1).
 * Example: sum(5) should return 15 (1 + 2 + 3 + 4 + 5).
 *
 * Time Complexity: O(n) - linear time complexity as it makes n recursive calls.
 * Space Complexity: O(n) - linear space complexity due to the call stack.
 *
 * Input: 5
 * Output: 15
 */

function sum(n) {
  // Base condition: if n is 0, return 0
  if (n === 0) {
    return 0;
  }
  // Recursive case: add n to the result of sum(n - 1)
  return n + sum(n - 1);
}

console.log(sum(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
