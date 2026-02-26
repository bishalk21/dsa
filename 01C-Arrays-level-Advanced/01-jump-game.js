/** Jump Game
 * https://leetcode.com/problems/jump-game/
 *
 * You are given an integer array nums.
 * You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what.
 * Its maximum jump length is 0, which makes it impossible to reach the last index.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - 0 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {boolean}
 */

/** using brute force DFS (Depth-First Search/Recursion)
 * - explores all possible jump combinations from the starting index to see if it can reach the last index.
 * - For each index, it tries all possible jumps (from 1 to nums[start]) and
 *   recursively checks if any of those jumps lead to a successful path to the end.
 *
 * - Time Complexity: O(2^n) - in the worst case,
 *                             we explore all possible jump combinations, leading to an exponential number of calls.
 * - Space Complexity: O(n) - in the worst case, the recursion stack can go as deep as n (the length of the input array).
 *
 * Note: This brute-force approach is inefficient for larger input sizes due to its exponential time complexity.
 */
function canJump(nums) {
  let lastIndex = nums.length - 1;

  let dfs = (start) => {
    if (start === lastIndex) return true;

    let ans = false;
    for (let i = 1; i <= nums[start]; i++) {
      let next = start + i;
      ans = ans || dfs(next);
    }

    return ans;
  };
  return dfs(0);
}

/** Using Dynamic Programming
 * - We can optimize the brute-force approach by using dynamic programming to store the results of subproblems.
 * - use a hash map (dp) to store whether we can reach the end from each index.
 * - When we compute the result for a given index, we store it in dp.
 *   If we encounter the same index again, we can return the stored result instead of recomputing it.
 * - This way, we avoid redundant calculations and significantly reduce the time complexity.
 *
 * - Time Complexity: O(n^2) - in the worst case, we may still explore all possible jumps for each index, but we will only compute the result for each index once.
 * - Space Complexity: O(n) - due to the storage of computed results in the dp hash map and the recursion stack.
 *
 * Note: While this DP approach is more efficient than the brute-force method, it can still be inefficient for larger input sizes due to its O(n^2) time complexity. For even larger inputs, a greedy approach can be used to achieve O(n) time complexity.
 */
function canJump(nums) {
  let lastIndex = nums.length - 1;
  let dp = {};
  let dfs = (start) => {
    let ans = false;
    if (start === lastIndex) return true;
    if (dp[start] !== undefined) return dp[start];
    for (let i = 1; i <= nums[start]; i++) {
      let next = start + i;
      ans = ans || dfs(next);
    }
    dp[start] = ans;
    return ans;
  };
  return dfs(0);
}

/** DP - using Array
 * - Similar to the previous DP approach, but instead of using a hash map, we can use an array to store the results.
 * - We initialize an array dp of the same length as nums, where dp[i] will store whether we can reach the end from index i.
 * - We fill this array using a bottom-up approach, starting from the last index and moving backwards to the first index.
 * - Time Complexity: O(n^2) - in the worst case, we may still explore all possible jumps for each index, but we will only compute the result for each index once.
 * - Space Complexity: O(n) - due to the storage of computed results in the dp array.
 *
 * Note: This DP approach is more efficient than the brute-force method, but it can still be inefficient for larger input sizes due to its O(n^2) time complexity. For even larger inputs, a greedy approach can be used to achieve O(n) time complexity.
 */
function canJump(nums) {
  let lastIndex = nums.length - 1;
  let dp = new Array(nums.length).fill(-1); // -1 means unvisited, 0 means cannot reach end, 1 means can reach end
  let dfs = (start) => {
    let ans = false;
    if (start === lastIndex) return true;
    if (dp[start] !== -1) return dp[start] === 1;
    for (let i = 1; i <= nums[start]; i++) {
      let next = start + i;
      ans = ans || dfs(next);
    }
    dp[start] = ans ? 1 : 0;
    return ans;
  };
  return dfs(0);
}

/** Using Greedy Approach
 * - The greedy approach is based on the idea of keeping track of the maximum reachable index at each step.
 * - We iterate through the array and at each index, we check if it is reachable (i.e., if the current index is less than or equal to the maximum reachable index).
 *  If it is reachable, we update the maximum reachable index based on the jump length at that index.
 * - If at any point the maximum reachable index is greater than or equal to the last index, we can return true.
 * - If we finish iterating through the array and the maximum reachable index is still less than the last index, we return false.
 * - This approach is efficient and works in linear time.
 * - Time Complexity: O(n) - we iterate through the array once.
 * - Space Complexity: O(1) - we use only a constant amount of extra space to keep track of the maximum reachable index.
 *
 * Note: The greedy approach is the most efficient solution for this problem and is suitable for larger input sizes due to its linear time complexity.
 */
function canJump(nums) {
  let lastIndex = nums.length - 1;
  let maxReachable = 0;
  // for (let i = 0; i <= maxReachable; i++) {
  //   maxReachable = Math.max(maxReachable, i + nums[i]);
  //   if (maxReachable >= lastIndex) return true;
  // }
  for (let i = 0; i < nums.length; i++) {
    // if current index is beyond the maximum reachable index, we cannot proceed
    if (i > maxReachable) return false;
    maxReachable = Math.max(maxReachable, i + nums[i]);
    // if we can reach or exceed the last index, return true
    if (maxReachable >= lastIndex) return true;
  }
  return false;
}
