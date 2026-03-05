/** Spanning Tree
 * A spanning tree is a subgraph of a graph that includes all the vertices of the original graph and
 * is a tree (i.e., it is connected and has no cycles).
 * In other words, a spanning tree connects all the vertices together
 * with the minimum number of edges possible, which is (V - 1)
 * where V is the number of vertices in the graph.
 *
 * The main properties of a spanning tree are:
 * 1. It includes all the vertices of the original graph.
 * 2. It is a tree, meaning it is connected and has no cycles.
 * 3. It has exactly (V - 1) edges, where V is the number of vertices in the graph.
 *
 * Minimum Spanning Tree (MST)
 * - a spanning tree that has the minimum total edge weight
 *   among all possible spanning trees of a weighted graph.
 *
 * Will the graph have more than one spanning tree?
 * - Yes, a graph can have multiple spanning trees, especially if it has multiple edges with the same weight.
 *   However, there will be only one minimum spanning tree if all edge weights are distinct.
 *
 * Will the graph have more than one minimum spanning tree?
 * - Yes, a graph can have multiple minimum spanning trees if there are multiple edges with the same weight that can be included in the spanning tree without increasing the total weight.
 *   In such cases, there may be several different combinations of edges that yield the same minimum total weight.
 *
 * Why Minimum Spanning Tree is important?
 * - Minimum spanning trees are important in various applications,
 *   such as network design (e.g., designing the layout of a computer network, road network, or electrical grid),
 *   clustering algorithms in machine learning, and approximation algorithms for NP-hard problems.
 * - Minimum edges to connect a network of computers, roads, or other infrastructure.
 * - no cycles, so it is efficient and cost-effective.
 * - simplifies the structure of a graph while maintaining connectivity, making it easier to analyze and understand.
 *
 * There are several algorithms to find the minimum spanning tree, including:
 * 1. Kruskal's Algorithm: This algorithm sorts all the edges in non-decreasing order of their weights and adds them to the spanning tree if they do not form a cycle.
 * 2. Prim's Algorithm: This algorithm starts with an arbitrary vertex and grows the spanning tree by adding the smallest edge that connects a vertex in the tree to a vertex outside the tree.
 * 3. Borůvka's Algorithm: This algorithm repeatedly adds the smallest edge from each component of the graph until only one component remains, which is the minimum spanning tree.
 *
 * Use cases of Minimum Spanning Tree:
 * - Network Design: Designing efficient communication networks,
 *   such as computer networks, telephone networks, and transportation networks.
 * - Routing: Finding the most efficient way to route data or traffic through a network.
 * - Broadcasting: In broadcasting, minimum spanning trees can be used to minimize the total cost of broadcasting information to all nodes in a network.
 * - Clustering: Clustering means grouping similar data points together, and minimum spanning trees can be used in clustering algorithms to group similar data points based on their distances.
 * - Approximation Algorithms: Minimum spanning trees are used in approximation algorithms for solving NP-hard (Non-deterministic Polynomial-time hard) problems, such as the Traveling Salesman Problem.
 * - Image Processing: Minimum spanning trees can be used in image segmentation and other image processing tasks to group similar pixels together.
 * - Circuit Design: In electronic circuit design, minimum spanning trees can help minimize the total length of wiring needed to connect components.
 */
