/** Topological Sort
 * a linear ordering of vertices in a directed acyclic graph (DAG)
 * such that for every directed edge uv from vertex u to vertex v,
 * u comes before v in the ordering.
 * It is commonly used in scenarios like task scheduling,
 * where certain tasks must be completed before others.
 *
 * -------->5 ----------> 2
 * |        |             |
 * 7         ------>4      ------> 1 ----> 0
 * |        |              |
 * -------->6 -----------> 3
 *
 * Topological Sort of the above graph can be:
 * 7, 6, 5, 4, 3, 2, 1, 0
 *
 * Example: NPM package manager uses topological so  rt to determine the order of installing packages based on their dependencies.
 *
 * https://www.leetcode.com/problems/topological-sort/description/
 * Given a directed acyclic graph (DAG) with n vertices and adjacency list adj,
 * return a topological ordering of its vertices.
 *
 * Example 1:
 * Input: n = 3, adj = [[1], [2], []]
 * Output: [0, 1, 2]
 * Explanation: The graph has three vertices 0, 1, and 2.
 *              The edges are 0 -> 1 and 1 -> 2.
 *              A valid topological ordering is [0, 1, 2].
 * Example 2:
 * Input: n = 4, adj = [[1, 2], [3], [3], []]
 * Output: [0, 1, 2, 3]
 * Explanation: The graph has four vertices 0, 1, 2, and 3.
 *              The edges are 0 -> 1, 0 -> 2, 1 -> 3, and 2 -> 3.
 *              A valid topological ordering is [0, 1, 2, 3].
 * Example 3:
 * Input: n = 1, adj = [[]]
 * Output: [0]
 * Explanation: The graph has one vertex 0 and no edges.
 *              A valid topological ordering is [0].
 *
 * Constraints:
 * - 1 <= n <= 10^4
 * 0 <= adj[i].length <= n - 1
 * 0 <= adj[i][j] <= n - 1
 * The graph is a directed acyclic graph (DAG).
 * There are no self-loops or duplicate edges in the graph.
 */

// Topological Sort using DFS
function topologicalSortDFS(n, adj) {
  //   const visited = new Array(n).fill(false);
  const ans = [];
  const visited = new Set();

  const dfs = (curr) => {
    visited.add(curr);
    for (let neighbor of adj[curr]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    ans.push(curr);
  };
  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }
  return ans.reverse();
}
