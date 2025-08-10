/**
 * Sum of all odd numbers in an array
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfOddNumbers(n) {
  let isOdd = (num) => num % 2 !== 0;
  // Base condition: if the array is empty, return 0
  if (n < 0) {
    return 0;
  }

  // Recursive case: if the last element is odd, add it to the sum of the rest of the array
  return (isOdd(arr[n]) ? arr[n] : 0) + sumOfOddNumbers(n - 1);
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
}
