/** Shortest Path in Unweighted Graph using BFS
 * There are various algorithms to find the shortest path in a graph,
 * - BFS (Breadth-First Search) is used for unweighted graphs.
 * - Dijkstra's algorithm is used for weighted graphs with non-negative weights, Priority Queue and Greedy approach.
 * - Bellman-Ford algorithm is used for weighted graphs with negative weights, Dynamic Programming approach.
 * - Floyd-Warshall algorithm is used for finding shortest paths in a weighted graph
 *   with positive or negative edge weights (but with no negative cycles), Dynamic Programming approach.
 *
 * BFS is an algorithm for traversing or searching tree or graph data structures.
 * It starts at the tree root (or an arbitrary node of a graph, sometimes referred to as a 'search key') and
 * explores the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
 * BFS uses a queue data structure to keep track of the next location to visit.
 *
 * In an unweighted graph, BFS can be used to find the shortest path from a source vertex to all other vertices
 * because it explores all vertices at the present depth level before moving on to the next level.
 * Given an unweighted directed graph and a source vertex,
 * find the shortest path from the source to all other vertices.
 *
 * Example:
 * Input: n = 4, edges = [[0,1],[1,2],[2,3]], source = 0
 * Output: [0, 1, 2, 3]
 * Explanation: The shortest path from vertex 0 to all other vertices is:
 *              0 -> 1 (distance 1)
 *              0 -> 1 -> 2 (distance 2)
 *              0 -> 1 -> 2 -> 3 (distance 3)
 *
 * Constraints:
 * - The graph is unweighted.
 * - The graph is directed.
 * - There are no self-loops or duplicate edges.
 */

const graph = [
  [1, 2], // edges from vertex 0
  [3], // edges from vertex 1
  [4], // edges from vertex 2
  [5], // edges from vertex 3
  [3], // edges from vertex 4
  [], // edges from vertex 5
];

function shortestDistance(graph, source) {
  let n = graph.length;
  // to store the shortest distance from source to each vertex
  let distances = new Array(n).fill(Infinity);
  distances[source] = 0; // distance from source to itself is always 0
  let q = [source]; // queue for BFS

  while (q.length) {
    let curr = q.shift(); // dequeue the front vertex
    // explore all neighbors of the current vertex
    for (let neighbor of graph[curr]) {
      // if the neighbor has not been visited (distance is still Infinity)
      if (distances[neighbor] === Infinity) {
        // update the distance to the neighbor
        distances[neighbor] = distances[curr] + 1;
        q.push(neighbor); // enqueue the neighbor for further exploration
      }
    }
  }
  return distances;
}

console.log(shortestDistance(graph, 0)); // Output: [0, 1, 1, 2, 2, 3]

function shortestPath(graph, source, destination) {
  let n = graph.length; // number of nodes
  let distances = new Array(n).fill(Infinity); // store the shortest distance from source to each vertex
  let parents = new Array(n).fill(-1); // to store the parent of each vertex for path reconstruction
  distances[source] = 0;
  let q = [source];
  while (q.length) {
    let curr = q.shift();
    for (let neighbor of graph[curr]) {
      if (distances[neighbor] === Infinity) {
        distances[neighbor] = distances[curr] + 1;
        parents[neighbor] = curr;
        q.push(neighbor);
      }
    }
  }
  if (distances[destination] === Infinity) {
    return; // if the destination is unreachable
  }
  // using the parents array,
  // we can reconstruct the path from destination back to source
  let path = [];
  let curr = destination;
  path.push(curr);
  while (parents[curr] !== -1) {
    curr = parents[curr];
    path.push(curr);
  }
  return path.reverse().join(" ");
}

/** Unweighted Graphs + Undirected
 * Given an unweighted undirected graph of V nodes or vertices and E edges, and a source vertex S,
 * and a destination vertex D, find the shortest path from S to D in the graph.
 *
 * Example 1:
 * Input: V = 8, E = 10, S = 0, D = 7, edges[][] = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 7], [3, 7], [6, 7], [4, 5], [4, 6], [5, 6]]
 * Output: 0 -> 3 -> 7
 * Explanation: The shortest path from vertex 0 to vertex 7 is:
 *              0 -> 3 -> 7 (distance 2)
 *
 * Example 2:
 * Input: V = 8, E = 10, S = 2, D = 6, edges[][] = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 7], [3, 7], [6, 7], [4, 5], [4, 6], [5, 6]]
 * Output: 2 -> 1 -> 0 -> 3 -> 4 -> 6
 * Explanation: The shortest path is 2 -> 1 -> 0 -> 3 - > 4 -> 6.
 */

function shortestPath(V, E, S, D, edges) {
  // create an adjacency list to represent the graph
  let n = V; // number of vertices or nodes in the graph
  let graph = new Array(n).fill(0).map(() => []); // initialize the graph as an array of empty arrays
  for (let [u, v] of edges) {
    graph[u].push(v); // add edge u -> v
    graph[v].push(u); // add edge v -> u (since the graph is undirected)
  }
  // to store the shortest distance from source to each vertex
  let distances = new Array(n).fill(Infinity);
  let parents = new Array(n).fill(-1); // to store the parent of each vertex for path reconstruction
  distances[S] = 0; // distance from source to itself is always 0
  let q = [S]; // queue for BFS
  while (q.length) {
    let curr = q.shift(); // dequeue the front vertex
    // explore all neighbors of the current vertex
    for (let neighbor of graph[curr]) {
      // if the neighbor has not been visited (distance is still Infinity)
      if (distances[neighbor] === Infinity) {
        // update the distance to the neighbor
        distances[neighbor] = distances[curr] + 1;
        parents[neighbor] = curr; // set the parent of the neighbor to the current vertex
        q.push(neighbor); // enqueue the neighbor for further exploration
      }
    }
  }
  if (distances[D] === Infinity) {
    return "No path exists from source to destination"; // if the destination is unreachable
  }
  // how and why do we need to reconstruct the path from source to destination?
  // we need to reconstruct the path because BFS only gives us the shortest distance from source to destination,
  // but it does not give us the actual path taken to reach the destination.
  // By keeping track of the parent of each vertex, we can reconstruct the path from destination back to source.
  let path = []; // to store the shortest path from source to destination
  let curr = D; // start from the destination vertex
  path.push(curr); // add the destination vertex to the path
  while (parents[curr] !== -1) {
    curr = parents[curr]; // move to the parent vertex
    path.push(curr); // add the parent vertex to the path
  }
  return path.reverse().join(" "); // reverse the path to get the correct order from source to destination
}

console.log(
  shortestPath(8, 10, 0, 7, [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [4, 7],
    [3, 7],
    [6, 7],
    [4, 5],
    [4, 6],
    [5, 6],
  ]),
); // Output: "0 3 7"
