/** House Robber [Medium]
 * https://leetcode.com/problems/house-robber/
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is
 * that adjacent houses have security systems connected,
 * and it will automatically contact the police if two adjacent houses
 * were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *              Total amount you can rob = 1 + 3 = 4.
 * Example 2:
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *              Total amount you can rob = 2 + 9 + 1 = 12.
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 *
 * @param {number[]} nums
 * @return {number}
 */

/** using DP - Bottom-Up Approach with Space Optimization
 * - Overlapping Subproblems: The problem has overlapping subproblems,
 *                            as the maximum amount that can be robbed up to house i
 *                            depends on the maximum amounts that can be robbed up to houses i-1 and i-2.
 *                            By storing the results of these subproblems, we can avoid redundant calculations.
 * - Optimal Substructure: The optimal solution for the problem can be constructed from the optimal solutions of its subproblems.
 *                         This means we can build the solution for house i using the previously computed values.
 * DRY principle (Don't Repeat Yourself) - by storing the results of smaller subproblems,
 * we avoid recomputing them multiple times, thus improving efficiency.
 *
 * Time Complexity: O(n) - linear time complexity as we compute the maximum amount for each house once.
 * Space Complexity: O(1) - constant space complexity as we only use a fixed amount of extra space.
 */

function rob(nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  // if p1=p2=0
  //   let p1 = 0,
  //     p2 = 0;
  //   for (let i = 0; i < n; i++) {}
  let p2 = nums[0];
  let p1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    let current = Math.max(p1, p2 + nums[i]);
    let temp = p1;
    p1 = current;
    p2 = temp;
    current++;
  }
  return p1;
}

/** using DP - Bottom-Up Approach with Tabulation (Iteration)
 * - Overlapping Subproblems: The problem has overlapping subproblems,
 *                            as the maximum amount that can be robbed up to house i
 *                            depends on the maximum amounts that can be robbed up to houses i-1 and i-2.
 *                            By storing the results of these subproblems, we can avoid redundant calculations.
 * - Optimal Substructure: The optimal solution for the problem can be constructed from the optimal solutions of its subproblems.
 *                         This means we can build the solution for house i using the previously computed values.
 * DRY principle (Don't Repeat Yourself) - by storing the results of smaller subproblems,
 * we avoid recomputing them multiple times, thus improving efficiency.
 *
 * Time Complexity: O(n) - linear time complexity as we compute the maximum amount for each house once.
 * Space Complexity: O(n) - linear space complexity due to the storage of computed maximum amounts.
 */

function rob(nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
}
