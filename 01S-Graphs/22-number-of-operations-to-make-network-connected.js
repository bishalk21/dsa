/** Number of Operations to make Network connected
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected/
 *
 * There are n computers numbered from 0 to n-1 connected by ethernet cables connections
 * forming a network where connections[i] = [a, b] represents a connection between
 * computers a and b. Any computer can reach any other computer directly or indirectly
 * through the network.
 *
 * You are given an initial computer network connections.
 * You can extract certain cables between two directly connected computers,
 * and place them between any pair of disconnected computers to make them directly connected.
 *
 * Return the minimum number of times you need to do this in order to make
 * all the computers connected. If it's not possible, return -1.
 *
 * Example 1:
 * Input: n = 4, connections = [[0,1],[0,2],[1,2]]
 * Output: 1
 * Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
 *
 * Example 2:
 * Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
 * Output: 2
 * Explanation: Remove cable between computer 1 and 2 and place between computers 2 and 5, Remove cable between computer 0 and 3 and place between computers 3 and 4.
 *
 * Example 3:
 * Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
 * Output: -1
 * Explanation: There are not enough cables.
 *
 * Constraints:
 * - 1 <= n <= 10^5
 * - 1 <= connections.length <= min(n*(n-1)/2, 10^5)
 * - connections[i].length == 2
 * - 0 <= connections[i][0], connections[i][1] < n
 * - 0 <= ai, bi < n
 * - ai != bi
 * - There are no repeated connections.
 * - No two computers are connected by more than one cable.
 *
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

/** Algorithm: BFS (Breadth First Search)
 * 1. Build the graph as an adjacency list and count the number of edges.
 * 2. If the number of edges is less than n - 1, return -1 (not enough cables).
 * 3. Use BFS to count the number of connected components in the graph.
 *    - if a computer is not visited, perform BFS from that computer and
 *      mark all reachable computers as visited. Increment the component count.
 *    - Repeat until all computers are visited.
 * 4. The number of operations needed to connect all components is the number of components - 1.
 *
 * Time Complexity: O(n + m) where n is the number of computers and m is the number of connections.
 * Space Complexity: O(n + m) for the graph and visited array.
 */

let connections = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [4, 5], [6], [7, 8]];
function makeConnected(n, connections) {
  // build the graph as an adjacency list
  let graph = Array.from({ length: n }, () => []);
  // count the number of edges
  let edgeCount = 0;

  console.log("Graph before adding edges:", graph);

  for (let [u, v] of connections) {
    // add the edge to the graph
    graph[u].push(v);
    graph[v].push(u);
    edgeCount++;

    console.log(`Added edge (${u}, ${v}), current graph:`, graph);
  }

  // if the number of edges is less than n - 1, return -1
  //   if (edgeCount < n - 1) {
  if (connections.length < n - 1) {
    return -1;
  }

  let noOfComponents = 0;
  let visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(graph, i, visited);
      noOfComponents++;
    }
  }
  return noOfComponents - 1;
}

// helper function to perform BFS and count the number of connected components
function bfs(graph, start, visited) {
  let queue = [start];
  visited[start] = true;
  while (queue.length > 0) {
    let node = queue.shift();
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}
