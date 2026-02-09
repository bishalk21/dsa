/** Radix Sort - LSD (Least Significant Digit) for Integers by Number of 1 Bits
 * - non-comparative integer sorting algorithm that sorts numbers by processing individual digits
 * - LSD (Least Significant Digit) approach processes digits from the least significant to the most significant
 * - to sort integers by the number of 1 bits, we can treat the count of 1 bits as the key for sorting
 * - we can use counting sort as a subroutine to sort the integers based on the count of 1 bits
 *
 *
 * Sort Integers by The Number of 1 Bits
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 *
 * You are given an integer array arr.
 * Sort the integers in the array in ascending order by the number of 1's in their binary representation
 * and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
 * Return the sorted array.
 *
 * Example 1:
 * Input: arr = [0,1,2,3,4,5,6,7,8]
 * Output: [0,1,2,4,8,3,5,6,7]
 * Explanation: [0] is the only integer with 0 bits.
 *              [1,2,4,8] all have 1 bit.
 *              [3,5,6] have 2 bits.
 *              [7] has 3 bits.
 *              The sorted array by bits is [0,1,2,4,8,3,5,6,7]
 *
 * Example 2:
 * Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
 * Output: [1,2,4,8,16,32,64,128,256,512,1024]
 * Explanation: All integers have 1 bit in the binary representation,
 *              you should just sort them in ascending order.
 *
 * Constraints:
 * 1 <= arr.length <= 500
 * 0 <= arr[i] <= 10^4
 *
 * @param {number[]} arr
 * @return {number[]}
 */

/** Algorithm: Radix Sort - LSD (Least Significant Digit) for Integers by Number of 1 Bits
 * Time Complexity: O(n * k)
 *                  where n is the number of elements in the input array and
 *                  k is the maximum number of bits needed to represent the largest number in the array.
 *                  In this case, since we are sorting by the number of 1 bits, k can be at most 14 (since 10^4 < 2^14).
 *                  Therefore, the time complexity can be considered O(n) for this specific problem.
 * Space Complexity: O(n + k) - requires additional space for the output array and the count array used in counting sort.
 *                   O(n) when k is O(1) (which is the case here since k is at most 14).
 *
 * - first find the max value to find the maximum number of bits needed to represent the largest number in the array
 * The algorithm first counts the number of 1 bits for each integer in the input array and stores this count in a separate array.
 * Then, it uses counting sort as a subroutine to sort the integers based on the count of 1 bits.
 * Since counting sort is a stable sorting algorithm, it maintains the relative order of integers with the same number of 1 bits, ensuring that they are sorted in ascending order as required by the problem statement.
 * By applying counting sort based on the count of 1 bits, we can efficiently sort the integers in the input array according to the specified criteria.
 * This approach is efficient for this problem since the range of possible counts of 1 bits is small (at most 14), allowing us to achieve a linear time complexity with respect to the number of elements in the input array.
 * Overall, this algorithm effectively sorts the integers by the number of 1 bits while maintaining the required order for integers with the same count of 1 bits.
 * This method is particularly suitable for this problem due to the limited range of possible counts of 1 bits, making it an efficient solution for sorting the integers as specified.
 */

function radixSort(arr) {
  // find the maximum value in the input array to determine the number of bits needed
  let max = Math.max(...arr);
  // exp is the exponent for the current digit we are sorting by (in this case, the count of 1 bits)
  // max / exp > 0 ensures that we continue sorting until we have processed all bits of the largest number
  // exp *= 2 moves to the next bit (from least significant to most significant)
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSortByBits(arr, exp);
  }
  return arr;
}

function countingSortByBits(arr, exp) {
  let n = arr.length;
  // count array for counting the number of 1 bits (0 or 1)
  // let count = new Array(2).fill(0);

  // since the maximum number of 1 bits can be at most 14, we can use a count array of size 10 for simplicity
  let count = new Array(10).fill(0);
  for (let x of arr) {
    // get the digit at the current exponent (in this case, the count of 1 bits)
    // let digit = Math.floor(x / exp) % 10;

    // count the number of 1 bits in the binary representation of x
    let digit = Math.floor(x / exp) % 10; // 170 / 1 % 10 = 0 (since 170 has 2 bits, we will count the number of 1 bits in the next iteration when exp = 10)
    count[digit]++; // increment the count for the corresponding digit (number of 1 bits)
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  let sortedArr = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    let curr = arr[i];
    let digit = Math.floor(curr / exp) % 10;
    let pos = count[digit];
    sortedArr[pos - 1] = arr[i];
    count[digit]--;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = sortedArr[i];
  }
  return arr;
}

function sortByBits(arr) {
  // counts the number of 1 bits in the binary representation of a number
  // use Brian Kernighan's algorithm to count the number of 1 bits efficiently
  function countOnes(num) {
    let count = 0;
    // while num is not zero, keep removing the rightmost 1 bit and increment the count
    while (num) {
      // clear the rightmost 1 bit in num
      num = num & (num - 1);
      count++;
    }
    return count;
  }

  // sort array
  // first by the count of 1 bits, then by the integer value itself
  arr.sort((a, b) => {
    let countA = countOnes(a);
    let countB = countOnes(b);
    let bitCompare = countA - countB; // compare by the count of 1 bits
    if (bitCompare !== 0) {
      return bitCompare; // if the count of 1 bits is different, sort by that
    } else {
      return a - b; // if the count of 1 bits is the same, sort by the integer value
    }
  });
  return arr;
}
