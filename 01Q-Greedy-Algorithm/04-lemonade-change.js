/** Lemonade Change [Easy]
 * https://leetcode.com/problems/lemonade-change/description/
 *
 * At a lemonade stand, each lemonade costs $5.
 * Customers are standing in a queue to buy from you,
 * and order one at a time (in the order specified by bills).
 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
 * You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
 * Note that you don't have any change in hand at first.
 * Given an integer array bills where bills[i] is the bill the ith customer pays,
 * return true if you can provide every customer with the correct change, or false otherwise.
 *
 * Example 1:
 * Input: bills = [5,5,5,10,20]
 * Output: true
 * Explanation: From the first 3 customers, we collect three $5 bills in order.
 *              The fourth customer pays with a $10 bill and we give him one $5 bill as change.
 *              The fifth customer pays with a $20 bill and we give him one $10 bill and one $5 bill as change.
 *              Since all customers got correct change, we output true.
 *
 * Example 2:
 * Input: bills = [5,5,10,10,20]
 * Output: false
 * Explanation: From the first two customers in order, we collect two $5 bills.
 *              For the next two customers, we give them a $5 bill each as change.
 *              For the last customer, we cannot give the correct change. Since we only have two $10 bills, we output false.
 *
 * Constraints:
 * 1 <= bills.length <= 10^5
 * bills[i] is either 5, 10, or 20.
 *
 * @param {number[]} bills
 * @return {boolean}
 */

/**
 * Greedy Algorithm - Lemonade Change
 * Time Complexity: O(N), N = number of customers
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The time complexity is O(N) because we iterate through the bills array once,
 * performing constant time operations for each bill.
 *
 * Space Complexity Explanation:
 * The space complexity is O(1) because we use a fixed amount of extra space
 * (regardless of the input size) to keep track of the count of $5 and $10 bills.
 */

function lemonadeChange(bills) {
  let wallet = [0, 0]; // wallet[0] = count of $5 bills, wallet[1] = count of $10 bills
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      wallet[0]++; // Receive $5 bill
    } else if (bills[i] === 10) {
      wallet[1]++; // Receive $10 bill
      wallet[0]--; // Give $5 bill as change
    } else {
      if (wallet[1]) {
        wallet[1]--; // Give $10 bill as change
        wallet[0]--; // Give $5 bill as change
      } else {
        wallet[0] = wallet[0] - 3; // Give three $5 bills as change
      }
    }
    if (wallet[0] < 0) return false; // Not enough $5 bills to give change
  }
  return true;
}
