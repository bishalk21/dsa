/** Best Time to Buy & Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time.
 * However, you can sell and buy multiple stocks on the same day,
 * ensuring you do not hold more than one share of the stock at any time.
 * Find and return the maximum profit you can achieve.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 *              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *              Total profit is 4 + 3 = 7.
 *
 * Example 2:
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 *              Total profit is 4.
 *
 * Example 3:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 *
 * @param {number[]} prices
 * @return {number}
 */

/** Greedy Approach - Best Time to Buy & Sell Stock II
 * Time Complexity: O(n), where n is the number of days (length of prices array)
 * Space Complexity: O(1)
 *
 * Explanation:
 * The algorithm iterates through the prices array starting from the second day.
 * For each day, it calculates the profit that could be made by selling the stock
 * bought on the previous day. If this profit is positive, it adds it to the total maxProfit.
 * This approach effectively captures all upward price movements, allowing for multiple
 * buy-sell transactions to maximize profit.
 * By summing all positive differences between consecutive days, the algorithm ensures
 * that it takes advantage of every opportunity to make a profit.
 * This greedy strategy works because any increase in price from one day to the next
 * can be treated as a separate transaction, thus maximizing the overall profit.
 */

function maxProfitII(prices) {
  let maxProfit = 0;
  const n = prices.length;
  for (let i = 1; i < n; i++) {
    let profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      maxProfit += profit;
    }
  }
  return maxProfit;
}
