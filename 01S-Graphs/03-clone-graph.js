/** Clone Graph
 * https://leetcode.com/problems/clone-graph/
 *
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * class Node {
 *     public int val;
 *     public List<Node> neighbors;
 * }
 *
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed).
 * For example, the first node with val == 1, the second node with val == 2, and so on.
 * The graph is represented in the test case using an adjacency list.
 * An adjacency list is a collection of unordered lists used to represent a finite graph.
 * Each list describes the set of neighbors of a node in the graph.
 * The given node will always be the first node with val = 1.
 * You must return the copy of the given node as a reference to the cloned graph.
 *
 * Example 1:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 * Explanation: There are 4 nodes in the graph.
 *              1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 *              2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 *              3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 *              4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * Example 2:
 * Input: adjList = [[]]
 * Output: [[]]
 * Explanation: Note that the input contains one empty list.
 *              The graph consists of only one node with val = 1 and it does not have any neighbors.
 * Example 3:
 * Input: adjList = []
 * Output: []
 * Explanation: This an empty graph, it does not have any nodes.
 *
 * Constraints:
 * - The number of nodes in the graph is in the range [0, 100].
 * - 1 <= Node.val <= 100
 * - Node.val is unique for each node.
 * - There are no repeated edges and no self-loops in the graph.
 * - The Graph is connected and all nodes can be visited starting from the given node.
 *
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 *
 * @param {Node} node
 * @return {Node}
 */

/** Algorithm: Breadth-First Search (BFS)
 * - We can use a breadth-first search (BFS) approach to clone the graph.
 * - We will maintain a queue to explore the graph level by level and
 *   a map to keep track of visited nodes and their corresponding cloned nodes.
 * - We will start BFS from the given node, create a clone of it, and add it to the visited map.
 * - For each node we visit, we will iterate through its neighbors.
 *   If a neighbor has not been visited (cloned) yet, we will create a clone of it,
 *   add it to the visited map, and enqueue it for further exploration.
 * - Finally, we will return the clone of the input node.
 *
 * Time Complexity: O(V + E),
 *                  where V is the number of vertices (nodes) and E is the number of edges in the graph.
 * Space Complexity: O(V),
 *                  wheree V is the number of vertices (nodes) in the graph, due to the visited map and the queue.
 */

function cloneGraph(node) {
  // corner case: if the input node is null, return null
  if (node === null) return null;
  // queue for BFS
  // initially, the queue contains the input node (the starting node for BFS)
  let q = [node];
  // map to store the visited nodes and their corresponding cloned nodes
  let visited = new Map();
  // create a clone of the input node and add it to the visited map
  // Node is represented as an object with a value and a list of neighbors
  // so node.val should be added to the clone node
  // if input node is [[]], then node.val is undefined, so we can set it to 0 or any default value
  let cloneNode = new Node(node.val);
  visited.set(node, cloneNode); // key: original node, value: cloned node

  // BFS traversal
  while (q.length) {
    // dequeue a node from the queue
    let currNode = q.shift();
    // iterate through the neighbors of the current node
    for (let neighbor of currNode.neighbors) {
      // if the neighbor has not been visited (cloned) yet
      if (!visited.has(neighbor)) {
        // push the neighbor to the queue for further exploration
        q.push(neighbor);
        // create a clone of the neighbor and add it to the visited map
        let cloneNeighbor = new Node(neighbor.val);
        visited.set(neighbor, cloneNeighbor);
      }
      // link the clone of the current node to the clone of the neighbor
      let cloneCurrNode = visited.get(currNode);
      let cloneNeighbor = visited.get(neighbor);
      cloneCurrNode.neighbors.push(cloneNeighbor);
    }
  }
  // return the clone of the input node (the starting node for BFS)
  // return visited.get(node);
  return cloneNode;
}

/** Depth First Search (DFS)  - Iterative
 * - We can also use a depth-first search (DFS) approach to clone the graph.
 * - Similar to BFS, we will maintain a stack to explore the graph and a map to keep track of visited nodes and their corresponding cloned nodes.
 * - We will start DFS from the given node, create a clone of it, and add it to the visited map.
 * - For each node we visit, we will iterate through its neighbors.
 *   If a neighbor has not been visited (cloned) yet, we will create a clone of it,
 *   add it to the visited map, and push it onto the stack for further exploration.
 * - Finally, we will return the clone of the input node.
 *
 * Time Complexity: O(V + E),
 *                 where V is the number of vertices (nodes) and E is the number of edges in the graph.
 * Space Complexity: O(V),
 *                 where V is the number of vertices (nodes) in the graph, due to the visited map and the stack.
 */
function cloneGraphDFSIterative(node) {
  if (node === null) return null;
  let stack = [node];
  let visited = new Map();
  let cloneNode = new Node(node.val);
  visited.set(node, cloneNode);
  while (stack.length) {
    let currNode = stack.pop();
    for (let neighbor of currNode.neighbors) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
        let cloneNeighbor = new Node(neighbor.val);
        visited.set(neighbor, cloneNeighbor);
      }
      let cloneCurrNode = visited.get(currNode);
      let cloneNeighbor = visited.get(neighbor);
      cloneCurrNode.neighbors.push(cloneNeighbor);
    }
  }
  return cloneNode;
}

/** Depth First Search (DFS) - Recursive
 * - We can also use a depth-first search (DFS) approach with recursion to clone the graph.
 * - Similar to the iterative DFS, we will maintain a map to keep track of visited nodes and their corresponding cloned nodes.
 * - We will define a recursive function that takes a node as input.
 *   If the node has not been visited (cloned) yet, we will create a clone of it,
 *   add it to the visited map, and recursively call the function for each of its neighbors.
 * - Finally, we will return the clone of the input node.
 *
 * Time Complexity: O(V + E),
 *                where V is the number of vertices (nodes) and E is the number of edges in the graph.
 * Space Complexity: O(V),
 *               where V is the number of vertices (nodes) in the graph, due to the visited map and the recursive call stack.
 */

function cloneGraphDFSRecursive(node) {
  if (node === null) return null;
  let visited = new Map();
  function dfs(currNode) {
    if (!visited.has(currNode)) {
      let cloneCurrNode = new Node(currNode.val);
      visited.set(currNode, cloneCurrNode);
      for (let neighbor of currNode.neighbors) {
        dfs(neighbor);
        let cloneNeighbor = visited.get(neighbor);
        cloneCurrNode.neighbors.push(cloneNeighbor);
      }
    }
  }
  dfs(node);
  return visited.get(node);
}
