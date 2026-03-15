/** Number of Ways to Arrive at Destination
 * https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/
 *
 * You are in a city that consists of n intersections numbered from 0 to n - 1
 * with bi-directional roads between some intersections.
 * The inputs are generated such that you can reach any intersection from any other intersection
 * and that there is at most one road between any two intersections.
 *
 * You are given an integer n, and a 2D integer array roads
 * where roads[i] = [ui, vi, timei] indicates that there is a road between intersections ui and vi
 * that takes timei minutes to travel.
 * You want to know in how many ways you can travel from intersection 0 to intersection n - 1
 * in the shortest amount of time.
 *
 * Return the number of ways you can arrive at your destination in the shortest amount of time.
 * Since the answer may be large, return it modulo 109 + 7.
 *
 * Example 1:
 * Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
 * Output: 4
 * Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
 * The four ways to get there in 7 minutes are:
 * - 0 ➝ 6
 * - 0 ➝ 4 ➝ 6
 * - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
 * - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
 *
 * Example 2:
 * Input: n = 2, roads = [[1,0,10]]
 * Output: 1
 * Explanation: There is only one way to go from intersection 0 to intersection 1, which is 0 ➝ 1.
 *
 * Constraints:
 * - 1 <= n <= 200
 * - 1 <= roads.length <= n * (n - 1) / 2
 * - roads[i].length == 3
 * - 0 <= ui, vi <= n - 1
 * - ui != vi
 * - 1 <= timei <= 10^6
 * - There is at most one road connecting any two intersections.
 * - You can reach any intersection from any other intersection.
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

/** Algorithm: Dijkstra's Algorithm
 * 1. Build the graph as an adjacency list where each intersection points to its neighbors and the time to reach them.
 * 2. Use a priority queue (min-heap) to perform Dijkstra's algorithm starting from intersection 0.
 *   - Initialize a min-heap to keep track of the next intersection to explore based on the shortest time.
 *   - Initialize a distance array to keep track of the shortest time to reach each intersection, and a ways array to count the number of ways to reach each intersection.
 *   - Set the distance to the starting intersection (0) to 0 and the number of ways to reach it to 1.
 *   - While the min-heap is not empty:
 *     - Pop the intersection with the smallest time from the min-heap.
 *     - If this time is greater than the recorded distance for this intersection, continue to the next iteration.
 *     - For each neighbor of this intersection:
 *       - Calculate the new time to reach the neighbor through this intersection.
 *       - If the new time is less than the recorded distance for the neighbor:
 *         - Update the distance for the neighbor.
 *         - Update the number of ways to reach the neighbor. Set it to the number of ways to reach the current intersection.
 *         - Push the neighbor into the min-heap with the new time.
 *       - If the new time is equal to the recorded distance for the neighbor:
 *         - Increment the number of ways to reach the neighbor by the number of ways to reach the current intersection.
 * 3. Return the number of ways to reach intersection n - 1 modulo 10^9 + 7.
 *
 * Time Complexity: O(E log V) where E is the number of roads and V is the number of intersections.
 * Space Complexity: O(V + E) for the graph representation and the distance/ways arrays.
 */

class MinPQ {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.parent(index);
      if (this.heap[index][0] > this.heap[parentIndex][0]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftIndex = this.left(index);
      let rightIndex = this.right(index);
      let smallest = index;
      if (
        leftIndex < length &&
        this.heap[leftIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < length &&
        this.heap[rightIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightIndex;
      }
      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  size() {
    return this.heap.length;
  }
  top() {
    return this.size() > 0 ? this.heap[0] : null;
  }
}

function countPaths(n, roads) {
  // create adj list
  let graph = Array.from({ length: n }, () => []);
  for (let [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }
  // Dijkstra's algorithm with path counting
  let pq = new MinPQ((x) => x[0]);
  let dist = Array(n).fill(Infinity);
  let ways = Array(n).fill(0);
  pq.insert([0, 0]); // [time, node]
  dist[0] = 0;
  ways[0] = 1;
  while (!pq.isEmpty()) {
    let [time, node] = pq.extractMin();
    if (time > dist[node]) continue;
    for (let [neighbor, w] of graph[node]) {
      let newTime = time + w;
      if (newTime < dist[neighbor]) {
        dist[neighbor] = newTime;
        ways[neighbor] = ways[node];
        pq.insert([newTime, neighbor]);
      } else if (newTime === dist[neighbor]) {
        ways[neighbor] = ways[neighbor] + ways[node];
        ways[neighbor] %= 1e9 + 7;
      }
    }
  }
  return ways[n - 1];
}
