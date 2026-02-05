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

/** Brute Force
 * - find all subarrays of length >= 4
 * - check if they are trionic arrays
 * - calculate sum and update maxSum
 *
 * Time Complexity: O(n^3) - generating all subarrays and checking each
 * Space Complexity: O(1) - no extra space used
 */

/** DP - Three States
 * - Use three DP arrays to track sums of increasing and decreasing sequences
 * - incLeft: max sum of strictly increasing subarray from left to right
 * - dec: max sum of strictly decreasing subarray from left to right
 * - incRight: max sum of strictly increasing subarray from right to left
 * - Update maxSum whenever we find a valid trionic subarray
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - additional space for dp arrays
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

/** DFS with States - Recursion
 * - Use DFS to explore all subarrays starting from each index
 * - Track the state of the trionic array (increasing, decreasing, etc.)
 * - Calculate sum and update maxSum
 *
 * Time Complexity: O(n^2) - exploring subarrays from each index
 * Space Complexity: O(n) - recursion stack
 */

function maxTrionicArraySum(nums) {
  const n = nums.length;
  const INF = Number.MIN_SAFE_INTEGER;

  function dfs(i, state) {
    if (i === n) {
      return state === 3 ? 0 : INF;
    }

    let res = INF;

    if (state === 0) {
      if (i + 1 < n && nums[i] < nums[i + 1]) {
        res = Math.max(res, nums[i] + dfs(i + 1, 1));
      } else {
        return INF;
      }
    }

    if (state === 1) {
      if (i + 1 < n && nums[i] < nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 1));
      if (i + 1 < n && nums[i] > nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 2));
    }

    if (state === 2) {
      if (i + 1 < n && nums[i] > nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 2));
      if (i + 1 < n && nums[i] < nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 3));
    }

    if (state === 3) {
      res = nums[i];
      if (i + 1 < n && nums[i] < nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 3));
    }

    return res;
  }

  let ans = INF;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dfs(i, 0));
  }
  return ans;
}

/** DFS with States - Memoization
 * - Use DFS to explore all subarrays starting from each index
 * - Track the state of the trionic array (increasing, decreasing, etc.)
 * - Use memoization to store results of subproblems
 * - Calculate sum and update maxSum
 *
 * Time Complexity: O(n^2) - exploring subarrays from each index with memoization
 * Space Complexity: O(n) - recursion stack and memoization storage
 */

function maxTrionicArraySum(nums) {
  const n = nums.length;
  const INF = Number.MIN_SAFE_INTEGER;
  const dp = Array.from({ length: n + 1 }, () => Array(4).fill(null));

  function dfs(i, state) {
    if (i === n) {
      return state === 3 ? 0 : INF;
    }

    if (dp[i][state] !== null) return dp[i][state];

    let res = INF;

    if (state === 0) {
      if (i + 1 < n && nums[i] < nums[i + 1]) {
        res = Math.max(res, nums[i] + dfs(i + 1, 1));
      } else {
        return INF;
      }
    }

    if (state === 1) {
      if (i + 1 < n && nums[i] < nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 1));
      if (i + 1 < n && nums[i] > nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 2));
    }

    if (state === 2) {
      if (i + 1 < n && nums[i] > nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 2));
      if (i + 1 < n && nums[i] < nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 3));
    }

    if (state === 3) {
      res = nums[i];
      if (i + 1 < n && nums[i] < nums[i + 1])
        res = Math.max(res, nums[i] + dfs(i + 1, 3));
    }

    dp[i][state] = res;
    return res;
  }

  let ans = INF;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dfs(i, 0));
  }
  return ans;
}

/** DP with States - Tabulation
 * - Use DP to iteratively build solutions for subarrays
 * - Track the state of the trionic array (increasing, decreasing, etc.)
 * - Calculate sum and update maxSum
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - additional space for dp table
 */

function maxTrionicArraySum(nums) {
  const n = nums.length;
  const INF = -1e18;

  const dp = Array.from({ length: n + 1 }, () => Array(4).fill(INF));

  // Base case
  for (let state = 0; state < 4; state++) {
    dp[n][state] = state === 3 ? 0 : INF;
  }

  for (let i = n - 1; i >= 0; i--) {
    // State 0
    dp[i][0] = INF;
    if (i + 1 < n && nums[i] < nums[i + 1]) {
      dp[i][0] = nums[i] + dp[i + 1][1];
    }

    // State 1
    dp[i][1] = INF;
    if (i + 1 < n && nums[i] < nums[i + 1]) {
      dp[i][1] = Math.max(dp[i][1], nums[i] + dp[i + 1][1]);
    }
    if (i + 1 < n && nums[i] > nums[i + 1]) {
      dp[i][1] = Math.max(dp[i][1], nums[i] + dp[i + 1][2]);
    }

    // State 2
    dp[i][2] = INF;
    if (i + 1 < n && nums[i] > nums[i + 1]) {
      dp[i][2] = Math.max(dp[i][2], nums[i] + dp[i + 1][2]);
    }
    if (i + 1 < n && nums[i] < nums[i + 1]) {
      dp[i][2] = Math.max(dp[i][2], nums[i] + dp[i + 1][3]);
    }

    // State 3
    dp[i][3] = nums[i];
    if (i + 1 < n && nums[i] < nums[i + 1]) {
      dp[i][3] = Math.max(dp[i][3], nums[i] + dp[i + 1][3]);
    }
  }

  let ans = INF;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i][0]);
  }

  return ans;
}
