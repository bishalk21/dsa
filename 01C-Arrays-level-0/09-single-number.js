/**
 * Single Number
 * Give a non-empty array of integeres nums,
 * every element appears twice except for one.
 * Find that single one.
 *
 * You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 *
 * nums: [2,2,1]
 * output: 1
 *
 * Algorithm: Brute Force
 * - loop through the array
 * - use a hash map to count occurrences of each number
 *    - hash table (or object) to store the count of each number
 * - find the key with a count of 1
 * * time complexity: O(n)
 * * space complexity: O(n) for the hash map (or object)
 *
 * Algorithm: Bit Manipulation (XOR)
 * - XOR all the numbers together
 * - since a ^ a = 0 and a ^ 0 = a, all pairs will cancel out
 * - the remaining number is the single one
 * * time complexity: O(n)
 * * space complexity: O(1) (in-place)
 */

function singleNumberUsingHash(nums) {
  const numCount = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numCount[nums[i]]) {
      numCount[nums[i]] = 1; // Initialize count for the number
    } else {
      numCount[nums[i]]++; // Increment count for the number
    }
  }

  // Find the number with count 1
  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]] === 1) {
      return nums[i]; // Return the single number
    }
  }
}

function singleNumberUsingXOR(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i]; // XOR all numbers together
  }
  return xor; // The result is the single number
}
