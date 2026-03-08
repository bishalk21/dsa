/** Depth-First Search (DFS)
 * - a graph traversal algorithm that explores as far as possible along each branch before backtracking.
 * - DFS uses a stack data structure to keep track of the vertices to be explored next.
 *
 * Data Structures involved: Graphs, Stacks, Trees, Matrices, etc.
 *
 * The basic idea is to use a stack to keep track of the vertices to be explored.
 * The algorithm starts by pushing the source vertex onto the stack and marking it as visited.
 * Then, it repeatedly pops a vertex from the stack, processes it, and pushes all its unvisited neighbors onto the stack until the stack is empty.
 *
 * Example problems that can be solved using the DFS technique include:
 * - Finding a path in a graph.
 * - Topological sorting of a directed acyclic graph (DAG).
 * - Detecting cycles in a graph.
 * - Solving puzzles like the maze problem or the knight's tour problem.
 */
