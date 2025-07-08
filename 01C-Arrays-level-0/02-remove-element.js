/**
 * Remove element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The relative order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 */

// Algorithm
// 1. Use a pointer to track the position of the last element that is not equal to val.
// 2. Iterate through the array, comparing each element with val.
// 3. If the current element is not equal to val, increment the pointer and update the array.
// 4. Continue until the end of the array.

function removeElement(nums, val) {
  let x = 0; // Pointer for the last element that is not equal to val
  if (nums.length === 0) return 0; // Handle empty array case
  if (nums.length === 1) return nums[0] === val ? 0 : 1; // Handle single element case

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // shift element to left or position x
      nums[x] = nums[i]; // Update the array with the current element
      x++; // Increment the pointer for elements not equal to val
    }
  }
  return x; // Return the count of elements not equal to val
}

/**
 * * Time Complexity: O(n) - where n is the length of the array
 * * Space Complexity: O(1) - no extra space is used
 * * Input: [0, 1, 2, 2, 3, 0, 4, 2], val = 2

                  Initial state: 
                    x = 0 

                  i = 0 → nums[0] = 0 ≠ 2 → nums[0] = 0, x = 1
                  i = 1 → nums[1] = 1 ≠ 2 → nums[1] = 1, x = 2
                  i = 2 → nums[2] = 2 = 2 → skip
                  i = 3 → nums[3] = 2 = 2 → skip
                  i = 4 → nums[4] = 3 ≠ 2 → nums[2] = 3, x = 3
                  i = 5 → nums[5] = 0 ≠ 2 → nums[3] = 0, x = 4
                  i = 6 → nums[6] = 4 ≠ 2 → nums[4] = 4, x = 5
                  i = 7 → nums[7] = 2 = 2 → skip  
                      
Output: k = 5, nums = [0, 1, 3, 0, 4]
 */
