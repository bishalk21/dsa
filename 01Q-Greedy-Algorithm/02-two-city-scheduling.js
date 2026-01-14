/** Two City Scheduling [medium]
 * https://leetcode.com/problems/two-city-scheduling/
 *
 * A company is planning to interview 2n people. Given an array costs where costs[i] = [aCosti, bCosti]
 * represents the cost of flying the ith person to city A and city B respectively.
 * Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
 *
 * Example 1:
 * Input: costs = [[10,20],[30,200],[400,50],[30,20]]
 * Output: 110
 * Explanation:
 * The first person goes to city A for a cost of 10.
 * The second person goes to city A for a cost of 30.
 * The third person goes to city B for a cost of 50.
 * The fourth person goes to city B for a cost of 20.
 * The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 *
 * Example 2:
 * Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
 * Output: 1859
 *
 * Example 3:
 * Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
 * Output: 3086
 *
 * @param {number[][]} costs
 * @return {number}
 */

/**
 * Greedy Algorithm
 * Time Complexity: O(N log N), N = number of people (2n)
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The time complexity is dominated by the sorting step, which takes O(N log N) time.
 * After sorting, we make a single pass through the sorted list to calculate the total cost,
 * which takes O(N) time. Therefore, the overall time complexity is O(N log N).
 *
 * Space Complexity Explanation:
 * The space complexity is O(1) if we consider the input array can be modified in place.
 * If we need to maintain the original array, the space complexity would be O(N)
 * due to the space required for the sorted array.
 */

function twoCitySchedCost(costs) {
  // Sort costs based on the difference between flying to city A and city B
  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  let totalCost = 0;
  let n = costs.length / 2;
  // Send first n people to city A and the rest to city B
  //   for (let i = 0; i < costs.length; i++) {
  //     if (i < n) {
  //       totalCost += costs[i][0]; // Cost for city A
  //     } else {
  //       totalCost += costs[i][1]; // Cost for city B
  //     }
  //   }

  // Or using two loops

  //   for (let i = 0; i < n; i++) {
  //     totalCost += costs[i][0]; // Cost for city A
  //   }

  //   for (let i = n; i < 2 * n; i++) {
  //     totalCost += costs[i][1]; // Cost for city B
  //   }

  // Or in a single loop
  for (let i = 0; i < n; i++) {
    totalCost += costs[i][0] + costs[i + n][1]; // Cost for city A and city B
  }

  return totalCost;
}
