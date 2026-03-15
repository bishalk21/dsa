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
 *
 * BFS is a graph traversal algorithm that explores all the vertices of a graph in breadth-first order.
 * It starts at a given source vertex and explores all its neighbors before
 * moving on to the neighbors' neighbors.
 * BFS uses a queue data structure to keep track of the vertices to be explored next.
 *
 *               0              <----- source vertex (also called the starting vertex)
 *             /   \            adjacent vertices (neighbors) are 1 and 2
 *           1       2          adjacent vertices (neighbors) of 1 is 3, and of 2 is 4, which is already explored
 *           |       |          adjacent vertices (neighbors) of 3 is 1, and of 4 is 2
 *           3       4
 * - In the above graph, if we start BFS from vertex 0, the order of traversal would be:
 *   0 -> 1 -> 2 -> 3 -> 4
 * - first we visit the source vertex (0), mark it as visited, and enqueue its neighbors (1 and 2).
 * - then we dequeue the next vertex (1), visit it, mark it as visited, and enqueue its neighbor (3).
 * - next, we dequeue the next vertex (2), visit it, mark it as visited, and enqueue its neighbor (4).
 * - then we dequeue the next vertex (3), visit it, mark it as visited, and enqueue its neighbor (1), which is already visited.
 * - finally, we dequeue the next vertex (4), visit it, mark it as visited, and enqueue its neighbor (2), which is already visited.
 *
 * BFS is commonly used for:
 * - Finding the shortest path in an unweighted graph.
 * - Level-order traversal of a tree.
 * - Finding all connected components in a graph.
 */

/** Template */
function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
