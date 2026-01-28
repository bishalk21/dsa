/** Partition Equal Subset Sum - [Medium]
 * https://leetcode.com/problems/partition-equal-subset-sum/
 *
 * Given an integer array nums,
 * return true if you can partition the array into two subsets
 * such that the sum of the elements in both subsets is equal
 * or false otherwise.
 *
 * Example 1:
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 * Example 2:
 * Input: nums = [1,2,3,5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 * Constraints:
 * - 1 <= nums.length <= 200
 * - 1 <= nums[i] <= 100
 *
 * @param {number[]} nums
 * @return {boolean}
 */

function canPartition(nums) {
  let sum = nums.reduce((acc, val) => acc + val, 0);
  // if sum is odd, cannot partition into two equal subsets
  if (sum % 2 !== 0) return false;
  // target sum for each subset is half of total sum
  // because we need two equal subsets
  sum = sum / 2;

  // we need 2d dp array to store results for each index and target sum
  const dp = Array.from({ length: sum + 1 }, () =>
    new Array(nums.length).fill(false),
  );
  /** if we use map or object for memoization
   * Time Complexity: O(n * target)
   * Space Complexity: O(n * target)
   *
   * we face TLE without memoization
   * because of overlapping subproblems and exponential time complexity
   */
  // let memo = {}; // using object for memoization
  // let memo = new Map(); // using Map for memoization
  let fn = (remSum, start) => {
    // base cases
    if (remSum === 0) return true;
    if (remSum < 0 || start >= n) return false;
    // check if result is already computed
    if (dp[remSum][start] !== false) return dp[remSum][start];
    // if (memo.has(`${remSum}-${start}`)) return memo.get(`${remSum}-${start}`); // alternative using Map
    // let key = remSum + '-' + start; // alternative using object
    // if (key in memo) return memo[key]; // alternative using object
    // recursive case: include or exclude the current number
    // let include = fn(remSum - nums[start], start + 1);
    // let exclude = fn(remSum, start + 1);
    // dp[start][remSum] = include || exclude;

    for (let i = start; i < n; i++) {
      if (fn(remSum - nums[i], i + 1)) {
        return (dp[remSum][start] = true);
      }
    }
    return (dp[remSum][start] = false);
    // memo[key] = include || exclude; // alternative using object
    // memo.set(`${start}-${remSum}`, include || exclude); // alternative using Map
    // return dp[start][remSum];
  };
  return fn(sum, 0);
}
