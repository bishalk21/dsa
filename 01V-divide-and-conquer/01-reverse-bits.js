/** Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 *
 * Reverse bits of a given 32 bits unsigned integer.
 * 32 bits unsigned integer is a non-negative integer that can be represented
 * using 32 bits (4 bytes) in binary form.
 * Note that in some programming languages, there is no unsigned integer type,
 * and both signed and unsigned integers are represented using the same data type.
 * 32 bits is the standard size for integers in many programming languages, and
 * it can represent values from 0 to 2^32 - 1 (0 to 4294967295).
 * 1 = 00000000000000000000000000000001 in binary, and
 * 2 = 00000000000000000000000000000010 in binary, and
 * 3 = 00000000000000000000000000000011 in binary, and
 * 4 = 00000000000000000000000000000100 in binary, and
 * 5 = 00000000000000000000000000000101 in binary, and
 * 6 = 00000000000000000000000000000110 in binary, and
 * 7 = 00000000000000000000000000000111 in binary, and
 * 8 = 00000000000000000000000000001000 in binary, and
 * in general, n = 00000000000000000000000000000000 + (n-1) in binary, and
 * so 3 =
 * 4294967295 = 11111111111111111111111111111111 in binary.
 *
 * Example 1:
 * Input: n = 43261596
 * Output: 964176192
 * Explanation: Integer    |  Binary
 *              43261596   | 00000010100101000001111010011100
 *              964176192  | 00111001011110000010100101000000
 * Example 2:
 * Input: n = 2147483644
 * Output: 1073741822
 * Explanation: Integer    |  Binary
 *              2147483644 | 11111111111111111111111111111100
 *              1073741822 | 00111111111111111111111111111111
 *
 * Constraints:
 * - The input must be a binary string of length 32.
 * - 0 <= n <= 2^32 - 2
 * - n is even.
 *
 * Follow up: If this function is called many times, how would you optimize it?
 *
 * @param {number} n - a 32 bits unsigned integer
 * @return {number} - the unsigned integer result of reversing the bits of n
 */

/** Algorithm: Bit Manipulation
 * - We can reverse the bits of the given integer
 *   by iterating through each bit and constructing the reversed number.
 * - We will use bitwise operations to achieve this.
 *   (n >> i) & 1 will give us the i-th bit of n, and
 *   we can shift it to the correct position in the reversed number.
 *
 * Time Complexity: O(1) - since we are dealing with a fixed number of bits (32 bits), the time complexity is constant.
 * Space Complexity: O(1) - we are using a constant amount of space to store the reversed number.
 */

function reverseBits(n) {
  let reversed = 0;
  for (let i = 0; i < 32; i++) {
    let bit = n & 1; // Get the least significant bit of n
    reversed <<= 1; // Shift the reversed number to the left to make room for the new bit
    reversed |= bit; // Add the bit to the reversed number
    n >>= 1; // Shift n to the right to process the next bit
  }
  // Use unsigned right shift to ensure the result is treated as an unsigned integer
  return reversed >>> 0;
}

/**
 * n = 13
 * n in binary: 00000000000000000000000000001101
 * reversed = 0
 * i = 0, bit = 1, reversed = 1, n = 6 (00000000000000000000000000000110)
 * i = 1, bit = 0, reversed = 2, n = 3 (00000000000000000000000000000011)
 * i = 2, bit = 1, reversed = 5, n = 1 (00000000000000000000000000000001)
 * i = 3, bit = 1, reversed = 11, n = 0 (00000000000000000000000000000000)
 * i = 4 to 31, bit = 0, reversed = 11 << (i - 3) = 11 << (4 to 31) = 11 << (1 to 28) = 11 * 2^(1 to 28)
 * Final reversed = 11 * 2^28 = 2952790016 (10110000000000000000000000000000 in binary)
 */

/**
 * << is the left shift operator, which shifts the bits of a number to the left by a specified number of positions.
 * >> is the right shift operator, which shifts the bits of a number to the right by a specified number of positions.
 * >>> is the unsigned right shift operator, which shifts the bits of a number to the right and fills the leftmost bits with zeros.
 * | is the bitwise OR operator, which performs a logical OR operation on each pair of corresponding bits of two numbers.
 * & is the bitwise AND operator, which performs a logical AND operation on each pair of corresponding bits of two numbers.
 */

/** Divide and Conquer
 * - We can also reverse the bits by using a divide and conquer approach.
 * - We can divide the 32 bits into two halves, reverse each half, and then combine them.
 * - This approach is more efficient if we need to reverse bits multiple times, as we can precompute the reversed values for smaller chunks of bits.
 *
 * Time Complexity: O(1) - since we are dealing with a fixed number of bits (32 bits), the time complexity is constant.
 * Space Complexity: O(1) - we are using a constant amount of space to store the reversed number.
 */
function reverseBitsDivideAndConquer(n) {
  // Precompute the reversed values for 8-bit chunks
  const reverseByte = new Array(256);
  for (let i = 0; i < 256; i++) {
    let rev = 0;
    for (let j = 0; j < 8; j++) {
      rev <<= 1;
      rev |= (i >> j) & 1;
    }
    reverseByte[i] = rev;
  }
  let reversed = 0;
  for (let i = 0; i < 4; i++) {
    reversed <<= 8;
    reversed |= reverseByte[n & 255];
    n >>= 8;
  }
  return reversed >>> 0;
}
