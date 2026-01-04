/** Backtracking
 * a recursive algorithmic technique for solving problems incrementally,
 * building candidates to the solutions (by trying partial solutions),
 * and abandoning each partial candidate ("backtracking")
 * as soon as it is determined that
 * this candidate cannot possibly lead to a valid solution
 * (they fail to satisfy the problem constraints).
 *
 * exploring all possibilities, but being smart by abandoning wrong paths earlier
 * (pruning the search space)
 *
 * Example problems:
 * like trying all the paths in a maze and going back if you hit a dead end (a wall).
 *
 * When to use Backtracking:
 * - Combinatorial Problems: Generating combinations, permutations, or subsets.
 * - Constraint Satisfaction Problems: Sudoku, N-Queens, Crossword puzzles.
 * - Optimization Problems: Finding the best solution among many.
 * - Decision Problems: Problems where you need to make a series of choices.
 * - Problems with a Clear Recursive Structure: Problems that can be broken down into smaller subproblems.
 * - No. of combinations is too large for brute-force but can be pruned so you abandon
 *   the invalid paths early.
 *
 * Try a choice ---> works? continue ---> solution found (if notm undo("backtrack") and try next choice
 * fails? undo("backtrack") and try next choice ---> all choices exhausted? return failure
 *
 * - Backtracking is often implemented using recursion,
 *   where the recursive function explores different choices
 *   and backtracks when a choice leads to an invalid state.
 * - It is important to define the base case(s) for the recursion
 *   to ensure that the algorithm terminates correctly.
 * - uses depth-first search (DFS) to explore all possible configurations
 *   of a solution space.
 * - also uses branch-and-bound technique to prune branches
 *   that cannot lead to a valid solution.
 *
 * Problems:
 * - N-Queens Problem
 * - Sudoku Solver
 * - Combination Sum
 * - Palindrome Partitioning
 * - Word Search
 * - Rat in a Maze
 * - Subset Sum Problem
 * - Hamiltonian Path Problem
 * - Graph Coloring Problem
 * - Crossword Puzzle Solver
 */
