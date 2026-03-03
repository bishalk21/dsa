/** Bellman-Ford Algorithm for finding shortest paths in graphs with negative edge weights
 * The Bellman-Ford algorithm is a dynamic programming algorithm used to find the shortest paths
 * from a single source vertex to all other vertices in a graph,
 * even when the graph contains edges with negative weights.
 *
 * It is particularly useful for graphs that may have negative weight edges,
 * as it can detect negative weight cycles.
 * The algorithm works by relaxing all edges repeatedly for (V-1) iterations,
 * where V is the number of vertices in the graph.
 * During each iteration, it updates the shortest path estimates for each vertex based on the edges and their weights.
 *
 * Relaxation is the process of updating the shortest path estimate for a vertex if a shorter path is found through an edge.
 *
 * If there is a negative weight cycle reachable from the source vertex,
 * the algorithm can detect it by performing one additional iteration and checking for any further relaxation.
 *
 * The time complexity of the Bellman-Ford algorithm is O(V * E),
 * where V is the number of vertices and E is the number of edges in the graph.
 * This makes it less efficient than Dijkstra's algorithm for graphs without negative weight edges,
 * but it is necessary for graphs that do contain negative weight edges.
 *
 * The space complexity is O(V) for storing the distances from the source vertex to all other vertices.
 *
 * The Bellman-Ford algorithm can be implemented using an adjacency list or an adjacency matrix
 * to represent the graph, and it can be used in various applications such as network routing, currency exchange, and more.
 *
 * Bellman-Ford Algorithm does not work with negative weight cycles, as it will keep reducing the path cost indefinitely.
 * If a negative weight cycle is reachable from the source vertex, the algorithm can detect it by performing one additional iteration and checking for any further relaxation.
 * If any distance can be reduced further, then there is a negative weight cycle in the graph.
 *
 * leetcode: https://leetcode.com/problems/shortest-path-with-alternating-colors/
 */

let edges = [
  // [source u, destination v, weight w]
  [0, 1, 5],
  [0, 2, 3],
  [1, 2, -2],
  [1, 3, 6],
  [2, 3, 7],
  [2, 4, 4],
  [3, 4, -1],
];

function bellmanFord(vertices, edges, source) {
  // Step 1: Initialize distances from source to all vertices as infinite and distance to the source itself as 0
  let distances = new Array(vertices).fill(Infinity);
  distances[source] = 0;
  // Step 2: Relax all edges |V| - 1 times
  for (let i = 0; i < vertices - 1; i++) {
    // updated flag to check if any distance was updated in this iteration
    let updated = false;
    for (let [u, v, w] of edges) {
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
        updated = true;
      }
    }
    if (!updated) {
      break; // No updates in this iteration, so we can stop early
    }
  }
  // Step 3: Check for negative-weight cycles
  for (let [u, v, w] of edges) {
    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      console.log("Graph contains a negative weight cycle");
      return;
    }
  }
  return distances;
}

let vertices = 5; // Number of vertices in the graph
let source = 0; // Source vertex
let shortestPaths = bellmanFord(vertices, edges, source);
console.log(
  "Shortest paths from source vertex " + source + ": ",
  shortestPaths,
);

/**
 * Shortest path with Alternating Colors
 * https://leetcode.com/problems/shortest-path-with-alternating-colors/
 *
 * You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1.
 * Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
 * You are given two arrays redEdges and blueEdges where:
 * * redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
 * * blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
 * Return an array answer of length n,
 * where each answer[x] is the length of the shortest path from node 0 to node x
 * such that the edge colors alternate along the path, or -1 if such a path does not exist.
 *
 * Example 1:
 * Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
 * Output: [0,1,-1]
 * * Explanation: The graph is shown above. The shortest path from node 0 to node 2 with alternating colors is: 0 -> 1 -> 2.
 *   The path has length 2, but it is not alternating since both edges are red.
 *   The shortest path from node 0 to node 1 is: 0 -> 1.
 *   The path has length 1 and it is alternating since the edge is red.
 *   There is no path from node 0 to node 2 that satisfies the conditions, so answer[2] = -1.
 *
 * Example 2:
 * Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
 * Output: [0,1,-1]
 * Explanation: The graph is shown above. The shortest path from node 0 to node 2 with alternating colors is: 0 -> 1 -> 2.
 * The path has length 2, but it is not alternating since both edges are red. The shortest path from node 0 to node 1
 * The path has length 1 and it is alternating since the edge is red.
 * There is no path from node 0 to node 2 that satisfies the conditions, so answer[2] = -1.
 *
 * Constraints:
 * 1 <= n <= 100
 * 0 <= redEdges.length, blueEdges.length <= 400
 * redEdges[i].length == blueEdges[j].length == 2
 * 0 <= ai, bi, uj, vj < n
 *
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */

/** Algorithm Approach: BFS
 *
 */

var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  // Create adjacency lists for red and blue edges
  const redGraph = new Map();
  const blueGraph = new Map();
  for (const [u, v] of redEdges) {
    if (!redGraph.has(u)) redGraph.set(u, []);
    redGraph.get(u).push(v);
  }
  for (const [u, v] of blueEdges) {
    if (!blueGraph.has(u)) blueGraph.set(u, []);
    blueGraph.get(u).push(v);
  }
  // Initialize distances and visited sets
  const distances = new Array(n).fill(-1);
  distances[0] = 0;
  const visitedRed = new Set();
  const visitedBlue = new Set();
  // BFS queue: [node, color, distance]
  const queue = [
    [0, "red", 0],
    [0, "blue", 0],
  ];
  while (queue.length > 0) {
    const [node, color, dist] = queue.shift();
    const nextColor = color === "red" ? "blue" : "red";
    const graph = nextColor === "red" ? redGraph : blueGraph;
    const visited = nextColor === "red" ? visitedRed : visitedBlue;
    if (graph.has(node)) {
      for (const neighbor of graph.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          if (distances[neighbor] === -1) {
            distances[neighbor] = dist + 1;
          }
          queue.push([neighbor, nextColor, dist + 1]);
        }
      }
    }
  }
  return distances;
};
