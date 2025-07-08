/**
 * Remove duplicates from an array
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
 * such that each unique element appears only once. The relative order of the elements should be kept the same.
 * Return the number of unique elements in nums.
 * Do not allocate extra space for another array, you must do this by modifying the input array
 */

// Algorithm
// THERE WILL BE 2 POINTERS - ONE FOR THE UNIQUE ELEMENTS AND ONE TO SHIFT THE ELEMENTS

// 1 - Use a pointer to track the position of the last unique element.
// 2 - Iterate through the array, comparing each element with the last unique element.
// 3 - If the current element is different from the last unique element, increment the pointer and update the array.
// 4 - Continue until the end of the array.

let nums = [1, 1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(nums) {
  let x = 0; // Pointer for the last unique element
  if (nums.length === 0) return 0; // Handle empty array case
  if (nums.length === 1) return 1; // Handle single element case

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++; // Increment the pointer for unique elements x=x+1
      nums[x] = nums[i];
    }
  }
  return x + 1; // Return the count of unique elements
}

/**
 *
 * * Time Complexity: O(n) - where n is the length of the array
 * * Space Complexity: O(1) - no extra space is used
 *
 * Input: [1, 1, 2, 3, 3, 5]

                  Initial state: 
                    x = 0 

                  i = 0: nums[i] = 1, nums[x] = 1 → NOT greater → skip
                  i = 1: nums[i] = 1, nums[x] = 1 → NOT greater → skip
                  i = 2: nums[i] = 2, nums[x] = 1 → GREATER → x=1, nums[1] = 2
                  i = 3: nums[i] = 3, nums[x] = 2 → GREATER → x=2, nums[2] = 3
                  i = 4: nums[i] = 3, nums[x] = 3 → NOT greater → skip
                  i = 5: nums[i] = 5, nums[x] = 3 → GREATER → x=3, nums[3] = 5

                  Final array: [1, 2, 3, 5, 3, 5]
                  Unique count: x + 1 = 4
                      
Output: 4 (First 4 elements are unique: [1, 2, 3, 5])
 */
