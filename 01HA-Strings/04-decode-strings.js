/** Decode String
 * https://leetcode.com/problems/decode-string/
 *
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string],
 * where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid;
 * there are no extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits
 * and that digits are only for those repeat numbers, k.
 * For example, there will not be input like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never exceed 10^5.
 *
 * Example 1:
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 *
 * Example 2:
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 *
 * Example 3:
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 * Constraints:
 * - 1 <= s.length <= 30
 * - s consists of lowercase English letters, digits, and square brackets '[]'.
 * - s is guaranteed to be a valid input.
 * - All the integers in s are in the range [1, 300].
 *
 * Algorithm: Recursion with a pointer
 * 1. Use a pointer to traverse the input string and a helper function to decode the string recursively.
 * 2. Initialize an empty result string and a number variable to keep track of the current repeat count.
 * 3. Iterate through the characters of the string:
 *    - If the character is a digit, update the number variable accordingly.
 *    - If the character is an opening bracket '[', call the helper function recursively to decode the substring inside the brackets and append the decoded string repeated 'number' times to the result.
 *    - If the character is a closing bracket ']', return the current result string to the previous level of recursion.
 *    - If the character is a letter, append it to the result string.
 * 4. Return the final decoded string after processing all characters.
 * Time Complexity: O(n * k), 
 *                  where n is the length of the input string and 
 *                  k is the maximum repeat count, 
 *                  because in the worst case we may need to repeat a substring k times.
 * Space Complexity: O(n), due to the recursive call stack and the space used for the result string.
 * Note: The recursive approach is straightforward and easy to understand, but it may not be the most efficient solution for large inputs due to potential stack overflow from deep recursion. An iterative approach using a stack can also be used to solve this problem with O(n) time complexity and O(n) space complexity.
Initial:
   i = 0

Call decode():
   res = ""
   num = 0

i = 0 → char = '3'
   num = 3
   i = 1

i = 1 → char = '['
   i = 2
   Call decode():

      res = ""
      num = 0

      i = 2 → char = 'a'
         res = "a"
         i = 3

      i = 3 → char = '2'
         num = 2
         i = 4

      i = 4 → char = '['
         i = 5
         Call decode():

            res = ""
            num = 0

            i = 5 → char = 'c'
               res = "c"
               i = 6

            i = 6 → char = ']'
               i = 7
               return "c"

         Back to previous call:
         str = "c"
         res = "a" + "c".repeat(2) = "acc"
         num = 0

      i = 7 → char = ']'
         i = 8
         return "acc"

   Back to main call:
   str = "acc"
   res = "" + "acc".repeat(3) = "accaccacc"
   num = 0

i = 8 → end of string

Final:
   return "accaccacc"
 */

function decodeString(s) {
  let i = 0;
  function decode() {
    let result = "";
    let num = 0;
    while (i < s.length) {
      let char = s[i];
      if (!isNaN(char)) {
        num = num * 10 + parseInt(char);
        i++;
      } else if (char === "[") {
        i++; // Skip the opening bracket
        let decodedString = decode(); // Recursively decode the substring
        result += decodedString.repeat(num); // Append the decoded substring repeated num times
        num = 0; // Reset the number for the next potential repeat
      } else if (char === "]") {
        i++; // Skip the closing bracket
        return result; // Return the decoded string for the current level of recursion
      } else {
        result += char; // Append the current character to the result
        i++;
      }
    }
    return result;
  }
  return decode();
}
