/**
 * Move Zeros
 * Given an integer array nums,
 * move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example:
 * nums = [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 *
 * Algorithm: Two Pointers
 * - use one pointer p1 to track the position of the next non-zero element
 * - use another pointer p2 to iterate through the array
 * - if nums[p2] is not zero, assign nums[p1] = nums[p2] and increment p1
 * - after the loop, fill the remaining elements from p1 to the end of the array
 *
 *  time complexity: O(n)
 * space complexity: O(1) (in-place)
 */

function moveZeroes(nums) {
  let x = 0; // Pointer for the position of the next non-zero element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i]; // Move non-zero element to the next position
      x++; // Increment the position for the next non-zero element
    }
  }
  // Fill the remaining elements with zeros
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums; // Return the modified array
}

// Example usage
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

/**
 * | i | nums[i] | x | nums[x] | Action                |
 * |---|---------|---|---------|-----------------------|
 * | 0 |    0    | 0 |    -    | Skip (zero found)     |
 * | 1 |    1    | 0 |    -    | nums[0] = 1, x++      |
 * | 2 |    0    | 1 |    1    | Skip (zero found)     |
 * | 3 |    3    | 1 |    1    | nums[1] = 3, x++      |
 * | 4 |   12    | 2 |    3    | nums[2] = 12, x++     |
 * | 5 |    -    | 3 |    12   | Fill remaining with 0s|
 * | 6 |    -    | 4 |    0    | Fill remaining with 0s|
 * | 7 |    -    | 5 |    0    | Fill remaining with 0s|
 */
