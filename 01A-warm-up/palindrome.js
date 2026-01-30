// Palindrome
// https://leetcode.com/problems/palindrome-number/
// A palindrome is
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

function isIntegerPalindrome(x) {
  // x = 121
  if (x < 0) return false;
  let reversed = 0;
  let original = x; // original = 121

  while (x > 0) {
    let remainder = x % 10; // last digit // remainder = 1
    reversed = reversed * 10 + remainder; // reversed = 0 * 10 + 1 = 1
    x = Math.floor(x / 10); // remove last digit // x = 12
  }
  return reversed === original; // Check if reversed is equal to original // 1 === 121
}

/** 1 -> 121 > 0 
      -> remainder = 1
      -> reversed = 0 * 10 + 1 = 1
      -> x = Math.floor(121 / 10) = 12
  
    2 -> 12 > 0
      -> remainder = 2
      -> reversed = 1 * 10 + 2 = 12
      -> x = Math.floor(12 / 10) = 1

    3 -> 1 > 0
      -> remainder = 1
      -> reversed = 12 * 10 + 1 = 121
      -> x = Math.floor(1 / 10) = 0

    4 -> 0 > 0
      -> stops execution of block

    5. checks if reversed is equal to original
      -> reversed = 121
      -> original = 121
      -> reversed === original
      -> true
*/

/** C# solution
 * Algorithm:
 * 1. Check if the input integer is negative. If it is, return false since negative numbers cannot be palindromes.
 * 2. Initialize a variable to store the reversed number.
 * 3. Use a while loop to reverse the digits of the integer.
 * 4. In each iteration, extract the last digit of the integer using the modulus operator.
 * 5. Append the extracted digit to the reversed number.
 * 6. Remove the last digit from the original integer by performing integer division.
 * 7. After the loop, compare the reversed number with the original integer.
 * 8. Return true if they are equal, indicating that the integer is a palindrome;
 */

/** using System means we are using the System namespace
 * in C#, namespaces are used to organize code and prevent naming conflicts
 */
// using System;

/** define a class named Solution
 * in C#, all code must be contained within a class
 * public means the class is accessible from other classes
 * class name is Solution
 */
// public class Solution {
/**  define a method named IsPalindrome
 * public means the method is accessible from other classes
 * bool means the method returns a boolean value (true or false)
 * IsPalindrome is the name of the method
 * int x means the method takes an integer parameter named x
 */
//   public bool IsPalindrome(int x) {
//     if (x < 0) return false;
//     int reversed = 0;
//     int original = x;
//     while (x > 0) {
//       int remainder = x % 10;
//       reversed = reversed * 10 + remainder;
//       x /= 10;
//     }
//     return reversed == original;
//   }
// }
