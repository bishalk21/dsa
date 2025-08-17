/**
 * Recursion Masterclass
 *
 * Solving Fibonacci Sequence using Recursion
 * Fibonacci Sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
 * The sequence commonly starts with 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The Fibonacci sequence is defined as follows:
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n-1) + F(n-2) for n > 1
 *
 * Base Condition: stops recursion when n is 0 or 1.
 * Recursive Case: calls the function with n-1 and n-2.
 *
 * Time Complexity: O(2^n) - exponential time complexity due to the nature of recursion.
 * Space Complexity: O(n) - linear space complexity due to the call stack.
 */

function Fibonacci(n) {
  // base condition: if n is 0 or 1, return n
  if (n <= 1) {
    return n;
  }
  // recursive case: return the sum of the two preceding numbers
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(5)); // Output: 5 (Fibonacci sequence: 0, 1, 1, 2, 3, 5)
console.log(Fibonacci(10)); // Output: 55 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)

/**
 * Using Iterative Approach for Fibonacci Sequence
 * This approach uses a loop to calculate the Fibonacci sequence iteratively.
 * It is more efficient than the recursive approach.
 *
 * Time Complexity: O(n) - linear time complexity as it iterates through n.
 * Space Complexity: O(1) - constant space complexity as it uses a fixed amount of space.
 */

function FibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }

  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= n; i++) {
    // calculate the next Fibonacci number
    c = a + b;
    // update a and b for the next iteration
    a = b;
    b = c;
  }
  return c;
}

console.log(FibonacciIterative(5)); // Output: 5
console.log(FibonacciIterative(10)); // Output: 55
