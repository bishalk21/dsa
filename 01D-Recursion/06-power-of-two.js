/**
 * Power of Two
 * Conditions:
 * 1. if on dividing n by 2, the result is 1, then n is a power of two.
 * 2. if odd number is encountered, then n is not a power of two.
 * 3. if on dividing n by 2, the result is 0 or less than 0, then n is not a power of two.
 *
 * Base Condition: stops recursion when n is 1.
 * recursive case: divides n by 2 and checks if the result is a power of two.
 *
 * Check if a number n is a power of two using recursion.
 */

function isPowerOfTwo(n) {
  // Base condition: if n is 1, it is a power of two
  if (n === 1) {
    return true;
  }
  // If n is less than 1 or odd, it is not a power of two
  if (n < 1 || n % 2 !== 0) {
    return false;
  }
  // Recursive case: divide n by 2 and check if the result is a power of two
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(16)); // Output: true (2^4 = 16)
console.log(isPowerOfTwo(18)); // Output: false (not a power of two)

/**
 * Explanation:
 * - isPowerOfTwo(16) = isPowerOfTwo(8)
 * - isPowerOfTwo(8) = isPowerOfTwo(4)
 *  - isPowerOfTwo(4) = isPowerOfTwo(2)
 * - isPowerOfTwo(2) = isPowerOfTwo(1)
 * - isPowerOfTwo(1) = true (base case)
 * - Final result: true (16 is a power of two)
 *
 * Time Complexity: O(log n) - logarithmic time complexity as it divides n by 2 in each recursive call.
 * Space Complexity: O(log n) - logarithmic space complexity due to the call stack.
 * Input: 16
 * Output: true
 * Input: 18
 * Output: false
 *
 * Algorithm:
 * 1. Define a function isPowerOfTwo that takes an integer n as input.
 * 2. Check if n is 1 (base case). If true, return true.
 * 3. Check if n is less than 1 or odd. If true, return false.
 * 4. If n is even, divide it by 2 and call the function recursively.
 * 5. Return the result of the recursive call.
 * 6. Print the final result of the function.
 */
