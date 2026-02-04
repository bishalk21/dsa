/** Trionic Array II
 * https://leetcode.com/problems/trionic-array-ii/
 *
 * You are given an integer array nums of length n.
 * A trionic array is a contiguous subarray nums[l...r] (0 <= l < r < n)
 * for which there exist indices l < p < q < r such that:
 * - nums[l...p] is strictly increasing
 * - nums[p...q] is strictly decreasing
 * - nums[q...r] is strictly increasing
 * Return the maximum sum of any trionic subarray in nums.
 *
 * Example 1:
 * Input: nums = [0,-2,-1,-3,0,2,-1]
 * Output: -4
 * Explanation: Pick l = 1, p = 2, q = 3, r = 5
 *              - nums[l...p] = nums[1...2] = [-2,-1] is strictly increasing (-2 < -1).
 *              - nums[p...q] = nums[2...3] = [-1,-3] is strictly decreasing (-1 > -3).
 *              - nums[q...r] = nums[3...5] = [-3,0,2] is strictly increasing (-3 < 0 < 2).
 *              Sum = -2 + -1 + -3 + 0 + 2 = -4.
 *
 * Example 2:
 * Input: nums = [1,4,2,7]
 * Output: 14
 * Explanation: Pick l = 0, p = 1, q = 2, r = 3
 *              - nums[l...p] = nums[0...1] = [1,4] is strictly increasing (1 < 4).
 *              - nums[p...q] = nums[1...2] = [4,2] is strictly decreasing (4 > 2).
 *              - nums[q...r] = nums[2...3] = [2,7] is strictly increasing (2 < 7).
 *              Sum = 1 + 4 + 2 + 7 = 14.
 *
 * Constraints:
 * 4 <= n = nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * It is guaranteed that there is at least one trionic subarray in nums.
 *
 * @param {number[]} nums
 * @return {number}
 */

function maxTrionicArraySum(nums) {
  let n = nums.length;
  // initialize maxSum to the smallest possible value
  // as there can be negative numbers in the array
  let maxSum = -Infinity;
  // dp arrays to store increasing and decreasing sums
  // increasing from left to right
  let incLeft = new Array(n).fill(-Infinity);
  // increasing from right to left
  let incRight = new Array(n).fill(-Infinity);
  // decreasing from left to right
  let dec = new Array(n).fill(-Infinity);

  for (let i = 1; i < n; i++) {
    // strictly increasing from left to right (l to p)
    if (nums[i] > nums[i - 1]) {
      incLeft[i] = Math.max(nums[i] + nums[i - 1], nums[i] + incLeft[i - 1]);
    }

    // strictly decreasing from left to right (p to q)
    if (nums[i] < nums[i - 1]) {
      // start new decreasing sequence or extend previous one
      let fromIncLeft =
        incLeft[i - 1] !== -Infinity ? incLeft[i - 1] + nums[i] : -Infinity;
      let contDec = dec[i - 1] !== -Infinity ? dec[i - 1] + nums[i] : -Infinity;
      dec[i] = Math.max(fromIncLeft, contDec);
    }

    // strictly increasing from right to left (q to r)
    if (nums[i] > nums[i - 1]) {
      // start new increasing sequence or extend previous one
      let fromDec = dec[i - 1] !== -Infinity ? dec[i - 1] + nums[i] : -Infinity;
      let contIncRight =
        incRight[i - 1] !== -Infinity ? incRight[i - 1] + nums[i] : -Infinity;
      incRight[i] = Math.max(fromDec, contIncRight);
    }
    // update maxSum if we have a valid trionic subarray ending at i
    // if (incRight[i] !== -Infinity) {
    //     maxSum = Math.max(maxSum, incRight[i]);
    // }
    maxSum = Math.max(maxSum, incRight[i]);
    console.log(i, nums[i], incLeft[i], dec[i], incRight[i], maxSum);
  }
  return maxSum;
}

/**
 * [0,-2,-1,-3,0,2,-1]
 *   i       nums[i]    incLeft[i]      dec[i]        incRight[i]    maxSum
 *   0       0          -Infinity      -Infinity      -Infinity     -Infinity
 *   1      -2          -Infinity      -Infinity      -Infinity     -Infinity
 *   2      -1(p1)        -3           -Infinity      -Infinity     -Infinity
 *   3      -3          -Infinity         -6          -Infinity     -Infinity
 *   4       0            -3          -Infinity        -6             -6
 *   5       2             2          -Infinity        -4             -4
 *   6      -1          -Infinity         1           -Infinity       -4
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - additional space for dp arrays
 */
