/** Breadth-First Search (BFS)
 * - a graph traversal algorithm that explores all the vertices of a graph in breadth-first order.
 *   It starts at a given source vertex and explores all its neighbors
 *   before moving on to the neighbors' neighbors, and so on.
 * - BFS uses a queue data structure to keep track of the vertices to be explored next.
 *
 * Data Structures involved: Graphs, Queues, Trees, Matrices, etc.
 *
 * The basic idea is to use a queue to keep track of the vertices to be explored.
 * The algorithm starts by enqueueing the source vertex and marking it as visited.
 * Then, it repeatedly dequeues a vertex, processes it, and
 * enqueues all its unvisited neighbors until the queue is empty.
 *
 * Example problems that can be solved using the BFS technique include:
 * - Finding the shortest path in an unweighted graph.
 * - Level order traversal of a binary tree.
 * - Finding all connected components in a graph.
 * - Solving puzzles like the sliding puzzle or the knight's tour problem.
 */
