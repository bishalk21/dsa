/** Find if Path Exists in Graph
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 *
 * There is a bi-directional graph with n vertices,
 * where each vertex is labeled from 0 to n - 1 (inclusive).
 * The edges in the graph are represented as a 2D integer array edges,
 * where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi.
 * Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
 * You want to determine if there is a valid path that exists from vertex source to vertex destination.
 * Given edges and the integers n, source, and destination,
 * return true if there is a valid path from source to destination, or false otherwise.
 *
 * Example 1:
 *            0 - 1
 *             \ /
 *              2
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
 *              - 0 → 1 → 2
 *              - 0 → 2
 *
 * Example 2:
 *          0          3 - 5
 *        /  \          \ /
 *       1    2          4
 * Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
 * Output: false
 * Explanation: There is no path from vertex 0 to vertex 5.
 *
 * Constraints:
 * - 1 <= n <= 2 * 10^5
 * - 0 <= edges.length <= 2 * 10^5
 * - edges[i].length == 2
 * - 0 <= ui, vi <= n - 1
 * - ui != vi
 * - There are no duplicate edges.
 * - There are no self edges.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

/** Algorithm: Breadth-First Search (BFS)
 * - We can use a breadth-first search (BFS) approach to find if there is a valid path from source to destination.
 * - We will build an adjacency list from the given edges to represent the graph.
 * - We will maintain a queue to explore the graph level by level and
 *   a set to keep track of visited vertices to avoid cycles and redundant checks.
 * - We will start by enqueueing the source vertex and marking it as visited.
 * - We will then repeatedly dequeue a vertex from the queue, check if it is the destination vertex,
 *   and if not, enqueue all its unvisited neighbors and mark them as visited.
 * - If we find the destination vertex during our exploration, we will return true.
 * - If we exhaust the queue without finding the destination vertex, we will return false.
 *
 * Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges in the graph.
 * Space Complexity: O(V), where V is the number of vertices in the graph, due to the visited set and the queue.
 */

function validPath(n, edges, source, destination) {
  // build the adjacency list for the graph
  let map = {};
  for (let [x, y] of edges) {
    // if the vertex x or y is not in the map, we will initialize it with an empty array
    if (!map[x]) map[x] = [];
    if (!map[y]) map[y] = [];
    // since the graph is bi-directional,
    // we will add y to the adjacency list of x and x to the adjacency list of y
    map[x].push(y);
    map[y].push(x);
  }
  // queue for BFS
  let q = [source];
  // set to keep track of visited vertices
  let visited = new Set();
  visited.add(source); // mark the source vertex as visited

  while (q.length) {
    let currVertex = q.shift(); // dequeue a vertex from the queue
    // check if the current vertex is the destination vertex
    if (currVertex === destination) return true;
    // iterate through the neighbors of the current vertex
    for (let neighbor of map[currVertex]) {
      // if the neighbor has not been visited yet
      if (!visited.has(neighbor)) {
        q.push(neighbor); // enqueue the neighbor for further exploration
        visited.add(neighbor); // mark the neighbor as visited
      }
    }
  }
  // if we have explored all the vertices and
  // have not found the destination vertex, we will return false
  return false;
}
