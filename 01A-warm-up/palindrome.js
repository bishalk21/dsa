// Palindrome
// a word, phrase, number, or other sequence of characters
// that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// given an integer, return true if it is a palindrome, false otherwise
/**
 *
 * |121| = |121| => true
 * |123| != |321| => false
 * |-121| = |121-| => false
 *
 */

// hence, num == reverse(num)

// Algorithm
// 1. how to reverse a number?
// find the last digit and remove it from the number and add it to the reversed number
// to find the last digit in a number, use the modulus operator (%) - n % 10
// to remove the last digit from a number, use the floor division operator (/) - Math.floor(n / 10)

/**
 * reversed = 0
 * | num | remainder |  reversed | reversed (reversed = reversed * 10 + remainder) |
 * | 123 | 3         | 0         | 3 (reversed = 0 * 10 + 3)               |
 * | 12  | 2         | 3         | 32 (reversed = 3 * 10 + 2)              |
 * | 1   | 1         | 32        | 321 (reversed = 32 * 10 + 1)            |
 */

function isPalindrome(num) {
  let original = num; // Store the original number
  let reversed = 0;

  while (num > 0) {
    let remainder = num % 10; // last digit
    reversed = reversed * 10 + remainder;
    num = Math.floor(num / 10); // remove last digit
  }
  //   if (reversed === original) {
  //     return true;
  //   }
  //   return false;

  return reversed === original; // Return true if reversed is equal to original
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123)); // Output: false
console.log(isPalindrome(-121)); // Output: false
