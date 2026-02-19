/** Toggle Light Bulbs
 * https://leetcode.com/problems/bulb-switcher/
 * https://leetcode.com/problems/toggle-light-bulbs
 *
 * You are given an array bulbs of integers between 1 and 100,
 * There are 100 light bulbs numbered from 1 to 100.
 * Initially, all the bulbs are turned off.
 * For each element bulbs[i] in the array bulbs,
 * - if the bulb[i]th light bulb is currently off, turn it on,
 * - otherwise, turn it off.
 * Return the list of integers denoting the light bulbs that are
 * on in the end, sorted in ascending order.
 * If no bulbs are on, return an empty list.
 *
 * Example 1:
 * Input: bulbs = [10, 30, 20, 10]
 * Output: [20, 30]
 * Explanation: Initially, all the bulbs are off.
 *              After the first operation, the 10th bulb is turned on.
 *              After the second operation, the 30th bulb is turned on.
 *              After the third operation, the 20th bulb is turned on.
 *              After the fourth operation, the 10th bulb is turned off.
 *              The bulbs that are on are the 20th and 30th bulbs.
 * Example 2:
 * Input: bulbs = [100, 100]
 * Output: []
 * Explanation: Initially, all the bulbs are off.
 *              After the first operation, the 100th bulb is turned on.
 *              After the second operation, the 100th bulb is turned off.
 *             No bulbs are on after all operations.
 * Constraints:
 * - 1 <= bulbs.length <= 100
 * - 1 <= bulbs[i] <= 100
 *
 * @param {number[]} bulbs
 * @return {number[]}
 */

/** Algorithm: Simulation
 * Time Complexity: O(n) - We iterate through the input array once to toggle the bulbs, and then we iterate through the state array to collect the indices of the bulbs that are on.
 * Space Complexity: O(n) - We use an additional array to keep track of the state of each bulb, which has a size of 101 (to account for bulb indices from 1 to 100).
 */
function toggleLightBulbs(bulbs) {
  let n = 100; // Total number of bulbs
  let state = new Array(n + 1).fill(false); // Initialize all bulbs to off (false)
  // Toggle the state of each bulb based on the input array
  for (let bulb of bulbs) {
    state[bulb] = !state[bulb]; // Toggle the state of the bulb
  }
  let result = [];
  // Collect the indices of bulbs that are on (true)
  for (let i = 1; i <= n; i++) {
    if (state[i]) {
      // If the bulb is on, add its index to the result
      result.push(i);
    }
  }
  return result;
}

/** Better Algorithm: Using a Set for O(1) lookup and insertion
 * Time Complexity: O(n) - We iterate through the input array once to toggle the bulbs, and then we convert the Set to an array and sort it, which takes O(m log m) where m is the number of bulbs that are on. In the worst case, m can be equal to n, so the overall time complexity is O(n log n).
 * Space Complexity: O(n) - In the worst case, all bulbs could be on, so the Set would contain n elements.
 */
function toggleLightBulbs(bulbs) {
  let n = 100; // Total number of bulbs
  let state = new Set(); // Use a Set to track the state of bulbs
  // Toggle the state of each bulb based on the input array
  for (let bulb of bulbs) {
    if (state.has(bulb)) {
      state.delete(bulb); // If the bulb is already on, turn it off
    } else {
      state.add(bulb); // If the bulb is off, turn it on
    }
  }
  // Convert the Set to an array and sort it in ascending order
  return Array.from(state).sort((a, b) => a - b);
}

/** Optimal Algorithm: Using a frequency count to determine the final state of each bulb
 * Time Complexity: O(n) - We iterate through the input array once to count the frequency of toggles for each bulb, and then we filter and sort the bulbs that are on. The sorting step takes O(m log m) where m is the number of bulbs that are on, but in the worst case, m can be equal to n, so the overall time complexity is O(n log n).
 * Space Complexity: O(n) - We use an object to count the frequency of toggles for each bulb, which can have up to n entries in the worst case.
 */
function toggleLightBulbs(bulbs) {
  let count = {};
  for (let bulb of bulbs) {
    count[bulb] = (count[bulb] || 0) + 1;
  }
  return Object.keys(count)
    .filter((bulb) => count[bulb] % 2 === 1)
    .map(Number)
    .sort((a, b) => a - b);
}
