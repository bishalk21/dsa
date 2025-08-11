/**
 * Sum of all odd numbers in an array
 * Write a function sumOfOddNumbers(n) that calculates the sum of all odd numbers in an array using recursion.
 * Base Condition: stops recursion when n is less than 0.
 * recursive case: checks if the last element is odd, adds it to the sum of the rest of the array.
 * Example: sumOfOddNumbers([1, 2, 3, 4, 5]) should return 9 (1 + 3 + 5).
 * Time Complexity: O(n) - linear time complexity as it makes n recursive calls.
 * Space Complexity: O(n) - linear space complexity due to the call stack.
 * Input: [1, 2, 3, 4, 5]
 * Output: 9
 *
 * Algorithm:
 * 1. Define a function sumOfOddNumbers that takes an integer n as input.
 * 2. Check if n is less than 0 (base case). If true, return 0.
 * 3. Check if the last element of the array is odd using a helper function isOdd.
 * 4. If it is odd, add it to the result of the recursive call with n - 1.
 * 5. If it is even, just return the result of the recursive call with n - 1.
 * 6. Return the final sum of all odd numbers in the array.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfOddNumbers(n) {
  // Helper function to check if a number is odd
  //   let isOdd = (num) => num % 2 !== 0;
  let isOdd = arr[n] % 2 !== 0; // Check if the last element is odd
  // Base condition: if the array is empty, return 0
  //   if (n < 0) {
  //     return 0;
  //   }
  if (n < 0) return 0; // Base case: if n is less than 0, stop recursion

  // Recursive case: if the last element is odd, add it to the sum of the rest of the array
  //   return (isOdd(arr[n]) ? arr[n] : 0) + sumOfOddNumbers(n - 1);
  return (isOdd ? arr[n] : 0) + sumOfOddNumbers(n - 1); // Add the odd number to the sum of the rest of the array
  // If the last element is even, just return the sum of the rest of the array
}

/**
 * arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], arr.length = 10
 * sumOfOddNumbers(10 - 1) = sumOfOddNumbers(9)
 * sumOfOddNumbers(9) = 9 + sumOfOddNumbers(8) (since 9 is odd)
 * sumOfOddNumbers(8) = 0 + sumOfOddNumbers(7) (since 8 is even)
 * sumOfOddNumbers(7) = 7 + sumOfOddNumbers(6) (since 7 is odd)
 * sumOfOddNumbers(6) = 0 + sumOfOddNumbers(5) (since 6 is even)
 * sumOfOddNumbers(5) = 5 + sumOfOddNumbers(4) (since 5 is odd)
 * sumOfOddNumbers(4) = 0 + sumOfOddNumbers(3) (since 4 is even)
 * sumOfOddNumbers(3) = 3 + sumOfOddNumbers(2) (since 3 is odd)
 * sumOfOddNumbers(2) = 0 + sumOfOddNumbers(1) (since 2 is even)
 * sumOfOddNumbers(1) = 1 + sumOfOddNumbers(0) (since 1 is odd)
 * sumOfOddNumbers(0) = 0 (base case)
 * Final result: 9 + 7 + 5 + 3 + 1 = 25
 * Output: 25
 */

console.log(sumOfOddNumbers(arr.length - 1)); // Output: 25 (1 + 3 + 5 + 7 + 9)

// using for loop
function sumOfOddNumbersForLoop() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      // check if the number is odd
      sum = sum + arr[i]; // Add the odd number to the sum
    }
  }
  return sum; // Return the total sum of odd numbers
}
