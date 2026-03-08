/** Kruskal's Algorithm for finding the Minimum Spanning Tree
 * - a greedy algorithm that finds the minimum spanning tree of a graph.
 * - It works by sorting the edges of the graph in non-decreasing order of their weights
 *   and then adding edges to the spanning tree, ensuring that no cycles are formed.
 *
 * - finds the Minimum Spanning Tree (MST) of a connected, undirected graph with weighted edges.
 * - The MST is a subset of the edges that connects all vertices together,
 *   without any cycles and with the minimum possible total edge weight.
 *
 * - sort all the edges in non-decreasing order of their weight.
 * - create union-find data structure for all n nodes to keep track of which vertices are in which components.
 *   - for each edge in the sorted list:
 *     - check if the two vertices of the edge belong to different components using the union-find structure.
 *     - if no cycle, add the edge to the MST and union the two vertices in the union-find structure.
 *     - if a cycle is formed, discard the edge.
 * - stop when there are (n-1) edges in the MST, where n is the number of vertices in the graph.
 *
 * - Time Complexity: O(E log E) due to sorting the edges, where E is the number of edges in the graph.
 * - Space Complexity: O(V) for the union-find data structure, where V is the number of vertices in the graph.
 *
 * - Applications:
 *  - Network design (e.g., designing a least-cost network of roads, cables, or pipelines).
 *  - Clustering algorithms (e.g., hierarchical clustering).
 *  - Approximation algorithms for NP-hard problems (e.g., traveling salesman problem).
 */

class UnionFind {
  constructor() {
    this.parent = new Array(n).fill(0).map((_, index) => index);
    this.rank = new Array(n).fill(1);
  }

  // finds the representative (root) of the set that x belongs to, with path compression
  find(x) {
    // path compression: make the found root the parent of x directly to flatten the structure
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  // unites the sets that x and y belong to, using union by rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    // if they are in the same set, do not union and return false to indicate a cycle
    if (rootX === rootY) return false;
    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}

const graph = [
  [0, 1, 1],
  [0, 2, 8],
  [1, 2, 9],
  [2, 3, 2],
  [2, 4, 7],
  [2, 5, 6],
  [3, 4, 3],
  [4, 5, 10],
];

function kruskalMST(n, edges) {
  // 1. sort all edges in non-decreasing order of their weight.
  edges.sort((a, b) => a[2] - b[2]);
  // 2. create union-find data structure for all n nodes to keep track of which vertices are in which components.
  const uf = new UnionFind(n);
  let mstCost = 0;
  const mst = [];
  // 3. for each edge in the sorted list:
  for (let [u, v, weight] of edges) {
    //    a. check if the two vertices of the edge belong to different components using the union-find structure.
    if (uf.union(u, v)) {
      //    b. if no cycle, add the edge to the MST and union the two vertices in the union-find structure.
      mst.push([u, v, weight]);
      mstCost += weight;
    } else {
      //    c. if a cycle is formed, discard the edge.
      continue;
    }
  }
  // 4. stop when there are (n-1) edges in the MST, where n is the number of vertices in the graph.
  return { mst, mstCost };
}

const n = 6; // number of vertices
const edges = graph.map(([u, v, weight]) => [u, v, weight]);
const result = kruskalMST(n, edges);
console.log("Minimum Spanning Tree:", result.mst);
console.log("Total Cost of MST:", result.mstCost);
