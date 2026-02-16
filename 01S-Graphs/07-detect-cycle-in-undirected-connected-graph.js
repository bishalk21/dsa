/** Detect Cycle in Undirected Connected Graph
 * https://www.leetcode.com/problems/graph-valid-tree/
 *
 * You receive the graph as an array of edge pair edges,
 * where each pair [u,v] represents a bidirectional edge between nodes u and v.
 * Implement hasCycle(edges) that:
 * - builds an adjacency list from those pairs,
 * - starts a depth-first search (DFS) from the first node in the graph, and
 * - return true as soon as an DFS encounters a neighbor
 *   that has already been visited and is not the parent of the current node.
 * - If the DFS completes without finding such a neighbor, return false.
 * - Note: The graph is connected, meaning there is a path between any two nodes.
 *
 * Example 1:
 * Input: edges = [[0,1],[1,2]]
 * Output: false
 * Explanation: The graph looks like this: 0 -- 1 -- 2
 *              There are no cycles in this graph.
 * Example 2:
 * Input: edges = [[0,1],[1,2],[2,0]]
 * Output: true
 * Explanation: The graph looks like this:
 *              0 -- 1
 *              |    |
 *              2 ---
 *              There is a cycle in this graph: 0 -- 1 -- 2 -- 0
 *
 * Constraints:
 * Nodes are assumed to be integers that can act as object keys (e.g., 0, 1, 2, etc.).
 * edges should always include the component that contains the first node (i.e., the graph is connected).
 * inputs are expected to be well-formed arrays of two-item arrays;
 * no explicit validation is performed for malformed input.
 * self-loops or malformed inputs can lead to
 * unexpected results because no guards are present.
 *
 * @param {number[][]} edges
 * @return {boolean}
 */

/** Algorithm: DFS for Cycle Detection in Undirected Graphs
 * Keeping track of visited nodes using DFS only is not sufficient for cycle detection in undirected graphs,
 * because the DFS will revisit the parent node of the current node, which is not a cycle.
 * To accurately detect cycles, we need to keep track of the parent node during the DFS traversal.
 * If we encounter a neighbor that has already been visited and is not the parent of the current node,
 * then we have found a cycle in the graph.
 * 1. Build an adjacency list representation of the graph from the given edges.
 * 2. Perform a depth-first search (DFS) starting from node 0.
 * 3. During DFS, track visited nodes and the parent of each node.
 * 4. If a neighbor is already visited and is not the parent of the current node, a cycle is detected.
 * 5. Return true if a cycle is found, otherwise return false.
 * The time complexity of this algorithm is O(V + E), where V is the number of vertices and E is the number of edges,
 * due to the need to visit each vertex and edge once during the DFS traversal.
 * The space complexity is O(V + E) for the adjacency list and the visited set.
 */

function hasCycle(edges) {
  // 1. Build the adjacency list from the edge pairs
  const graph = {};
  for (const [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  // 2. Start a depth-first search (DFS) from the first node in the graph
  const visited = new Set();
  let dfs = (curr, parent) => {
    visited.add(curr);
    let neighbors = graph[curr] || [];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        return dfs(neighbor, curr);
      } else if (neighbor !== parent) {
        // 3. Return true as soon as an DFS encounters a neighbor
        //    that has already been visited and is not the parent of the current node
        return true;
      }
    }
    return false;
  };
  return dfs(0, -1);
}
