/** Valid Palindrome II
 * https://leetcode.com/problems/valid-palindrome-ii/
 *
 * Given a string s, return true if the s can be palindrome
 * after deleting at most one character from it.
 *
 * Example 1:
 * Input: s = "aba"
 * Output: true
 *
 * Example 2:
 * Input: s = "abca"
 * Output: true
 *
 * Example 3:
 * Input: s = "abc"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of lowercase English letters.
 *
 * Logic/Algorithm pattern: two pointers
 * 1. Initialize two pointers, left and right, at the start and end of the string.
 * 2. Move the left pointer to the right and the right pointer to the left
 *    until they point to different characters.
 * 3. If the left pointer is greater than or equal to the right pointer,
 *    return true.
 * 4. If the characters at the left and right pointers are different,
 *    we have two options: either skip the character at the left pointer or
 *    skip the character at the right pointer.
 *    - To skip the character at the left pointer, move the left pointer to the right and check if the remaining substring is a palindrome.
 *    - To skip the character at the right pointer, move the right pointer to the left and check if the remaining substring is a palindrome.
 * 5. If either of the remaining substrings is a palindrome, return true.
 *    Otherwise, return false.
 * 6. Time Complexity: O(n), where n is the length of the string.
 * 7. Space Complexity: O(1) since we are not using any extra space.
 *
 * Note: We can also use a helper function to check if a substring is a palindrome.
 */

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      // skip the character at the left pointer and check if the remaining substring is a palindrome
      if (isPalindrome(s, left + 1, right)) {
        return true;
      } else if (isPalindrome(s, left, right - 1)) {
        // skip the character at the right pointer and check if the remaining substring is a palindrome
        return true;
      } else {
        return false;
      }

      //  let skipLeft = isPalindrome(s, left + 1, right)
      //     let skipRight = isPalindrome(s, left, right - 1)
      //     return skipLeft || skipRight
    }
    left++;
    right--;
  }
  return true;
}

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
