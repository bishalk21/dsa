/** Prim's Algorithm for Minimum Spanning Tree
 * - a greedy algorithm
 * - finds a minimum spanning tree for a weighted undirected graph.
 * - It starts with an arbitrary vertex (any vertex or node) and
 *   grows the spanning tree by adding the cheapest edge from the tree
 *   to a vertex outside the tree until all vertices are included.
 * - do not choose already visited nodes (to avoid cycles)
 * - To find out the next weight edge (cheapest edge), Min Heap (Priority Queue) is used.
 *
 * Steps:
 * 1. Initialize a priority queue (min heap) to store edges based on their weights.
 * 2. Start with an arbitrary vertex and add all its edges to the priority queue.
 * 3. While the priority queue is not empty:
 *    a. Extract the edge with the smallest weight from the priority queue.
 *    b. If the edge connects to a vertex that has not been visited, add it to the spanning tree and mark the vertex as visited.
 *    c. Add all edges from the newly added vertex to the priority queue.
 * 4. Repeat until all vertices are included in the spanning tree.
 *
 * Time Complexity: O(E log V) where E is the number of edges and V is the number of vertices.
 * Space Complexity: O(V) for the priority queue and the visited set.
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

function primMST(graph) {
  let visited = new Array(graph.length).fill(false);
  let pq = new MinPQ({
    priority: (x) => x[0], // weight
  });
  pq.insert([0, 0]); // [weight, node]
  //   pq.insert({ weight: 0, node: 0 }); // {weight, node}
  let mstWeight = 0;

  let edgesUsed = 0;
  while (!pq.isEmpty() && edgesUsed < n) {
    let [weight, node] = pq.extractMin();
    // let { weight, node } = pq.extractMin();
    if (visited[node]) continue;
    visited[node] = true;
    edgesUsed++;
    mstWeight += weight;
    for (let [adjNode, adjWeight] of graph[node]) {
      if (!visited[adjNode]) {
        pq.insert([adjWeight, adjNode]);
        // pq.insert({ weight: adjWeight, node: adjNode });
      }
    }
  }
  return mstWeight;
}
