/** Capitalize Words
 * https://namastedev.com/practice/capitalize-words
 *
 * Write a function that takes a sentence as input and
 * returns a new sentence where the first letter of each word is capitalized, and
 * the rest of the letters are in lowercase.
 *
 * Example 1:
 * Input: "hello world"
 * Output: "Hello World"
 *
 * Example 2:
 * Input: "   multiple   spaces here  "
 * Output: "Multiple Spaces Here"
 *
 * - input may have multiple spaces between words
 * - input may have leading or trailing spaces
 * - input may be an empty string
 * - input may contain uppercase and lowercase letters, and mixed-case characters
 * - Words can contain letters only; punctuation is not considered in this problem.
 * - leading/trailing/multiple spaces should be trimmed in the output
 *
 * Algorithm: Using Built-in functions
 * - Trim the string to remove leading and trailing spaces
 * - Split the string by one or more spaces to get an array of words and filter out empty strings
 * - For each word in the array:
 *   - Capitalize the first letter and make the rest of the letters lowercase
 * - Join the array of words back into a single string with a single space between each word
 * - Return the resulting string
 * - Time complexity: O(n)
 * - Space complexity: O(n) due to split and join operations
 *
 * Algorithm: Without using Built-in functions
 * - traverse the string character by character to handle multiple spaces
 * - skip leading/trailing/multiple spaces
 */

// Using Built-in functions
function capitalizeWords(sentence) {
  //   if (!sentence) return "";
  //   const words = sentence.trim().split(/\s+/); // /\s+/ - regex to match one or more spaces
  //   for (let i = 0; i < words.length; i++) {
  //     words[i] =
  //       words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  //   }
  //   return words.join(" ");

  return sentence
    .trim()
    .split(/\s+/) // split on one or more spaces
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Without using Built-in functions
function capitalizeWordsWithoutBuiltIn(sentence) {}
