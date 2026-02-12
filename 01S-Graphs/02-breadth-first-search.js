/** Breadth-First Search (BFS)
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

function bfs(node) {
  if (node === null) return;
  let q = [node]; // queue for BFS
  let visited = new Set(); // set to keep track of visited nodes
  visited.add(node); // mark the starting node as visited

  while (q.length) {
    let currNode = q.shift(); // dequeue a node from the queue
    console.log(currNode.val); // process the current node (e.g., print its value)
    // iterate through the neighbors of the current node
    for (let neighbor of currNode.neighbors) {
      // if the neighbor has not been visited yet
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // mark the neighbor as visited
        q.push(neighbor); // enqueue the neighbor for further exploration
      }
    }
  }
}
