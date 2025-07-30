/**
 * Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * prices = [7, 1, 5, 3, 6, 4]
 *
 * if buy on day 1 (price = 7) and sell on day 4 (price = 6),
 * profit = 6 - 7 = -1 (not allowed)
 *
 * if buy on day 2 (price = 1) and sell on day 3 (price = 5),
 * profit = 5 - 1 = 4 (allowed)
 *
 * if buy on day 2 (price = 1) and sell on day 5 (price = 6),
 * profit = 6 - 1 = 5 (allowed)
 *
 * if buy on day 2 (price = 1) and sell on day 6 (pri ce = 4),
 * profit = 4 - 1 = 3 (allowed)
 *
 * The maximum profit is 5.
 *
 * so find the lowest price for buying and find the highest price for selling after the buying day.
 */

// Algorithm 1: Brute Force (maximum profit by checking all pairs)
// time complexity: O(n^2)
// space complexity: O(1)
function maxProfit(prices) {
  let maxProfit = 0;
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4]); // Output: 5

// Algorithm 2: One Pass (maximum profit by tracking minimum price and maximum profit)
// We have to buy on lowest price and sell on highest price after the buying day
// time complexity: O(n)
// space complexity: O(1)

function maxProfit1(prices) {
  let minPrice = prices[0];
  // let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minPrice > maxProfit) {
      // 7 - 1 = 6 > 0
      maxProfit = prices[i] - minPrice;
    }
    if (prices[i] < minPrice) {
      // 1 < 7
      minPrice = prices[i];
      // minPrice = Math.min(minPrice, prices[i]);
    }
  }
  return maxProfit;
}
