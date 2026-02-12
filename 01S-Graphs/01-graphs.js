/** Graphs
 * - a data structure that helps us represent relationships or connection between objects.
 * - A data structure that consists of a set of nodes (also called vertices)
 *   and a set of edges that connect pairs of nodes.
 *   - Vertices (Nodes)  ---> represent entities or objects.
 *   - Edges (Connections) --> represent relationships or connections between the vertices.
 *
 * Mathematical representation of a graph:
 * - A graph G can be represented as G = (V, E), where:
 *   - V is a set of vertices (nodes).
 *   - E is a set of edges (connections) between the vertices.
 *
 * - Graphs can be used to represent various real-world problems,
 *   such as social networks, transportation systems, and communication networks.
 *
 * How does a graph look like?
 *
 *              7     5
 *           /    \  /
 *          2      3
 *                /  \
 *               1 -  6
 *                   /
 *                  9
 * - In the above graph:
 *   - The vertices (nodes) are: 1, 2, 3, 5, 6, 7, 9
 *   - The edges (connections) are: (1,3), (1,6), (2,7), (3,5), (3,6), (5,7), (6,9)
 *
 * - Graphs can be directed or undirected:
 *   - In a directed graph, the edges have a direction, meaning that they go from one vertex to another.
 *     For example, if there is an edge from vertex A to vertex B,
 *     it does not imply that there is an edge from vertex B to vertex A.
 *     e.g., Instagram followers: if user A follows user B,
 *                                it does not necessarily mean that user B follows user A.
 *           Web Pages, Dependency Graphs, Task Scheduling, etc.
 *   - In an undirected graph, the edges do not have a direction,
 *     meaning that if there is an edge between vertex A and vertex B,
 *     it implies that there is an edge between vertex B and vertex A.
 *     e.g., Facebook friends: if user A is a friend of user B,
 *                             it implies that user B is a friend of user A.
 *           Road Networks, Cities, Social Networks, etc.
 *
 * - Graphs can also be weighted or unweighted:
 *   - In a weighted graph, each edge has a weight or cost associated with it.
 *     For example, in a transportation network,
 *     the weight of an edge could represent the distance or travel time between two locations.
 *     e.g., Road Networks (distance or travel time), Flight Routes (cost or distance), etc.
 *   - In an unweighted graph, the edges do not have any weights or costs associated with them.
 *     All edges are considered to have the same weight or cost.
 *     You only care about the connections between the vertices, not the weights or costs of the edges.
 *     e.g., Social Networks (friendship connections), Web Pages (hyperlinks), etc.
 *
 * - Path: A sequence of vertices connected by edges.
 *   For example, in the above graph,
 *   a path from vertex 2 to vertex 9 could be 2 -> 7 -> 5 -> 3 -> 6 -> 9.
 *
 * - Cycle: A path that starts and ends at the same vertex without repeating any edges.
 *   For example, in the above graph,
 *   a cycle could be 1 -> 3 -> 6 -> 1.
 *  - Cyclic Graph: A graph that contains at least one cycle.
 *                  For example, the above graph is a cyclic graph
 *                  because it contains the cycle 1 -> 3 -> 6 -> 1.
 *  - Acyclic Graph: A graph that does not contain any cycles.
 *                   For example, a tree is an acyclic graph.
 *                   npm, git version control systems, etc. are also examples of acyclic graphs.
 *  - Directed Acyclic Graph (DAG): A directed graph that does not contain any cycles.
 *                                  For example, a task scheduling graph is a DAG.
 *
 * - Connected Graph: An undirected graph is connected if there is a path between any two vertices.
 *                    For example, the above graph is a connected graph
 *                    because there is a path between any two vertices.
 *                    There is at least one path between any two vertices in the graph.
 *                    Everything is reachable from any other vertex in the graph.
 * - Disconnected Graph: An undirected graph is disconnected if there are at least two vertices
 *                       that do not have a path between them.
 *                       For example, if we remove the edge (3,6) from the above graph,
 *                       the graph becomes disconnected because there is no path between vertex 1 and vertex 9.
 *
 * Real world applications of graphs:
 * Real World Example    Vertices (Nodes)     Edges (Connections)         Graph Type
 * Facebook Friends       Users                Friendships            Undirected, Unweighted
 * Instagram Followers    Users                Follow Relationships   Directed, Unweighted
 * Twitter Followers      Users                Follow Relationships   Directed, Unweighted
 * Google maps            Locations            Roads with distances   Undirected/Directed, Weighted
 * Dependency Graphs      Tasks/Packages       Dependencies           Directed Acyclic, Unweighted
 * Airline Networks       Airports             Flight Routes          Directed, Weighted
 * Web Crawler            Web Pages            Hyperlinks             Directed, Unweighted
 * Computer Networks      Devices              Connections            Undirected, Weighted
 * Social Networks        People               Friendships            Undirected, Unweighted
 */
