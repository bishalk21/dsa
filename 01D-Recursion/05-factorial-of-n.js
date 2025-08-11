/**
 * Factorial of n using recursion
 * Factorial of a number n is the product of all positive integers from 1 to n.
 * Factorial of n is denoted as n!.
 * Factorial of 3 is 3! = 3 * 2 * 1 = 6.
 * n! = n * (n - 1)! for n > 0
 * (n - 1)! = (n - 1) * (n - 2)! for n > 1
 *
 * Base Condition: stops recursion when n is 0.
 * recursive case: multiplies n by the result of factorial(n - 1).
 */

function factorial(n) {
  // base condition: if n is 0, return 1
  if (n === 0) {
    return 1;
  }
  // recursive case: multiply n by the result of factorial(n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

/**
 * Explanation:
 * - factorial(5) = 5 * factorial(4)
 * - factorial(4) = 4 * factorial(3)
 * - factorial(3) = 3 * factorial(2)
 * - factorial(2) = 2 * factorial(1)
 * - factorial(1) = 1 * factorial(0)
 * - factorial(0) = 1 (base case)
 * - Final result: 5 * 4 * 3 * 2 * 1 = 120
 *
 * Time Complexity: O(n) - linear time complexity as it makes n recursive calls.
 * Space Complexity: O(n) - linear space complexity due to the call stack.
 */
