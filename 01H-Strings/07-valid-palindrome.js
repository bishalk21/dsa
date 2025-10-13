/** Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 * removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * logic:
 * - filter out non-alphanumeric characters and convert to lowercase
 * - reverse the filtered string
 * - compare the filtered string with the reversed string
 * - if they are the same, return true, else return false
 * - time complexity: O(n)
 * - space complexity: O(n)
 *
 * Algorithm: two pointers - no extra space
 * 1. Convert the string to lowercase.
 * 2. Initialize two pointers, left and right, at the start and end of the string.
 * 3. Move the left pointer to the right until it points to an alphanumeric character.
 * 4. Move the right pointer to the left until it points to an alphanumeric character.
 * 5. Compare the characters at the left and right pointers.
 * 6. If they are the same, move both pointers towards the center and repeat steps 3-5.
 * 7. If they are not the same, return false.
 * 8. If the left pointer is greater than or equal to the right pointer, return true.
 * 9. Time Complexity: O(n), where n is the length of the string.
 * 10. Space Complexity: O(1) since we are not using any extra space.
 *
 * Algorithm: using built-in functions - extra space
 * 1. Convert the string to lowercase.
 * 2. Filter out non-alphanumeric characters.
 * 3. Reverse the filtered string.
 * 4. Compare the filtered string with the reversed string.
 * 5. Return true if they are the same, else return false.
 * 6. Time Complexity: O(n), where n is the length of the string.
 * 7. Space Complexity: O(n) for the filtered string and reversed string.
 * Also: can add the characters to the reversed string while filtering
 */

function isPalindrome(s) {
  // lowercase the string
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  // two pointers check if the length is a palindromes
  while (left < right) {
    // if left is not alphanumeric, move left pointer to the right
    if (!s[left].match(/[a-z0-9]/i)) {
      ++left;
    }
    // if right is not alphanumeric, move right pointer to the left
    else if (!s[right].match(/[a-z0-9]/i)) {
      --right;
    }
    // if both are alphanumeric, check if they are the same
    else if (s[left] === s[right]) {
      ++left;
      --right;
    }
    // if they are not the same, return false
    else if (s[left] !== s[right]) {
      return false;
    }
  }
  return true;
}

function isValidPalindrome(s) {
  // filter out non-alphanumeric characters and convert to lowercase
  s = s.toLowerCase();
  let filteredStr = "";
  // using regex to check if a character is alphanumeric
  // /[a-z0-9]/i
  // i - case insensitive
  // g - global
  // m - multiline

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      // found the first alphanumeric character from the start
      filteredStr = filteredStr + s[i];
    }
  }
  let reversedStr = filteredStr.split("").reverse().join("");
  return filteredStr === reversedStr;
}

function isPalindromeValid(s) {
  // filter out non-alphanumeric characters and convert to lowercase
  s = s.toLowerCase();
  let filteredStr = "";
  let reversedStr = "";

  // without using regex, using charCodeAt to check if a character is alphanumeric
  // a-z => 97-122
  // 0-9 => 48-57

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) ||
      (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57)
    ) {
      // if (s[i].match(/[a-z0-9]/i)) {
      // found the first alphanumeric character from the start
      filteredStr = filteredStr + s[i];
      // found the first alphanumeric character from the end
      reversedStr = s[i] + reversedStr;
    }
  }
  return filteredStr === reversedStr;
}
