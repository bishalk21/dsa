/** Validate Palindrome
 * Write a function that determines whether a given string is a valid palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 * Ignore cases and all non-alphanumeric characters.
 *
 * Input: A single string str
 * Output: Returns true if str is a palindrome, false otherwise.
 *
 * Example:
 *   Input: "A man, a plan, a canal: Panama"
 *   Output: true
 *
 *   Input: "race a car"
 *   Output: false
 *
 * Algorithm:
 * - Initialize two pointers: left and right
 * - While left < right:
 *     - Skip non-alphanumeric characters by moving left and right pointers
 *     - Compare characters at left and right (case-insensitive)
 *     - If they don't match, return false
 * - If all characters match, return true
 *
 * Implementation:
 * - Use a regular expression to remove non-alphanumeric characters and convert to lowercase
 * - Check if the cleaned string is equal to its reverse
 */

let str = "race a car";

function ValidatePalindrome(str) {
  // remove all non-alphanumeric characters (punctuation, spaces) and convert to lowercase
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(str[left])) {
      // true && false ==> false
      left++;
    }
    while (left < right && !isAlphanumeric(str[right])) {
      right--;
    }
    if (left < right) {
      if (str[left].toLowerCase() !== str[right].toLowerCase()) {
        return false;
      }
    }
    left++;
    right--;
  }
  return true;
}

function isAlphanumeric(char) {
  const code = char.charCodeAt(0); // getting the ASCII code of the character
  //   console.log(code);
  // check if the char is a letter or a digit
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

console.log(!isAlphanumeric("A")); // true
console.log(isAlphanumeric("1")); // true
console.log(isAlphanumeric("@")); // false

function validatePalindromeUsingBuiltIn(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Check if the cleaned string is equal to its reverse
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
