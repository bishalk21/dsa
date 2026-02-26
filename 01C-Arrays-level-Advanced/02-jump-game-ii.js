/** Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 * You are given a 0-indexed array of integers nums of length n.
 * You are initially positioned at nums[0].
 * Each element nums[i] represents the maximum length of a forward jump from index i.
 * In other words, if you are at nums[i], you can jump to any nums[i + j] where:
 * - 0 <= j <= nums[i] and
 * - i + j < n
 * Return the minimum number of jumps to reach nums[n - 1].
 * The test cases are generated such that you can reach nums[n - 1].
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - 0 <= nums[i] <= 1000
 * - It's guaranteed that you can reach nums[n - 1].
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Hint:
 * - can reach the end of the array from the current index, then we can jump directly to the end and return 1.
 * - If we cannot jump directly to the end, we can try all possible jumps from the current index and recursively calculate the minimum number of jumps needed to reach the end from each of those jumps.
 * - We can use dynamic programming to store the results of subproblems and avoid redundant calculations.
 * - We can also use a greedy approach to keep track of the maximum reachable index at each step
 *   and determine the minimum number of jumps needed to reach the end.
 */

/** Brute Force Approach
 * - explore all possible jump combinations from the starting index to see if it can reach the last index.
 *   (recursion/DFS)
 * - For each index, it tries all possible jumps (from 1 to nums[start]) and
 *   recursively checks if any of those jumps lead to a successful path to the end.
 *
 * - Time Complexity: O(2^n) - in the worst case,
 *                             we explore all possible jump combinations, leading to an exponential number of calls.
 * - Space Complexity: O(n) - in the worst case, the recursion stack can go as deep as n (the length of the input array).
 *
 * Note: This brute-force approach is inefficient for larger input sizes due to its exponential time complexity.
 *
 * [2,3,1,1,4]
 * dfs(0) ---> start = 0, nums[0] = 2,
 *              i = 1, next = 0 + 1 = 1, dfs(1) ---> start = 1, nums[1] = 3,
 *                     i = 1, next = 1 + 1 = 2, dfs(2) ---> start = 2, nums[2] = 1,
 *                            i = 1, next = 2 + 1 = 3, dfs(3) ---> start = 3, nums[3] = 1,
 *                                   i = 1, next = 3 + 1 = 4, dfs(4) ---> start = 4, lastIndex = 4, return 0
 *                                   return minJumps = Min(Infinity, 0 + 1) = 1
 *                      i = 2, next = 1 + 2 = 3, dfs(3) ---> start = 3, nums[3] = 1,
 *                                   i = 1, next = 3 + 1 = 4, dfs(4) ---> start = 4, lastIndex = 4, return 0
 *                                   return minJumps = Min(Infinity, 0 + 1) = 1
 *                      i = 3, next = 1 + 3 = 4, dfs(4) ---> start = 4, lastIndex = 4, return 0
 *                                   return minJumps = Min(Infinity, 0 + 1) = 1
 *                     return minJumps = Min(Infinity, 1 + 1) = 2
 *              i = 2, next = 0 + 2 = 2, dfs(2) ---> start = 2, nums[2] = 1,
 *                     i = 1, next = 2 + 1 = 3, dfs(3) ---> start = 3, nums[3] = 1,
 *                            i = 1, next = 3 + 1 = 4, dfs(4) ---> start = 4, lastIndex = 4, return 0
 *                            return minJumps = Min(Infinity, 0 + 1) = 1
 *                     return minJumps = Min(Infinity, 1 + 1) = 2
 */
function jump(nums) {
  let lastIndex = nums.length - 1;
  let dfs = (start) => {
    if (start === lastIndex) return 0; // base case: if we are at the last index, no more jumps are needed
    let minJumps = Infinity;
    for (let i = 1; i <= nums[start]; i++) {
      let next = start + i;
      if (next < nums.length) {
        let jumps = dfs(next);
        if (jumps !== Infinity) {
          minJumps = Math.min(minJumps, jumps + 1); // add 1 for the jump from start to next
        }
      }
    }
    return minJumps;
  };
  return dfs(0);
}

/** Using Greedy Approach
 * - We can optimize the brute-force approach by using a greedy strategy to keep track of the maximum reachable index at each step.
 * - maintain two variables: currEnd (the farthest we can reach with the current number of jumps) and farthest (the farthest we can reach with the next jump).
 * - Iterate through the array, and for each index, update farthest to be the maximum of its current value and the index plus the jump length at that index.
 * - When we reach the end of the current jump (i.e., when i equals currEnd), we increment the jump count and update currEnd to farthest.
 * - This way, we can determine the minimum number of jumps needed to reach the end of the array.
 * - Time Complexity: O(n) - we iterate through the array once.
 * - Space Complexity: O(1) - we use a constant amount of space for the variables.
 *
 * [3,4,2,1,2,1,5,1,1,1,4]
 * currEnd = 0, farthest = 0, jumps = 0, lastIndex = 10
 * i = 0, farthest = max(0, 0 + 3) = 3, i = currEnd, jumps = 1, currEnd = 3
 * i = 1, farthest = max(3, 1 + 4) = 5, i = 1 < currEnd, continue
 * i = 2, farthest = max(5, 2 + 2) = 5, i = 2 < currEnd, continue
 * i = 3, farthest = max(5, 3 + 1) = 5, i = currEnd, jumps = 2, currEnd = 5
 * i = 4, farthest = max(5, 4 + 2) = 6, i = 4 < currEnd, continue
 * i = 5, farthest = max(6, 5 + 1) = 6, i = currEnd, jumps = 3, currEnd = 6
 * i = 6, farthest = max(6, 6 + 5) = 11, i = currEnd, jumps = 4, currEnd = 11
 * i = 7, farthest = max(11, 7 + 1) = 11, i = 7 < currEnd, continue
 * i = 8, farthest = max(11, 8 + 1) = 11, i = 8 < currEnd, continue
 * i = 9, farthest = max(11, 9 + 1) = 11, i = 9 < currEnd, continue
 * end of loop, return jumps = 4
 *
 * [2,3,1,1,4]
 * currEnd = 0, farthest = 0, jumps = 0, lastIndex = 4
 * i = 0, farthest = max(0, 0 + 2) = 2, i = currEnd, jumps = 1, currEnd = 2
 * i = 1, farthest = max(2, 1 + 3) = 4, i = 1 < currEnd, continue
 * i = 2, farthest = max(4, 2 + 1) = 4, i = currEnd, jumps = 2, currEnd = 4
 * i = 3, farthest = max(4, 3 + 1) = 4, i = 3 < currEnd, continue
 * end of loop, return jumps = 2
 */

function jump(nums) {
  let currEnd = 0; // the farthest we can reach with the current number of jumps
  let farthest = 0; // the farthest we can reach with the next jump
  let jumps = 0; // the number of jumps needed to reach the end
  let lastIndex = nums.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    farthest = Math.max(farthest, i + nums[i]); // update the farthest we can reach with the next jump
    if (i === currEnd) {
      // if we have reached the end of the current jump
      jumps++; // we need to make another jump
      currEnd = farthest; // update the current end to the farthest we can reach with the next jump
    }
  }
  return jumps;
}
