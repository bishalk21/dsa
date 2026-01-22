/** Dynamic Programming - Optimized Recursion with Caching
 * An optimization technique for solving complex problems by
 * breaking them down into simpler/overlapping subproblems, that have optimal substructure.
 * - Overlapping Subproblems: while solving the main or big problem,
 *                            we encounter the same smaller subproblems multiple times.
 *                            Instead of recomputing the results for these subproblems,
 *                            we store their results and reuse them when needed.
 * - Optimal Substructure: The optimal solution to the main problem can be constructed
 *                         from optimal solutions of its subproblems.
 *
 * DP is all about storing (caching) and reusing results of smaller subproblems,
 * instead of recomputing them multiple times
 * to avoid redundant computations and improve efficiency.
 *
 * - Richard Bellman, 1950s (coined the term)
 * - applied mathematics, computer science, economics, bioinformatics, optimizations
 * - intelligently lazy (caching + recursion)
 * - DRY principle (Don't Repeat Yourself)
 *   - why recompute the same thing multiple times? while we can store the results and reuse them
 * - Google search algorithms, route planning, resource allocation, machine learning
 * - DNA sequence alignment, speech recognition, financial modeling
 * - stock market prediction, natural language processing, robotics, video game AI
 *
 * Common Problems:
 * - 1D Problems:
 *   - Fibonacci Sequence
 *   - Climbing Stairs
 *   - House Robber
 *   - Coin Change
 *   - Maximum Subarray
 * - 2D Problems:
 *   - Unique Paths
 *   - Minimum Path Sum
 *   - Edit Distance
 *   - Grid Traveler
 *   - Knapsack Problem
 * - Subsequences Problems:
 *   - Longest Common Subsequence LCS
 *   - Longest Increasing Subsequence LIS
 *   - Palindromic Substrings
 *   - Subset Sum Problem
 * - String Problems:
 *   - Word Break Problem
 *   - Palindrome Partitioning
 * - Tree and Graph Problems:
 *   - Decode Ways
 *   - Counting Paths in a Grid
 *   - DP with DFS/BFS
 * - Bitmasking DP Problems:
 *   - Traveling Salesman Problem TSP
 *   - Subset DP
 * - Matrix Chain Multiplication
 * - Egg Dropping Problem
 * - Partition Problem
 *
 * DP vs Greedy Algorithms
 * - Greedy algorithms make locally optimal choices at each step,
 *   hoping to find a global optimum.
 * - DP considers all possible solutions and stores results of subproblems and
 *   builds up to the final solution.
 *
 * Time Complexity: Varies based on the problem and approach (top-down or bottom-up).
 * Space Complexity: Varies based on the problem and approach (top-down or bottom-up).
 */
