/** Prime Number of Set Bits in Binary Representation
 * Given two integers left and right,
 * return the count of numbers in the inclusive range [left, right]
 * having a prime number of set bits in their binary representation.
 * Recall that the number of set bits an integer has is the number of 1's present
 * when written in binary.
 * For example, 21 written in binary is 10101, which has 3 set bits.
 *
 * Example 1:
 * Input: left = 6, right = 10
 * Output: 4
 * Explanation:
 * 6  -> 110 (2 set bits, 2 is prime)
 * 7  -> 111 (3 set bits, 3 is prime)
 * 8  -> 1000 (1 set bit, 1 is not prime)
 * 9  -> 1001 (2 set bits, 2 is prime)
 * 10 -> 1010 (2 set bits, 2 is prime)
 * Example 2:
 * Input: left = 10, right = 15
 * Output: 5
 * Explanation:
 * 10 -> 1010 (2 set bits, 2 is prime)
 * 11 -> 1011 (3 set bits, 3 is prime)
 * 12 -> 1100 (2 set bits, 2 is prime)
 * 13 -> 1101 (3 set bits, 3 is prime)
 * 14 -> 1110 (3 set bits, 3 is prime)
 * 15 -> 1111 (4 set bits, 4 is not prime)
 *
 * Constraints:
 * 1 <= left <= right <= 10^6
 * 0 <= right - left <= 10^4
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

/** Algorithm - Count Set Bits and Check for Primes
 * 1. Define a helper function isPrime to check if a number is prime.
 * 2. Iterate through the numbers from left to right.
 * 3. For each number, convert it to binary and count the number of set bits (1's).
 * 4. Use the isPrime function to check if the count of set bits is prime.
 * 5. If it is prime, increment the count.
 * 6. Return the final count after processing all numbers in the range.
 *
 * Time Complexity: O(n * sqrt(m)) where n is the number of integers in the range and m is the maximum number of set bits (which is at most 20 for numbers up to 10^6).
 * Space Complexity: O(1) for the count variable and the helper function.
 *
 * left = 6, right = 10
 * 6 -> '110' -> 2 set bits -> 2 is prime -> count = 1
 * 7 -> '111' -> 3 set bits -> 3 is prime -> count = 2
 * 8 -> '1000' -> 1 set bit -> 1 is not prime -> count = 2
 * 9 -> '1001' -> 2 set bits -> 2 is prime -> count = 3
 * 10 -> '1010' -> 2 set bits -> 2 is prime -> count = 4
 * return 4
 */

function countPrimeSetBits(left, right) {
  const isPrime = (n) => {
    if (n <= 1) return false;
    // 6 -> '110' -> 2 set bits -> isPrime(2) -> n % 2 === 0 -> false -> return true
    for (let i = 2; i <= Math.sqrt(n); i++) {
      console.log(`${n} % ${i} = ${n % i}`);
      console.log(`${n} % ${i} === 0 -> ${n % i === 0}`);
      if (n % i === 0) return false;
    }
    console.log(`${n} is prime`);
    return true;
  };
  let count = 0;
  for (let i = left; i <= right; i++) {
    const setBits = i.toString(2).split("0").join("").length; // 6 -> '110' -> ['1', '1'] -> 2
    console.log(
      `${i} -> ${i.toString(2)} -> ${setBits} set bits -> isPrime(${setBits}) -> ${isPrime(setBits)}`,
    );
    if (isPrime(setBits)) count++;
  }
  return count;
}

// Test cases
console.log(countPrimeSetBits(6, 10));
