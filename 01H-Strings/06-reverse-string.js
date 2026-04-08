/** Reverses a string
 * Write a function that reverses a string.
 * The input string is given as an array of characters char[].
 * Do not allocate extra space for another array,
 * you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Example 2:
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s[i] is a printable ascii character.
 *
 * In JavaScript, strings are immutable,
 * so we need to convert the string to an array of characters,
 * perform the reversal, and then join the array back into a string.
 *
 * Algorithm:
 * 1. Use two pointers, one starting at the beginning of the array and the other at the end.
 * 2. Swap the characters at the left and right pointers.
 * 3. Move the left pointer towards the right and the right pointer towards the left.
 * 4. Continue this process until the left pointer is no longer less than the right pointer.
 * 5. Return the modified array of characters.
 * 6. Time Complexity: O(n), where n is the length of the string.
 * 7. Space Complexity: O(1) for the in-place reversal.
 */

// using built-in reverse method
function reverseString(s) {
  s.reverse();
  return s;
}

// using two pointers approach
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // Swap characters at left and right pointers
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    // Move the pointers towards the center
    left++;
    right--;
  }
  return s;
}
