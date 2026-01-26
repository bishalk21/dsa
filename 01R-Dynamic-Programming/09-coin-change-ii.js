/** Coin Change II - [Medium]
 * https://leetcode.com/problems/coin-change-ii/
 *
 * Similar to:
 * - Combination Sum - https://leetcode.com/problems/combination-sum/
 * - Partition Equal Subset Sum - https://leetcode.com/problems/partition-equal-subset-sum/
 *
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money.
 * Return the number of combinations that make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return 0.
 * You may assume that you have an infinite number of each kind of coin.
 * The answer is guaranteed to fit into a signed 32-bit integer.
 *
 * Example 1:
 * Input: amount = 5, coins = [1,2,5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 *              5=5
 *              5=2+2+1
 *              5=2+1+1+1
 *              5=1+1+1+1+1
 * Example 2:
 * Input: amount = 3, coins = [2]
 * Output: 0
 * Explanation: the amount of 3 cannot be made up just with coins of 2.
 * Example 3:
 * Input: amount = 10, coins = [10]
 * Output: 1
 *
 * Constraints:
 * - 1 <= coins.length <= 300
 * - 1 <= coins[i] <= 5000
 * - All the values of coins are unique.
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/** Bottom-up approach (tabulation - Iterative)
 * Time Complexity: O(n * m) where n is the amount and m is the number of coins
 * Space Complexity: O(n) for the dp array
 */

function change(amount, coins) {
    let n = coins.length;
    // dp array to store the number of combinations for each amount
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // base case: 1 way to make amount 0 (using no coins)
    // iterate through each coin
    for (let i = 0; i < n; i++) {
        const coin = coins[i];
        // update the dp array for all amounts from coin to amount
        for (let remAmount = coin; remAmount <= amount; remAmount++) {
            dp[remAmount] += dp[remAmount - coin];
        }
    }
    return dp[amount];
    
}

/** Top-down approach (memoization - Recursive)
 * Time Complexity: O(n * m) where n is the amount and m is the number of coins
 * Space Complexity: O(n) for the memoization array
 */

function change(amount, coins) {
  let n = coins.length;
  let memo = Array.from({ length: amount + 1 }, () => Array(n).fill(-1));
  // let memo = new Map(); // alternative using Map
  function fn(remAmount, start) {
    let noOfCombinations = 0;
    // base caseS
    if (remAmount === 0) return 1; // found a valid combination
    if (remAmount < 0) return 0; // invalid combination

    // check if result is already computed
    if (memo[remAmount][start] !== -1) return memo[remAmount][start];
    // let key = start + '-' + remAmount;
    // if (key in memo) return memo[key];
    // if (memo.has(key)) return memo.get(key);
    // if (memo.has(`${remAmount}-${start}`)) return memo.get(`${remAmount}-${start}`); // alternative using Map

    // recursive case
    for (let i = start; i < n; i++) {
      let coin = coins[i];
      noOfCombinations += fn(remAmount - coin, i); // not i + 1 because we can reuse the same coin
    }
    // return noOfCombinations;
    return (memo[remAmount][start] = noOfCombinations);
    // memo[key] = noOfCombinations;
    // memo.set(key, noOfCombinations); // alternative using Map
    // return memo[key];
  }
  return fn(amount, 0);
}
