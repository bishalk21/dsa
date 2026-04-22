/** Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/
 *
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters.
 * The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated
 * by a single space.
 * Note that s may contain leading or trailing spaces or
 * multiple spaces between two words.
 * The returned string should only have a single space separating the words.
 * Do not include any extra spaces.
 *
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 * Example 2:
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Example 3:
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 *
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s contains English letters (upper-case and lower-case), digits, and spaces ' '.
 * - There is at least one word in s.
 *
 * Follow up: If the string data type is mutable in your language,
 * can you solve it in-place with O(1) extra space?
 *
 * Algorithm (Using built-in methods):
 * 1. Trim the input string to remove leading and trailing spaces.
 * 2. Split the string into an array of words using space as a delimiter.
 * 3. Filter out any empty strings from the array (to handle multiple spaces).
 * 4. Reverse the array of words.
 * 5. Join the reversed array of words into a single string with a single space as a separator.
 * 6. Return the resulting string.
 * Time Complexity: O(n), where n is the length of the string (for splitting and joining).
 * Space Complexity: O(n), for storing the array of words.
 *
 * Algorithm:
 * 1. Trim the input string to remove leading and trailing spaces,
 *    and add a space at the end to handle the last word.
 * 2. Initialize an empty array to hold the words and an empty string to build the current word.
 * 3. Iterate through each character in the string:
 *    - If the character is not a space, append it to the current word.
 *    - If the character is a space and the current word is not empty,
 *      add the current word to the beginning of the words array and
 *      reset the current word.
 * 4. Join the words array into a single string with a single space as a separator.
 * 5. Return the resulting string.
 * Time Complexity: O(n), where n is the length of the string (for iterating through the characters).
 * Space Complexity: O(n), for storing the array of words.
 */

// Using built-in methods
function reverseWords(s) {
  return s
    .trim()
    .split(" ")
    .filter((word) => word)
    .reverse()
    .join(" ");
}

function reverseWords(s) {
  // return s.trim().split(/\s+/).reverse().join(" ")
  s = s.trim() + " "; // Add a space at the end to handle the last word
  let words = [];
  let word = "";
  for (let char of s) {
    if (char !== " ") {
      word += char; // Build the current word
    } else if (word.length) {
      //   words.push(word); // Add the completed word to the list
      words.unshift(word); // Add the completed word to the beginning of the list
      word = ""; // Reset the current word
    }
  }
  // words.reverse(); // Reverse the list of words
  return words.join(" "); // Join the words with a single space
}
