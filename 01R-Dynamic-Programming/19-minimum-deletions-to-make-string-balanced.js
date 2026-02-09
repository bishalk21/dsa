/** Minimum Deletions to Make String Balanced
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 *
 * You are given a string s consisting only of characters 'a' and 'b'.
 * You can delete any number of characters in s to make s balanced.
 * A string is balanced if there are no indices i < j such that s[i] = 'b' and s[j] = 'a'.
 * Return the minimum number of deletions needed to make s balanced.
 *
 * Example 1:
 * Input: s = "aababbab"
 * Output: 2
 * Explanation: You can either:
 *              - Delete the characters at indices 2 and 6 to get "aaabbbab", which is balanced.
 *              - Delete the characters at indices 3 and 6 to get "aabbbbab", which is balanced.
 *              Thus, the minimum number of deletions needed is 2.
 * Example 2:
 * Input: s = "bbaaaaabb"
 * Output: 2
 * Explanation: You can delete the characters at indices 0 and 1 to get "aaaaabb", which is balanced.
 *              Thus, the minimum number of deletions needed is 2.
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s[i] is either 'a' or 'b'.
 *
 * @param {string} s
 * @return {number}
 */

/** Algorithm: Dynamic Programming
 * Time Complexity: O(n) where n is the length of the input string s.
 * Space Complexity: O(1) since we are using only a constant amount of extra space to store the count of 'b' characters and the number of deletions.
 *
 * The algorithm iterates through the input string once,
 * counting the number of 'b' characters encountered so far and
 * calculating the minimum deletions needed to maintain a balanced string.
 * For each character in the string, if it is 'b', we increment the count of 'b' characters.
 * If it is 'a', we have two options:
 * - either delete this 'a' (which would increase the deletion count by 1) or
 * - keep it and delete all previously counted 'b' characters
 *   (which would set the deletion count to the number of 'b' characters  counted so far).
 * We take the minimum of these two options to ensure that
 * we are always maintaining the minimum number of deletions needed to keep the string balanced.
 * By the end of the iteration, the deletion count will represent the minimum number of deletions needed to make the string balanced.
 * This approach efficiently computes the result in a single pass through the string, resulting in O(n) time complexity and O(1) space complexity.
 * Overall, this algorithm effectively determines the minimum deletions required to balance the string by keeping track of the count of 'b' characters and making optimal decisions for each 'a' character encountered.
 */

function minimumDeletions(s) {
  let deletions = 0;
  let countB = 0;

  for (let char of s) {
    if (char === "b") {
      countB++;
    } else {
      deletions = Math.min(deletions + 1, countB);
    }
  }
  return deletions;
}
