using System;
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

// function reverseInteger(num) {
//   let reversed = 0;
//   let original = num; // Store the original number
//   num = Math.abs(num); // Handle negative numbers

//   while (num > 0) {
//     let remainder = num % 10; // last digit
//     reversed = reversed * 10 + remainder; // Append last digit to reversed
//     num = Math.floor(num / 10); // Remove last digit
//   }

//   // Check for overflow conditions
//   let limit = Math.pow(2, 31); // 2^31 || 2 ** 31
//   if (reversed < -limit || reversed > limit - 1) {
//     return 0; // Return 0 if reversed is out of bounds
//   }

//   // ternary operator
//   return original < 0 ? (reversed = -reversed) : reversed; // If original was negative, make reversed negative

//   //   if (original < 0) {
//   //     return -reversed; // If original was negative, return negative reversed
//   //   } else {
//   //     return reversed; // Return the reversed number
//   //   }
// }

public class Solution
{
    public int Reverse(int x)
    {
        int reversed = 0;

        while (x != 0)
        {
            int remainder = x % 10;
            x /= 10;

            // Check for overflow before multiplying by 10 and adding digit
            // c# has int.MaxValue and int.MinValue constants 
            // constants are immutable values which are known at compile time and 
            // do not change for the life of the program.
            // they are defined by the system and represent the maximum and minimum values of the int data type.

            // INT_MAX = 2147483647, INT_MIN = -2147483648
            // If reversed > INT_MAX/10, then reversed*10 will overflow
            // If reversed == INT_MAX/10, then reversed*10+remainder will overflow if remainder > 7
            // why 7? because last digit of INT_MAX is 7 (2147483647) when reversed is positive
            // Similarly, for INT_MIN, last digit is 8 (2147483648) when reversed is negative
            // Similar logic for negative numbers
            if (reversed > int.MaxValue / 10 || (reversed == int.MaxValue / 10 && remainder > 7))
            {
                return 0;
            }
            if (reversed < int.MinValue / 10 || (reversed == int.MinValue / 10 && remainder < -8))
            {
                return 0;
            }

            reversed = reversed * 10 + remainder;
        }

        return reversed;
    }
}

/** c++ solution
// iostream is a header file that provides functionalities for input and output operations in C++.
// climits is a header file that defines constants for the limits of integral types.

#include <iostream> // for input-output operations
#include <climits>  // for INT_MAX and INT_MIN

class Solution {
public:
    int reverse(int x) {
        int reversed = 0;
        while (x != 0) {
            int remainder = x % 10;
            x /= 10;
    
            // Check for overflow
            // INT_MAX = 2147483647, INT_MIN = -2147483648
            // C++ has INT_MAX and INT_MIN constants defined in <climits>

            // If reversed > INT_MAX/10, then reversed*10 will overflow
            // If reversed == INT_MAX/10, then reversed*10+remainder will overflow if remainder > 7
            // why 7? because last digit of INT_MAX is 7 (2147483647) when reversed is positive
            // Similarly, for INT_MIN, last digit is 8 (2147483648) when reversed is negative
            // Similar logic for negative numbers
            if (reversed > INT_MAX / 10 || (reversed == INT_MAX / 10 && remainder > 7)) {
                return 0;
            }
            if (reversed < INT_MIN / 10 || (reversed == INT_MIN / 10 && remainder < -8)) {
                return 0;
            }
    
            reversed = reversed * 10 + remainder;
        }
        return reversed;
    }
    
*/