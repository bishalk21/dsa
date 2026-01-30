// Reverse Integer
// https://leetcode.com/problems/reverse-integer/
// Given a signed 32-bit integer x,
// return x with its digits reversed.
// If reversing x causes the value to go outside
// the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Algorithm
// 1. Initialize a variable to store the reversed number.
// 2. Use a loop to extract the last digit of the number and append it to
//    the reversed number.
// 3. Remove the last digit from the original number.
// 4. Check for overflow conditions.

// modulus operator (%) to get the last digit
// floor division operator (/) to remove the last digit

function reverseInteger(num) {
  let reversed = 0;
  let original = num; // Store the original number
  num = Math.abs(num); // Handle negative numbers

  while (num > 0) {
    let remainder = num % 10; // last digit
    reversed = reversed * 10 + remainder; // Append last digit to reversed
    num = Math.floor(num / 10); // Remove last digit
  }

  // Check for overflow conditions
  let limit = Math.pow(2, 31); // 2^31 || 2 ** 31
  if (reversed < -limit || reversed > limit - 1) {
    return 0; // Return 0 if reversed is out of bounds
  }

  // ternary operator
  return original < 0 ? (reversed = -reversed) : reversed; // If original was negative, make reversed negative

  //   if (original < 0) {
  //     return -reversed; // If original was negative, return negative reversed
  //   } else {
  //     return reversed; // Return the reversed number
  //   }
}
