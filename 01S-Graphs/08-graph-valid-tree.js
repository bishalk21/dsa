/** Graph Valid Tree
 * https://www.leetcode.com/problems/graph-valid-tree/
 *
 * A tree is an undirected graph that is connected and acyclic.
 * A graph is a valid tree if it satisfies the following conditions:
 * 1. It has exactly n - 1 edges, where n is the number of nodes in the graph.
 * 2. It is fully connected, meaning there is a path between any two nodes.
 *
 * You have a graph of n nodes labeled from 0 to n - 1.
 * You are given an integer n and a list of edges
 * where edges[i] = [ai, bi] indicates that there is an undirected edge
 * between nodes ai and bi in the graph.
 * Return true if the edges of the given graph make up a valid tree,
 * and false otherwise.
 *
 * Example 1:
 * Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 * Output: true
 * Explanation: The graph looks like this:
 *           0
 *         / | \
 *        1  2  3
 *        |
 *        4
 * There are 5 nodes and 4 edges, and the graph is fully connected.
 *
 * Example 2:
 * Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 * Output: false
 * Explanation: The graph looks like this:
 *          0 ----- 1 - 2
 *                  | \ |
 *                  4   3
 * There are 5 nodes but there are 5 edges, so it cannot be a valid tree.
 * Additionally, there is a cycle in the graph (1 - 2 - 3 - 1), so it is not a valid tree.
 *
 * Constraints:
 * 1 <= n <= 2000
 * 0 <= edges.length <= 5000
 * edges[i].length == 2
 * 0 <= ai, bi < n
 * ai != bi
 * There are no duplicate or self-loop edges.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

function validTree(n, edges) {
  // A valid tree must have exactly n - 1 edges
  if (edges.length !== n - 1) return false;
  // Build the adjacency list from the edge pairs
  let graph = {};
  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  // Perform a depth-first search (DFS) to check if the graph is fully connected
  let visited = new Set();
  let dfs = (node) => {
    visited.add(node);
    let neighbors = graph[node] || [];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  };
  dfs(0);
  // Check if all nodes were visited
  return visited.size === n;
}
