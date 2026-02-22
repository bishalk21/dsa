/** Binary Gap
 * https://leetcode.com/problems/binary-gap/
 *
 * Given a positive integer n,
 * find and return the longest distance between any two adjacent 1's
 * in the binary representation of n. If there are no two adjacent 1's, return 0.
 *
 * Two 1's are adjacent if there are only 0's separating them (possibly no 0's).
 * The distance between two 1's is the absolute difference between their bit positions.
 * For example, the two 1's in "1001" have a distance of 3.
 *
 * Example 1:
 * Input: n = 22
 * Output: 2
 * Explanation: 22 in binary is "10110". In the binary representation of 22, there are three 1's, and two adjacent pairs of 1's. The first adjacent pair of 1's have a distance of 2, and the second adjacent pair of 1's have a distance of 1. The answer is the largest of these two distances, which is 2.
 *
 * Example 2:
 * Input: n = 5
 * Output: 2
 * Explanation: 5 in binary is "101". There is only one adjacent pair of 1's in the binary representation of 5, and the distance between them is 2. Thus, the answer is 2.
 *
 * Example 3:
 * Input: n = 6
 * Output: 1
 * Explanation: 6 in binary is "110". There is only one adjacent pair of 1's in the binary representation of 6, and the distance between them is 1. Thus, the answer is 1.
 *
 * Example 4:
 * Input: n = 8
 * Output: 0
 * Explanation: 8 in binary is "1000". There are no adjacent pairs of 1's in the binary representation of 8, so we return 0.
 *
 * Constraints:
 * 1 <= n <= 10^9
 *
 * @param {number} n
 * @return {number}
 */

/** Algorithm - Bit Manipulation
 * 1. Convert the integer n to its binary representation as a string.
 * 2. Initialize two variables, maxDistance to keep track of the longest distance and lastPosition to store the position of the last seen '1'.
 * 3. Iterate through the binary string:
 *    a. If the current character is '1':
 *       i. If lastPosition is not -1, calculate the distance from lastPosition to the current index and update maxDistance if this distance is greater.
 *       ii. Update lastPosition to the current index.
 * 4. After the loop, return maxDistance.
 *
 * Time Complexity: O(log n) because the number of bits in n is proportional to log n.
 * Space Complexity: O(log n) for the binary string representation of n.
 *
 * n = 22 -> binary = "10110"
 * i = 0, char = '1', lastPosition = -1 -> lastPosition = 0
 * i = 1, char = '0', lastPosition = 0 -> maxDistance = 0
 * i = 2, char = '1', lastPosition = 0 -> distance = 2 - 0 = 2, maxDistance = 2, lastPosition = 2
 * i = 3, char = '1', lastPosition = 2 -> distance = 3 - 2 = 1, maxDistance = 2, lastPosition = 3
 * i = 4, char = '0', lastPosition = 3 -> maxDistance = 2
 * return maxDistance = 2
 */

function binaryGap(n) {
  const binary = n.toString(2);
  let maxDistance = 0;
  let lastPosition = -1;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (lastPosition !== -1) {
        let distance = i - lastPosition;
        maxDistance = Math.max(maxDistance, distance);
      }
      lastPosition = i;
    } else {
      maxDistance = Math.max(maxDistance, 0);
    }
  }
  return maxDistance;
}
