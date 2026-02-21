/** Shortest Path in Weighted Graphs - Dijkstra's Algorithm
 * Dijkstra's algorithm is a popular algorithm used to find the shortest path between nodes in a weighted graph.
 * It works by maintaining a priority queue of nodes to explore,
 * where the priority is based on the cumulative distance from the starting node.
 * The algorithm iteratively explores the node with the smallest cumulative distance,
 * updating the distances to its neighbors and adding them to the priority queue if they haven't been visited yet.
 *
 * Algorithm Steps:
 * 1. Initialize a priority queue and
 *    a distance map to keep track of the shortest distance to each node.
 * 2. Set the distance to the starting node to 0 and enqueue it in the priority queue.
 * 3. While the priority queue is not empty:
 *    a. Dequeue the node with the smallest distance (let's call it 'currentNode').
 *    b. For each neighbor of 'currentNode':
 *       i. Calculate the distance to the neighbor through 'currentNode'.
 *       ii. If this distance is smaller than the previously known distance to the neighbor:
 *           - Update the distance to the neighbor.
 *           - Enqueue the neighbor in the priority queue with the updated distance.
 * 4. The algorithm continues until the priority queue is empty, at which point the distance map contains the shortest distances from the starting node to all other nodes in the graph.
 * 5. The time complexity of Dijkstra's algorithm is O((V + E) log V) when implemented with a priority queue (using a binary heap).
 *
 * Key Concepts:
 * - Weighted Graph: A graph where each edge has an associated weight or cost.
 * - Priority Queue: A data structure that allows for efficient retrieval of the element with the highest priority (in this case, the smallest distance).
 * - Cumulative Distance: The total distance from the starting node to a given node, calculated by summing the weights of the edges along the path.
 * - Stale Entries: In Dijkstra's algorithm, it's possible to encounter stale entries in the priority queue (i.e., entries that represent a node with a distance that is no longer the shortest). To handle this, we can check if the distance of the dequeued node is greater than the currently known distance before processing it.
 *
 * Applications of Dijkstra's Algorithm:
 * - Network Routing: Dijkstra's algorithm is widely used in network routing protocols (like OSPF) to find the shortest path for data packets.
 * - GPS Navigation: It is used in GPS systems to calculate the shortest route from a starting location to a destination.
 * - Social Networks: Dijkstra's algorithm can be used to find the shortest path between users in a social network.
 * - Resource Allocation: It can be applied to problems that involve allocating resources efficiently, such as scheduling tasks or optimizing supply chains.
 */

let graph = [
  [
    [1, 2],
    [2, 4],
  ], // Node 0 is connected to Node 1 with weight 2 and Node 2 with weight 4
  [
    [3, 7],
    [2, 1],
  ], // Node 1 is connected to Node 3 with weight 7 and Node 2 with weight 1
  [
    [4, 3],
    [5, 1],
  ], // Node 2 is connected to Node 4 with weight 3 and Node 5 with weight 1
  [[6, 1]], // Node 3 is connected to Node 6 with weight 1
  [
    [3, 2],
    [6, 5],
  ], // Node 4 is connected to Node 3 with weight 2 and Node 6 with weight 5
  [
    [3, 3],
    [6, 8],
  ], // Node 5 is connected to Node 3 with weight 3 and Node 6 with weight 8
  [], // Node 6 has no outgoing edges
];

class MinHeap {
  constructor() {
    this.heap = [];
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChild(index) {
    return 2 * index + 1;
  }
  rightChild(index) {
    return 2 * index + 2;
  }
  // add weight and node to the heap
  enqueue(pair) {
    this.heap.push(pair);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.parent(index);
      if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  dequeue() {
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
      let left = this.leftChild(index);
      let right = this.rightChild(index);
      let smallest = index;
      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
}

function dijkstra(graph, start) {
  let n = graph.length;
  let distances = Array(n).fill(Infinity);
  distances[start] = 0;
  let pq = new MinHeap();
  pq.enqueue([start, 0]); // [node, distance/weight]
  while (pq.size() > 0) {
    let [node, dist] = pq.dequeue();
    // check for stale or outdated entries in the priority queue
    if (dist > distances[node]) continue;
    // explore neighbors
    for (let [neighbor, weight] of graph[node]) {
      // calculate the distance to the neighbor through the current node
      let newDist = dist + weight;
      // if the new distance is smaller, update and enqueue
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        // enqueue the neighbor with the updated distance
        pq.enqueue([neighbor, newDist]);
      }
    }
  }
  return distances;
}

console.log(dijkstra(graph, 0)); // Output: [0, 2, 3, 7, 6, 4, 8]
