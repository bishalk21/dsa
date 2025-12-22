/** Greedy Algorithm
 *
 * 01. What is Greedy Algorithm?
 * - a simple and intuitive algorithmic paradigm
 * - a problem-solving approach where we make locally optimal choices at each step,
 *   with the hope of finding a global optimum
 * - used for optimization problems
 * - it builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit
 *
 * "Take the best choice at the moment, without worrying about the future consequences."
 *
 * 02. Characteristics of Greedy Algorithms
 * - Greedy Choice Property: A global optimum can be arrived at by selecting a local optimum.
 * - Optimal Substructure: An optimal solution to the problem contains optimal solutions to its subproblems.
 * - Irrevocability: Once a choice is made, it cannot be changed.
 *
 * 03. Examples of Greedy Algorithms
 * - Coin Change Problem: Making change with the fewest coins.
 * - Activity Selection Problem: Selecting the maximum number of activities that don't overlap.
 * - Huffman Coding: A method for data compression.
 * - Prim's and Kruskal's Algorithms: For finding the Minimum Spanning Tree in a graph.
 * - Dijkstra's Algorithm: For finding the shortest path in a graph.
 * - Knapsack Problem (Fractional): Selecting items to maximize value without exceeding weight capacity.
 *
 * 04. When to Use Greedy Algorithms
 * - When the problem exhibits the Greedy Choice Property and Optimal Substructure.
 * - When a locally optimal choice leads to a globally optimal solution.
 * - When the problem can be broken down into smaller subproblems that can be solved independently.
 * - When efficiency is crucial, as greedy algorithms are often faster and simpler than other approaches like dynamic programming.
 *
 * 05. Limitations of Greedy Algorithms
 * - Greedy algorithms do not always yield the optimal solution for all problems.
 * - They can lead to suboptimal solutions if the problem does not exhibit the necessary properties.
 * - It's essential to analyze the problem carefully before applying a greedy approach.
 * - In some cases, a greedy algorithm may need to be combined with other techniques to achieve the desired outcome.
 *
 * Coin Change Problem Example:
 * - Given a set of coin denominations and a target amount,
 *   the goal is to make change for the target amount using the fewest number of coins.
 * - A greedy approach would involve always selecting the largest denomination coin that does not exceed the remaining amount.
 *  - This process is repeated until the target amount is reached.
 * - Note: The greedy approach works optimally for certain coin systems (like US coins),
 *   but may not yield the best solution for arbitrary coin denominations.
 *
 * @param {number[]} coins - array of coin denominations
 * @param {number} amount - target amount to make change for
 * @return {number} - minimum number of coins needed to make change, or -1 if not possible
 *
 * Knapsack Problem (Fractional) Example:
 * - Given a set of items, each with a weight and a value,
 *  the goal is to maximize the total value in the knapsack without exceeding its weight capacity.
 * - A greedy approach would involve calculating the value-to-weight ratio for each item,
 *  sorting the items based on this ratio, and then adding items to the knapsack starting from the highest ratio,
 *  allowing for fractional parts of items if necessary.s
 * @param {Object[]} items - array of items, each with 'value' and 'weight' properties
 * @param {number} capacity - maximum weight capacity of the knapsack
 * @return {number} - maximum value achievable within the weight capacity
 *
 * Types of Problems Suitable for Greedy Algorithms:
 * - Optimization Problems: Problems that require finding the best solution among many possible solutions.
 *   - Activity Selection Problem (scheduling activities to maximize the number of non-overlapping activities)
 *   - Fractional Knapsack Problem (maximizing value in a knapsack with fractional items)
 *   - Interval Scheduling (selecting the maximum number of non-overlapping intervals)
 *   - Job Scheduling Problem with deadlines (scheduling jobs to minimize total completion time)
 * - Graph Problems: Problems that involve traversing or searching through graphs.
 *   - MST: Prim's and Kruskal's Algorithms for Minimum Spanning Tree
 *   - Shortest Path: Dijkstra's Algorithm
 * - Scheduling Problems: Problems that involve allocating resources over time.
 *   - Activity Selection Problem
 *   - CPU Scheduling Algorithms (like Shortest Job First)
 *   - Job Scheduling with Deadlines
 * - Resource Allocation Problems: Problems that involve distributing resources efficiently.
 *   - Coin Change Problem
 *   - Load Balancing
 *   - Network Routing
 * - Data Compression Problems: Problems that involve encoding data efficiently.
 *   - Huffman Coding
 * - Game Theory Problems: Problems that involve making optimal decisions in competitive scenarios.
 *   - Optimal Strategy in Games
 * - Puzzle and Recreational Problems: Problems that involve finding solutions to puzzles or games.
 *   - Egyptian Fraction Representation
 *   - Set Cover Problem
 *
 * Greedy Problems Hints
 * - Max number of...
 * - Min cost/Max Profit...
 * - scheduling.../allocation.../assign efficiently...
 * - shortest path.../smallest distance.../largest capacity...(with certain constraints)
 * - non-overlapping.../independent...
 * - optimal strategy.../best way to...
 */
