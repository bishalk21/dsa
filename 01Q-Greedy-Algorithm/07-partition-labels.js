/** Partition Labels [Medium]
 * https://leetcode.com/problems/partition-labels/
 *
 * You are given a string s. We want to partition the string into as many parts as possible
 * so that each letter appears in at most one part.
 * For example, the string "ababcc" can be partitioned into ["abab", "cc"],
 * but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are not allowed.
 * Note that the partition is done so that after concatenating all the parts in order,
 * the resultant string should be s.
 * Return a list of integers representing the size of these parts.
 *
 * Example 1:
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation: The partition is "ababcbaca", "defegde", "hijhklij".
 *              This is a partition so that each letter appears in at most one part.
 *              A partition like "ababcbacadefegde", "hijhklij" is incorrect,
 *              because it splits s into less parts.
 * Example 2:
 * Input: s = "eccbbbbdec"
 * Output: [10]
 * Explanation: The partition is "eccbbbbdec".
 *              This is a partition so that each letter appears in at most one part.
 *              Since we cannot split it into more parts, the answer is [10].
 *
 * @param {string} s
 * @return {number[]}
 */

/** Greedy Approach - partitionLabels
 * Time Complexity: O(n), where n is the length of the string s
 * Space Complexity: O(1), since the size of the firstOccurrence and lastOccurrence arrays is fixed (26 for lowercase English letters)
 *
 * Time Complexity Explanation:
 * The algorithm iterates through the string s twice: once to populate the first and last occurrence arrays,
 * and once to determine the partitions. Each iteration takes O(n) time, leading to an overall time complexity of O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses two additional arrays of fixed size (26) to store the first and last occurrences of each character.
 * Therefore, the space complexity is O(1).
 */

function partitionLabels(s) {
  // array to store the result sizes of partitions
  let result = [];
  //  array to store first occurrence of each character
  let firstOccurrence = new Array(26).fill(-1);
  //  array to store last occurrence of each character
  let lastOccurrence = new Array(26).fill(-1);

  // Populate first and last occurrence arrays
  for (let i = 0; i < s.length; i++) {
    // Calculate index for character 'a' to 'z'
    // let charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);  // a, charIndex = 0
    let charIndex = s.charCodeAt(i) - 97; // 'a' ASCII is 97
    // Update first occurrence if not already set
    if (firstOccurrence[charIndex] < 0) {
      firstOccurrence[charIndex] = i;
    }
    // Update last occurrence to the current index
    lastOccurrence[charIndex] = i;
  }

  // partitions start and end indices
  let partitionStart = (partitionEnd = 0);

  // Iterate through the string to determine partitions
  for (let i = 0; i < s.length; i++) {
    let charIndex = s.charCodeAt(i) - 97; // 'a' ASCII is 97

    // If the current index exceeds the end of the current partition,
    if (partitionEnd < firstOccurrence[charIndex]) {
      // finalize the current partition
      result.push(partitionEnd - partitionStart + 1);
      partitionStart = partitionEnd = i;
    }

    // Update the end of the current partition
    partitionEnd = Math.max(partitionEnd, lastOccurrence[charIndex]);
  }

  // Add the last partition size
  if (partitionEnd - partitionStart + 1 > 0) {
    result.push(partitionEnd - partitionStart + 1);
  }
  return result;
}
