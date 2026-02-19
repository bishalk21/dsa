/** Bulb Switcher
 * https://leetcode.com/problems/bulb-switcher/
 *
 * There are n bulbs that are initially off. You first turn on all the bulbs,
 * then you turn off every second bulb. On the third round, you toggle every
 * third bulb (turning on if it's off or turning off if it's on). For the i-th
 * round, you toggle every i bulb. For the n-th round, you only toggle the last bulb.
 * Return the number of bulbs that are on after n rounds.
 *
 * Example 1:
 * Input: n = 3
 * Output: 1
 * Explanation: At first, the three bulbs are [off, off, off].
 *              After the first round, the three bulbs are [on, on, on].
 *              After the second round, the three bulbs are [on, off, on].
 *              After the third round, the three bulbs are [on, off, off].
 *              So you should return 1 because there is only one bulb is on.
 * Example 2:
 * Input: n = 0
 * Output: 0
 * Example 3:
 * Input: n = 1
 * Output: 1
 *
 * Constraints:
 * - 0 <= n <= 10^9
 *
 * @param {number} n
 * @return {number}
 */

function bulbSwitch(n) {
  // The number of bulbs that are on after n rounds is equal to the number of perfect squares less than or equal to n.
  // This is because a bulb will be toggled if its position is a multiple of the round number.
  // A bulb at position k will be toggled for every divisor it has. Most numbers have an even number of divisors, except for perfect squares, which have an odd number of divisors (because one of the divisors is repeated).
  // Therefore, only the bulbs at positions that are perfect squares will remain on after n rounds.
  return Math.floor(Math.sqrt(n));
}

function bulbSwitch(n) {
  // time limit exceeded for large n = 999999999, but it works for small n
  let count = 0;
  let state = new Array(n + 1).fill(false); // Initialize all bulbs to off (false)
  // Simulate the toggling of bulbs for each round
  for (let round = 1; round <= n; round++) {
    // Toggle every i-th bulb for the current round
    for (let bulb = round; bulb <= n; bulb += round) {
      state[bulb] = !state[bulb]; // Toggle the state of the bulb
    }
  }

  // Count how many bulbs are on (true)
  for (let i = 1; i <= n; i++) {
    if (state[i]) {
      count++;
    }
  }
  return count;
}

/** Binary search approach
 * Time Complexity: O(log n) - We are performing a binary search to find the largest integer whose square is less than or equal to n.
 * Space Complexity: O(1) - We are using a constant amount of space to store the variables for the binary search.
 */
function bulbSwitch(n) {
  let left = 0;
  let right = n;
  let ans = 0;

  while (left <= right) {
    let mid = left + ((right - left) >> 1); // n = 3, mid = 0 + ((3 (11) >> 1 (shift 3 or 11 to right by 1) = 1
    let sq = mid * mid;

    if (sq <= n) {
      // 1 <= 3
      ans = mid; // mid is valid, try bigger ans = 1
      left = mid + 1; // try to find a bigger perfect square, left = 1 + 1 = 2
    } else {
      right = mid - 1; // too big
    }
  }
  return ans;
}

/**
 * Example: n = 3
 * left = 0, right = 3, ans = 0
 *
 * 0 <= 3 (left <= right),
 * mid = 0 + ((3 - 0) >> 1 (shift 3 to right by 1) = 1
 * sq = 1 * 1 = 1, 1 <= 3, ans = 1, left = 2
 *
 * 2 <= 3,
 * mid = 2 + ((3 - 2) >> 1 (shift 1 to right by 1) = 2
 * sq = 2 * 2 = 4, 4 > 3, right = 1
 *
 * 2 <= 1 (left > right), exit loop, return ans = 1
 */
