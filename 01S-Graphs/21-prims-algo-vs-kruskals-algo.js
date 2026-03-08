/** Prim's Algorithm VS Kruskal's Algorithm [for finding Minimum Spanning Tree]
 * - Prim's Algorithm:
 *   - starts with an arbitrary vertex and grows the spanning tree by adding the cheapest edge from the tree to a vertex outside the tree until all vertices are included.
 *   - uses a priority queue (min heap) to find the next cheapest edge.
 *   - Time Complexity: O(E log V) where E is the number of edges and V is the number of vertices.
 *   - Space Complexity: O(V) for the priority queue and the visited set.
 *   - better for dense graphs (where E is close to V^2) because it can efficiently find the next edge to add to the tree.
 *
 *
 * - Kruskal's Algorithm:
 *   - sorts all edges in non-decreasing order of their weights and adds edges to the spanning tree, ensuring that no cycles are formed.
 *   - uses a union-find data structure to keep track of which vertices are in which components and to detect cycles.
 *   - Time Complexity: O(E log E) due to sorting the edges, where E is the number of edges in the graph.
 *   - Space Complexity: O(V) for the union-find data structure, where V is the number of vertices in the graph.
 *   - better for sparse graphs (where E is much less than V^2) because it can quickly sort the edges and add them to the tree without needing to check all vertices.
 */
