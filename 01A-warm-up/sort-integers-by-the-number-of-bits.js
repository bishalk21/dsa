/** Sort Integers by the Number of 1 Bits
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 *
 * Given an integer array nums,
 * return the array sorted in ascending order
 * by the number of 1 bits in their binary representation.
 *
 * Example 1:
 * Input: nums = [0,1,2,3,4,5,6,7,8]
 * Output: [0,1,2,4,8,3,5,6,7]
 * Explanation: [0] has 0 bits. [1,2,4,8] have 1 bit. [3,5,6] have 2 bits. [7] has 3 bits.
 *
 * Example 2:
 * Input: nums = [1024,512,256,128,64,32,16,8,4,2,1]
 * Output: [1,2,4,8,16,32,64,128,256,512,1024]
 * Explanation: All integers have 1 bit in their binary representation.
 *
 * Constraints:
 * - 1 <= nums.length <= 500
 * - 0 <= nums[i] <= 10^6
 *
 * @param {number[]} nums
 * @return {number[]}
 */

/** Brute Force Approach
 * - For each integer in the input array,
 *   we calculate the number of 1 bits in its binary representation.
 *   We can do this by converting the integer to binary and
 *   counting the number of '1's, or by using bit manipulation.
 * - After we have the count of 1 bits for each integer,
 *   we can sort the array based on these counts.
 * - If two integers have the same number of 1 bits,
 *   we can sort them by their numerical value.
 * - Finally, we return the sorted array.
 *
 * - Time Complexity: O(n log n) - due to the sorting step, where n is the length of the input array.
 * - Space Complexity: O(n) - for storing the counts of 1 bits and the sorted array.
 */

function sortByBits(nums) {
  // count the number of 1 bits for each integer
  let countBits = (num) => {
    let count = 0;
    while (num > 0) {
      //   count += num & 1; // increment count if the least significant bit is 1
      //   num >>= 1; // right shift to check the next bit
      num = num & (num - 1); // this operation removes the least significant 1 bit from num
      count++; // increment count for each 1 bit removed
    }
    return count;
  };

  /**
   * nums = [1,2]
   * countBits(1) ---> count = count + num & 1 = 0 + 1 & 1 = 1,
   *                   num = num >> 1 = 1 >> 1 = 0, loop ends, return count = 1
   * countBits(2) ---> count = count + num & 1 = 0 + 2(10 in binary) & 1 = 0,
   *                   num = num >> 1 = 2(10) >> 1 = 1, loop continues
   *                   count = count + num & 1 = 0 + 1 & 1 = 1,
   *                   num = num >> 1 = 1 >> 1 = 0, loop ends, return count = 1
   *
   *
   * nums = [1,2,3,4,5,6,7,8]
   * countBits(1) ---> num = 1 & (1 - 1) = 1 & 0 = 0, count = 1
   * countBits(2) ---> num = 2 & (2 - 1) = 2(10) & 1 = 0, count = 1
   * countBits(3) ---> num = 3 & (3 - 1) = 3(11) & 2(10) = 2(10), count = 1
   *                   num = 2 & (2 - 1) = 2(10) & 1 = 0, count = 2
   *
   * countBits(4) ---> num = 4 & (4 - 1) = 4(100) & 3(011) = 0, count = 1
   * countBits(5) ---> num = 5 & (5 - 1) = 5(101) & 4(100) = 4(100), count = 1
   *                   num = 4 & (4 - 1) = 4(100) & 3(011) = 0, count = 2
   *
   * countBits(6) ---> num = 6 & (6 - 1) = 6(110) & 5(101) = 4(100), count = 1
   *                   num = 4 & (4 - 1) = 4(100) & 3(011) = 0, count = 2
   *
   * countBits(7) ---> num = 7 & (7 - 1) = 7(111) & 6(110) = 6(110), count = 1
   *                   num = 6 & (6 - 1) = 6(110) & 5(101) = 4(100), count = 2
   *                   num = 4 & (4 - 1) = 4(100) & 3(011) = 0, count = 3
   *
   * countBits(8) ---> num = 8 & (8 - 1) = 8(1000) & 7(0111) = 0, count = 1
   */

  // sort the array based on the count of 1 bits and then by numerical values
  return nums.sort((a, b) => {
    let countA = countBits(a);
    let countB = countBits(b);
    if (countA === countB) {
      return a - b; // if same number of 1 bits, sort by numerical value
    }
    return countA - countB; // otherwise, sort by number of 1 bits
  });
  /**
   * nums = [1,2]
   * countBits(1) = 1, countBits(2) = 1
   * Since both have the same number of 1 bits,
   * we sort by numerical value: 1 - 2 = -1, so 1 comes before 2.
   *
   * nums = [3,4,5,6,7,8]
   * countBits(3) = 2, countBits(4) = 1, countBits(5) = 2,
   * countBits(6) = 2, countBits(7) = 3, countBits(8) = 1
   * Sorting by count of 1 bits gives us: [4,8,3,5,6,7]
   * Then we sort by numerical value for those with the same count of 1 bits:
   * - For count of 1 bit: [4,8] (sorted as 4, 8)
   * - For count of 2 bits: [3,5,6] (sorted as 3, 5, 6)
   * - For count of 3 bits: [7] (only one element)
   * Final sorted array: [4,8,3,5,6,7]
   */
}

/** Using Built-in Functions
 * - We can also use built-in functions to count the number of 1 bits in the binary representation of each integer.
 * - In JavaScript, we can convert the integer to a binary string using num.toString(2) and then count the occurrences of '1'.
 * - This approach is more concise but may be less efficient than using bit manipulation, especially for larger integers.
 * - Time Complexity: O(n log m) - where n is the length of the input array and m is the maximum integer in the array (due to the conversion to binary string).
 * - Space Complexity: O(n) - for storing the counts of 1 bits and the sorted array.
 */
function sortByBits(nums) {
  // count the number of 1 bits for each integer using built-in functions
  let countBits = (num) => {
    return num.toString(2).split("0").join("").length; // convert to binary string, remove '0's, and count '1's
  };
  /**
   * nums = [1,2]
   * countBits(1) = '1'.split('0').join('').length = 1
   * countBits(2) = '10'.split('0').join('').length = 1
   *
   * nums = [3,4,5,6,7,8]
   * countBits(3) = '11'.split('0').join('').length = 2
   * countBits(4) = '100'.split('0').join('').length = 1
   * countBits(5) = '101'.split('0').join('').length = 2
   * countBits(6) = '110'.split('0').join('').length = 2
   * countBits(7) = '111'.split('0').join('').length = 3
   * countBits(8) = '1000'.split('0').join('').length = 1
   */

  // sort the array based on the count of 1 bits and then by numerical values
  return nums.sort((a, b) => {
    let countA = countBits(a);
    let countB = countBits(b);
    if (countA === countB) {
      return a - b; // if same number of 1 bits, sort by numerical value
    }
    return countA - countB; // otherwise, sort by number of 1 bits
  });
}
