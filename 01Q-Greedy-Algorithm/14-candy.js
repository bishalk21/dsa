/** Candy [Hard]
 * https://leetcode.com/problems/candy/
 *
 * There are n children standing in a line.
 * Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * - Each child must have at least one candy.
 * - Children with a higher rating get more candies than their neighbors.
 *
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 *
 * Example 1:
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 *
 * Example 2:
 * Input: ratings = [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 *              The third child gets 1 candy because it satisfies the above two conditions.
 *
 * @param {number[]} ratings
 * @return {number}
 */

/** Greedy Approach - candy
 * Time Complexity: O(n), where n is the number of children
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The algorithm makes a single pass through the ratings array,
 * performing constant-time operations for each child.
 * Therefore, the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses a constant amount of extra space for variables,
 * regardless of the input size. Therefore, the space complexity is O(1).
 */

function candy(ratings) {
  let n = ratings.length;
  let ans = n;
  let i = 1;
  while (i < n) {
    if (ratings[i] === ratings[i - 1]) {
      i++;
      continue;
    }
    let up = 0;
    while (i < n && ratings[i] > ratings[i - 1]) {
      up++;
      ans = ans + up;
      i++;
    }
    let down = 0;
    while (i < n && ratings[i] < ratings[i - 1]) {
      down++;
      ans = ans + down;
      i++;
    }
    ans = ans - Math.min(up, down);
  }
  return ans;
}

/** Greedy Approach - candy
 * Time Complexity: O(n), where n is the number of children
 * Space Complexity: O(n), where n is the number of children
 *
 * Time Complexity Explanation:
 * The algorithm makes two passes through the ratings array,
 * each taking O(n) time. Therefore, the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses two additional arrays of size n to store
 * the candy distribution from left to right and right to left.
 * Therefore, the space complexity is O(n).
 */
function candy(ratings) {
  let n = ratings.length;
  // Left to right pass
  let leftToRight = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftToRight[i] = leftToRight[i - 1] + 1;
    }
  }

  // Right to left pass
  let rightToLeft = Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rightToLeft[i] = rightToLeft[i + 1] + 1;
    }
  }

  // Sum up the candies
  let totalCandies = 0;
  for (let i = 0; i < n; i++) {
    totalCandies += Math.max(leftToRight[i], rightToLeft[i]);
  }
  return totalCandies;
}
