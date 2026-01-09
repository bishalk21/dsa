/** Palindrome Partitioning II [hard]
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * A palindrome string is a string that reads the same backward as forward.
 *
 * Example 1:
 * Input: s = "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
 *
 * Example 2:
 * Input: s = "a"
 * Output: 0
 * Explanation: The string is already a palindrome, so no cuts are needed.
 *
 * Example 3:
 * Input: s = "ab"
 * Output: 1
 * Explanation: The palindrome partitioning ["a","b"] could be produced using 1 cut.
 *
 * @param {string} s
 * @return {number}
 */
