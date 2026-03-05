/** Min Cost to Connect All Points
 * https://leetcode.com/problems/min-cost-to-connect-all-points/
 *
 * You are given an array points representing
 * integer coordinates of some points on a 2D-plane,
 * where points[i] = [xi, yi].
 *
 * The cost of connecting two points [xi, yi] and [xj, yj] is
 * the manhattan distance between them: |xi - xj| + |yi - yj|,
 * where |val| denotes the absolute value of val.
 *
 * [0,0] and [2,2]
 * manhattan distance = |0 - 2| + |0 - 2| = 4
 * [0,0] and [3,10]
 * manhattan distance = |0 - 3| + |0 - 10| = 13
 * [2,2] and [3,10]
 * manhattan distance = |2 - 3| + |2 - 10| = 9
 * [2,2] and [5,2]
 * manhattan distance = |2 - 5| + |2 - 2| = 3
 * [5,2] and [7,0]
 * manhattan distance = |5 - 7| + |2 - 0| = 4
 *
 * Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
 *
 * Example 1:
 * Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * Output: 20
 * * Explanation:
 * We can connect the points as shown above to get the minimum cost of 20.
 * Notice that there is a unique path between every pair of points.
 *
 * Example 2:
 * Input: points = [[3,12],[-2,5],[-4,1]]
 * Output: 18
 *
 * Constraints:
 * - 1 <= points.length <= 1000
 * - points[i].length == 2
 * - -10^6 <= xi, yi <= 10^6
 * - All pairs (xi, yi) are distinct.
 *
 * @param {number[][]} points
 * @return {number}
 */

function minCostConnectPoints(points) {
  let n = points.length;
  if (n <= 1) return 0; // No cost if there are 0 or 1 points
  let minCost = 0;
  let visited = new Array(n).fill(false);
  let minDist = new Array(n).fill(Infinity);
  minDist[0] = 0; // Start with the first point

  // Prim's algorithm
  for (let i = 0; i < n; i++) {
    let minIndex = -1;
    let minValue = Infinity;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && minDist[j] < minValue) {
        minValue = minDist[j];
        minIndex = j;
      }
    }
    visited[minIndex] = true;
    minCost += minValue;

    // Update the minimum distance for the remaining points
    let [x1, y1] = points[minIndex];
    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        let [x2, y2] = points[j];
        let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        if (dist < minDist[j]) {
          minDist[j] = dist;
        }
      }
    }
  }
  return minCost;
}

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
  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }
  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = this.parent(idx);
      if (this.heap[idx].weight > this.heap[parentIdx].weight) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
    // [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let idx = 0;
    let length = this.heap.length;
    while (true) {
      let leftIdx = this.left(idx);
      let rightIdx = this.right(idx);
      let smallest = idx;
      if (
        leftIdx < length &&
        this.heap[leftIdx].weight < this.heap[smallest].weight
      ) {
        smallest = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx].weight < this.heap[smallest].weight
      ) {
        smallest = rightIdx;
      }
      if (smallest === idx) break;
      this.swap(idx, smallest);
      idx = smallest;
    }
  }
  size() {
    return this.heap.length;
  }
  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

function minCostConnectPoints(points) {
  let n = points.length;
  if (n <= 1) return 0; // No cost if there are 0 or 1 points
  let minCost = 0;
  let visited = new Array(n).fill(false);
  let pq = new MinPQ({ priority: (x) => x.weights }); // weight
  let picked = 0; // number of points picked in the MST

  // Start with the first point
  //   pq.insert([0, 0]); // {weight, pointIndex}
  pq.insert({ weight: 0, pointIndex: 0 }); // {weight, pointIndex}
  while (!pq.isEmpty() && picked < n) {
    // let [weight, pointIndex] = pq.extractMin();
    let { weight, pointIndex } = pq.extractMin();
    if (visited[pointIndex]) continue;
    visited[pointIndex] = true;
    minCost += weight;
    picked++;

    // Add all unvisited neighbors (other points) to the priority queue
    let [x1, y1] = points[pointIndex];
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        let [x2, y2] = points[i];
        let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        pq.insert({ weight: dist, pointIndex: i }); // {weight, pointIndex}
      }
    }
  }

  return minCost;
}
