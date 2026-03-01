/** Minimum Cost to Split into Ones
 * https://leetcode.com/problems/minimum-cost-to-split-into-ones/
 * https://leetcode.com/contest/weekly-contest-491/problems/minimum-cost-to-split-into-ones/description/
 *
 * You are given a positive integer n.
 * In one Operation, you may split an integer x into two positive integers a and b
 * such that x = a + b. The cost of this operation is a * b.
 * Return an integer denoting the minimum total cost required to split the
 * integer n into a sum of ones.
 *
 * Example 1:
 * Input: n = 3
 * Output: 3
 * Explanation: We can split 3 into 1 and 2 with a cost of 1 * 2 = 2, then split 2 into 1 and 1 with a cost of 1 * 1 = 1.
 * The total cost is 2 + 1 = 3, which is the minimum cost possible.
 *    x | a | b | a + b | a * b | Total Cost
 *   ---|---|---|-------|-------|-----------
 *    3 | 1 | 2 |   3   |   2   |     2
 *    2 | 1 | 1 |   2   |   1   |     1
 *    Total Cost = 2 + 1 = 3
 *
 * Example 2:
 * Input: n = 4
 * Output: 6
 * Explanation: We can split 4 into 2 and 2 with a cost of 2 * 2 = 4, then split each 2 into 1 and 1 with a cost of 1 * 1 = 1 for each split.
 * The total cost is 4 + 1 + 1 = 6, which is the minimum cost possible.
 *   x | a | b | a + b | a * b | Total Cost
 *  ---|---|---|-------|-------|-----------
 *   4 | 2 | 2 |   4   |   4   |     4
 *   2 | 1 | 1 |   2   |   1   |     1
 *   2 | 1 | 1 |   2   |   1   |     1
 *  Total Cost = 4 + 1 + 1 = 6
 *
 * Constraints:
 * * 1 <= n <= 10^4
 *
 * @param {number} n
 * @return {number}
 */

/** Algorithm: Iterative Approach
 * - Steps:
 *   1. Initialize a variable `totalCost` to 0 to keep track of the total cost.
 *   2. Use a loop to iterate from 1 to n-1 (inclusive):
 *      - For each integer `i`, calculate the cost of splitting `n` into `i` and `n - i`, which is `i * (n - i)`.
 *      - Add this cost to `totalCost`.
 *   3. Return the `totalCost` after the loop completes.
 *
 * time complexity: O(n), where n is the input integer. We need to iterate through all integers from 1 to n-1.
 * space complexity: O(1), as we are using a constant amount of extra space for the `totalCost` variable.
 *
 * @param {number} n
 * @return {number}
 */
function minimumCost(n) {
  let totalCost = 0;
  let x = n;

  // Calculate the total cost of splitting x into ones
  // The cost of splitting x into two parts a and b is a * b, where a + b = x
  for (let i = 1; i < x; i++) {
    totalCost = totalCost + i;
  }

  // logic: The cost of splitting n into ones is the sum of the first (n-1) integers
  //   totalCost = ((x - 1) * x) / 2;
  return totalCost;
}
function minimumCost(n) {
  let totalCost = 0;
  // Use a queue to perform a breadth-first search
  let queue = [n];
  while (queue.length > 0) {
    let x = queue.shift();
    if (x === 1) {
      continue; // No cost to split 1
    }
    // Split x into two parts a and b
    let a = Math.floor(x / 2);
    let b = x - a;
    totalCost += a * b; // Add the cost of splitting x
    queue.push(a); // Add a to the queue for further splitting
    queue.push(b); // Add b to the queue for further splitting
  }
  return totalCost;
}

/**
 * C++ Implementation
 */
// class Solution {
// public:
// int minCost(int n) {
//     int totalCost = 0;
//     int x = n;
// for (int i = 1; i < x; i++) {
//     totalCost += i;
// }
//     return totalCost;
// }
// }
