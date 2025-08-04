/**
 * Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * nums = [4, 0, 2, 1, 5]
 * output: 3
 *
 * Algorithm: Brute force Naive Approach:
 * - Sort the array, all numbers will be in order
 * - arr[i] = arr[i - 1] + 1, meaning  will check if the current number is equal to the previous number + 1
 * - if not, return the current number - 1
 * * time complexity: O(n log n) for sorting (not optimal)
 * * space complexity: O(1) (in-place)
 *
 * Algorithm: Sum Formula
 * - Use the formula for the sum of the first n natural numbers: sum = n * (n + 1) / 2
 * - Calculate the expected sum of numbers from 0 to n
 * - Calculate the actual sum of the numbers in the array
 * - The missing number is the difference between the expected sum and the actual sum
 * * time complexity: O(n)
 * * space complexity: O(1) (in-place)
 */

function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  let arraySum = 0;

  for (let i = 0; i < n; i++) {
    arraySum += nums[i]; // Calculate the sum of the array elements
  }
  return totalSum - arraySum; // The missing number is the difference
}
