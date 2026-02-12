/** Find All Paths from Source to Target
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 *
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
 * find all possible paths from node 0 to node n - 1 and return them in any order.
 *
 * The graph is given as follows: graph[i] is a list of all nodes you can visit from node i
 * (i.e., there is a directed edge from node i to node graph[i][j]).
 *
 * Example 1:
 *      0 → 1
 *      ↓   ↓
 *      2 → 3
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 → 1 → 3 and 0 → 2 → 3.
 *
 * Example 2:
 *   ______
 *  |      |
 *  |  0 → 1
 *  ↓ / \ / \
 *  4 <- 3 <-2
 * Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
 * Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4], [0,1,4]]
 * Explanation: The graph has the following paths:
 *              0 → 4
 *              0 → 3 → 4
 *              0 → 1 → 3 → 4
 *              0 → 1 → 2 → 3 → 4
 *              0 → 1 → 4
 * Constraints:
 * - n == graph.length
 * - 2 <= n <= 15
 * - 0 <= graph[i][j] < n
 * - graph[i][j] != i (i.e., there will be no self-loops).
 * - all elements of graph[i] are unique.
 * - The input graph is guaranteed to be a DAG.
 *
 * @param {number[][]} graph
 * @return {number[][]}
 */

/** Algorithm: Depth-First Search (DFS) + Backtracking
 * - We can use a depth-first search (DFS) approach to find all paths from source to target in the DAG.
 * - We start from the source node (0) and explore all possible paths recursively.
 * - We keep track of the current path and add it to the result when we reach the target node (n - 1).
 * - After exploring a path, we backtrack by removing the last node from the current path and continue exploring other paths.
 * - Since the graph is a DAG, we do not need to worry about cycles and can safely explore all paths.
 *
 * Time Complexity: O(2^n) in the worst case, where n is the number of nodes in the graph,
 *                 because in a DAG, each node can potentially lead to multiple paths.
 * Space Complexity: O(n) for the recursion stack and the current path storage.
 */

function allPathsSourceTarget(graph) {
  // graph = [[1,2],[3],[]]
  let allPaths = []; // to store all the paths from source to target
  let start = 0; // source node - graph[0] = [1, 2]
  let target = graph.length - 1; // target node - graph[2] = []
  // explore all paths from the source node to the target node using DFS
  // dfs function takes the current node and the path taken to reach that node as arguments
  let dfs = (currNode, path) => {
    // at certain point, we will reach the target node (n - 1)
    if (currNode === target) {
      // if we reach the target node, we will add the current path to the result
      allPaths.push([...path]);
      /*
       * path = [0, 1, 3]
       * allPaths = [[0, 1, 3]]
       */
      return; // backtrack to explore other paths
    }
    // explore the neighbors of the current node
    for (let neighbor of graph[currNode]) {
      // create a new path by adding the neighbor to the current path
      path.push(neighbor);
      // explore the neighbor node recursively
      dfs(neighbor, path);
      // backtrack by removing the last node from the path
      path.pop();
      // this will continuously explore all possible paths from the source node to the target node
    }
  };
  dfs(start, [start]);
  return allPaths;
}
