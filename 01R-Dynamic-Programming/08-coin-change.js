/** Coin Change - [Medium]
 * https://leetcode.com/problems/coin-change/
 *
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Example 1:
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 * Constraints:
 * - 1 <= coins.length <= 12
 * - 1 <= coins[i] <= 2^31 - 1
 * - 0 <= amount <= 10^4
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/** Bottom-up approach (tabulation - iterative)
 * Time Complexity: O(n * m) where n is the amount and m is the number of coins
 * Space Complexity: O(n) for the dp array
 */
function coinChange(coins, amount) {
  let n = coins.length;
  // dp array to store the minimum coins needed for each amount
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: 0 coins needed to make amount 0

  // iterate through all amounts from 1 to amount
  for (let remAmount = 1; remAmount <= amount; remAmount++) {
    // try each coin
    for (let i = 0; i < n; i++) {
      const coin = coins[i];
      if (remAmount - coin >= 0) {
        dp[remAmount] = Math.min(dp[remAmount], dp[remAmount - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

/** top-down approach (memoization)
 * Time Complexity: O(n * m) where n is the amount and m is the number of coins
 * Space Complexity: O(n) for the memoization array
 */

/** if object is not used for memoization, it results in TLE
 * as the same subproblems are recomputed multiple times
 * leading to an exponential time complexity O(m^n)
 * where m is the number of coins and n is the amount.
 * Using memoization reduces the time complexity to O(n * m)
 * by storing and reusing results of subproblems
 * thus avoiding redundant computations and improving efficiency.
 */

function coinChange(coins, amount) {
  let n = coins.length;
  // memoization object to store results of subproblems
  let memo = {};
  // let memo = new Map(); // alternative using Map
  function fn(remAmount) {
    // base cases
    if (remAmount < 0) return -1; // not valid
    if (remAmount === 0) return 0; // no coins needed

    // check if result is already computed
    if (remAmount in memo) return memo[remAmount];
    // if (memo.has(remAmount)) return memo.get(remAmount); // alternative using Map
    // recursive case
    for (let i = 0; i < n; i++) {
      const coin = coins[i];
      let minCoins = Infinity;
      let res = fn(remAmount - coin);
      if (res !== -1) {
        minCoins = Math.min(minCoins, res + 1);
      }
    }
    memo[remAmount] = minCoins === Infinity ? -1 : minCoins;
    // memo.set(remAmount, minCoins === Infinity ? -1 : minCoins); // alternative using Map
    return memo[remAmount];
    // return memo.get(remAmount); // alternative using Map
  }
  return fn(amount);
}
