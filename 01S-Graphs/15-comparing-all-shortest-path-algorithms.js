/** Comparing All Shortest Path Algorithms
 * In graph theory, there are several algorithms to find the shortest path between vertices in a graph.
 * The choice of algorithm depends on the specific requirements of the problem,
 * such as whether the graph is directed or undirected, whether it contains negative weight edges,
 * and whether we need to find the shortest path from a single source or between all pairs of vertices.
 *
 * Here, we will compare four popular shortest path algorithms:
 * 1. BFS (Breadth-First Search):
 *    - explores the graph level by level,
 *      starting from the source vertex and
 *      visiting all its neighbors before moving on to the neighbors' neighbors.
 *    - for unweighted graphs
 *    - for finding the shortest path from a single source to all other vertices
 *    - Time Complexity: O(V + E) - where V is the number of vertices and E is the number of edges.
 *    - Space Complexity: O(V) - for the queue and visited set.
 *    - Real World Use Cases: social networks (finding the shortest connection between two people),
 *                            web crawling (finding the shortest path between web pages), and
 *                            network broadcasting (finding the shortest path for data packets).
 *
 * 2. Dijkstra's Algorithm - for weighted graphs with non-negative edges
 * 3. Bellman-Ford Algorithm - for weighted graphs with negative edges
 * 4. Floyd-Warshall Algorithm - for finding shortest paths between all pairs of vertices
 */

let graphA = [
  [1, 2], // edges from vertex 0
  [3], // edges from vertex 1
  [4], // edges from vertex 2
  [5], // edges from vertex 3
  [3], // edges from vertex 4
  [], // edges from vertex 5
];
let graphB = {
  0: [1, 2],
  1: [3],
  2: [4],
  3: [5],
  4: [3],
  5: [],
};
let source = 0;
