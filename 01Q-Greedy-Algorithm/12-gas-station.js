/** Gas Station [Medium]
 * https://leetcode.com/problems/gas-station/
 *
 * There are n gas stations along a circular route,
 * where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank
 * and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
 * You begin the journey with an empty tank at one of the gas stations.
 *
 * Given two integer arrays gas and cost,
 * return the starting gas station's index if you can travel around the circuit once in the clockwise direction,
 * otherwise return -1.
 * If there exists a solution, it is guaranteed to be unique.
 *
 * Example 1:
 * Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * Output: 3
 * Explanation: Start at station 3 (index 3) and fill up with 4 units of gas. Your tank = 0 + 4 = 4
 *              Travel to station 4. Your tank = 4 - 1 + 5 = 8
 *              Travel to station 0. Your tank = 8 - 2 + 1 = 7
 *              Travel to station 1. Your tank = 7 - 3 + 2 = 6
 *              Travel to station 2. Your tank = 6 - 4 + 3 = 5
 *              Travel to station 3. The cost is 5. Your tank = 5 - 5 + 4 = 4
 *              You made it! Return 3 as the starting index.
 *
 * Example 2:
 * Input: gas = [2,3,4], cost = [3,4,3]
 * Output: -1
 * Explanation: You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
 *              Let's start at station 2 and fill up with 4 units of gas. Your tank = 0 + 4 = 4
 *              Travel to station 0. Your tank = 4 - 3 + 2 = 3
 *              Travel to station 1. Your tank = 3 - 3 + 3 = 3
 *              You cannot travel back to station 2, as it requires 4 units of gas but you only have 3.
 *              Therefore, you can't travel around the circuit once no matter where you start.
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/** Greedy Approach - Gas Station
 * Time Complexity: O(n), where n is the number of gas stations
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The algorithm iterates through the gas stations once,
 * performing constant-time operations for each station.
 * Therefore, the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses a constant amount of extra space for variables,
 * regardless of the input size. Therefore, the space complexity is O(1).
 */

function canCompleteCircuit(gas, cost) {
  // Total gas and total cost to check if a solution is possible
  let currGain = 0;
  let totalGain = 0;
  // Starting index for the journey
  let startIndex = 0;
  // Iterate through each gas station
  for (let i = 0; i < gas.length; i++) {
    // Calculate the current gain/loss at station i
    currGain += gas[i] - cost[i];
    totalGain += gas[i] - cost[i];
    // If current gain is negative, reset starting index and current gain
    if (currGain < 0) {
      startIndex = i + 1;
      currGain = 0;
    }
  }
  // If total gain is negative, return -1 (not possible to complete circuit)
  return totalGain < 0 ? -1 : startIndex;
}
