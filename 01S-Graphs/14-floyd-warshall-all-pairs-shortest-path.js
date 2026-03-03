/** Floyd-Warshall Algorithm for All-Pairs Shortest Path
 * cSpell:ignore Warshall
 * The Floyd-Warshall algorithm is a dynamic programming algorithm used to find the shortest paths in a weighted graph
 * with positive or negative edge weights (but with no negative cycles).
 * It works by iteratively updating a distance matrix that represents the shortest path between
 * every pair of vertices in the graph.
 *
 * The algorithm initializes the distance matrix with the direct edge weights between vertices, and then
 * iteratively updates the matrix by considering each vertex as an intermediate point in the path.
 * If the path through the intermediate vertex is shorter than the previously known path, the distance matrix is updated.
 *
 * The main idea is to check if the path from vertex i to vertex j through vertex k is shorter than the current known path from i to j.
 * i -> k -> j, where k is the intermediate vertex.
 *
 * for each vertex k in the graph:
 * Matrix[i][j] = min(Matrix[i][j], Matrix[i][k] + Matrix[k][j])
 *
 * The algorithm has a time complexity of O(V^3), where V is the number of vertices in the graph.
 * The space complexity is O(V^2) due to the distance matrix.
 * The algorithm can be used to find the shortest path between all pairs of vertices in a graph,
 * and it can also be used to detect negative cycles in the graph.
 *
 * https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/
 *
 * There are n cities numbered from 0 to n-1. Given the array edges
 * where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi,
 * and given the integer distanceThreshold,
 * return the city with the smallest number of cities that are reachable through some path and
 * whose distance is at most distanceThreshold,
 * If there are multiple such cities, return the city with the greatest number.
 *
 * Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.
 *
 * Example 1:
 * Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
 * Output: 3
 * Explanation: The distance from city 0 to city 1 is 3, from city 0 to city 2 is 4, and from city 0 to city 3 is 5.
 * The distance from city 1 to city 0 is 3, from city 1 to city 2 is 1, and from city 1 to city 3 is 2.
 * The distance from city 2 to city 0 is 4, from city 2 to city 1 is 1, and from city 2 to city 3 is 1.
 * The distance from city 3 to city 0 is 5, from city 3 to city 1 is 2, and from city 3 to city 2 is 1.
 * The number of reachable cities at a distance threshold of 4 for each city is:
 * City 0 -> 2 reachable cities (City 1 and City 2)
 * City 1 -> 3 reachable cities (City 0, City 2, and City 3)
 * City 2 -> 3 reachable cities (City 0, City 1, and City 3)
 * City 3 -> 2 reachable cities (City 1 and City 2)
 * City 3 has the smallest number of reachable cities at a distance threshold of 4, so we return 3.
 *
 * Example 2:
 * Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
 * Output: 0
 * Explanation: The distance from city 0 to city 1 is 2, from city 0 to city 4 is 8, from city 0 to city 2 is 5, from city 0 to city 3 is 6.
 * The distance from city 1 to city 0 is 2, from city 1 to city 2 is 3, from city 1 to city 4 is 2, from city 1 to city 3 is 4.
 * The distance from city 2 to city 0 is 5, from city 2 to city 1 is 3, from city 2 to city 4 is 3, from city 2 to city 3 is 1.
 * The distance from city 3 to city 0 is 6, from city 3 to city 1 is 4, from city 3 to city 2 is 1, from city 3 to city 4 is 1.
 * The distance from city 4 to city 0 is 8, from city 4 to city 1 is 2, from city 4 to city 2 is 3, from city 4 to city 3 is 1.
 * The number of reachable cities at a distance threshold of 2 for each city is:
 * City 0 -> 1 reachable city (City 1)
 * City 1 -> 2 reachable cities (City 0 and City 4)
 * City 2 -> 1 reachable city (City 3)
 * City 3 -> 1 reachable city (City 2)
 * City 4 -> 1 reachable city (City 1)
 * City 0 has the smallest number of reachable cities at a distance threshold of 2, so we return 0.
 *
 * Constraints:
 * - 2 <= n <= 100
 * - 1 <= edges.length <= n * (n-1) / 2
 * - edges[i].length == 3
 * - 0 <= fromi < toi < n
 * - 1 <= weighti <= 100
 * - 1 <= distanceThreshold <= 100
 * All pairs (fromi, toi) are distinct.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

let edges = [
  [0, 1, 2],
  [1, 0, 7],
  [1, 2, 3],
  [2, 1, 8],
  [2, 3, 2],
  [3, 0, 1],
  [3, 1, 5],
];
let n = 4;

function floydWarshall(n, edges) {
  // Initialize the distance matrix with Infinity
  let dist = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity)),
  );
  // Fill the distance matrix with the given edges
  for (let [u, v, w] of edges) {
    // this is for directed edges
    // dist[u][v] = w;
    // for undirected edges, we need to update both dist[u][v] and dist[v][u]
    dist[u][v] = Math.min(dist[u][v], w); // In case of multiple edges between the same vertices, take the minimum weight
    dist[v][u] = Math.min(dist[v][u], w); // For undirected graph, update the reverse direction as well
  }
  // Floyd-Warshall algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (dist[i][k] === Infinity) continue; // Skip if there's no path from i to k
      for (let j = 0; j < n; j++) {
        // if (dist[i][k] + dist[k][j] < dist[i][j]) {
        //   dist[i][j] = dist[i][k] + dist[k][j];
        // }
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  return dist;
}

/** Algorithm: Floyd-Warshall
 * to find the city with the smallest number of neighbors at a threshold distance,
 * - First, we use the Floyd-Warshall algorithm to compute the shortest path distances between all pairs of cities.
 * - Then, we iterate through the distance matrix to count the number of reachable cities for each city that are within the distance threshold.
 * - Finally, we keep track of the city with the smallest count of reachable cities, and in case of a tie, we choose the city with the greatest number.
 *
 * Time Complexity: O(n^3) - The algorithm iterates through all pairs of vertices and for each pair, it checks all possible intermediate vertices.
 * Space Complexity: O(n^2) - The distance matrix requires O(n^2) space to store the shortest path distances between all pairs of vertices.
 */

function findTheCity(n, edges, distanceThreshold) {
  let dist = floydWarshall(n, edges);
  let bestCount = Infinity; // Initialize bestCount to Infinity to find the minimum
  let bestCity = -1; // Initialize bestCity to -1 to handle the case when no city is found
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && dist[i][j] <= distanceThreshold) {
        count++;
      }
    }
    if (count < bestCount || (count === bestCount && i > bestCity)) {
      bestCount = count;
      bestCity = i;
    }
  }
  return bestCity;
}
