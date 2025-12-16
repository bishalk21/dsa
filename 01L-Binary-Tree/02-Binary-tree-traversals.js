/** Binary Tree Traversals
 * Binary tree traversals are methods used to visit and process each node in a binary tree data structure.
 * There are several common traversal techniques, each with its own order of visiting nodes.
 *
 * Common Binary Tree Traversals:
 * 1. Pre-order Traversal (Root-Left-Right):
 *   - Visit the root node first, then recursively traverse the left subtree,
 *     followed by the right subtree.
 *   - Example: For the tree below, the pre-order traversal would yield: 1, 2, 4, 5, 3, 6
 *        1
 *       / \
 *      2   3
 *     / \   \
 *    4   5   6
 *
 *   - Applications and Use Cases:
 *     - Expression Trees: to generate prefix expressions (Polish notation) from expression trees.
 *     - Copying Trees: to create a copy of the tree structure.
 *     - File System Traversal: to list files and directories in a hierarchical manner.
 *     - Serialization: to serialize the tree structure for storage or transmission.
 *     - Tree Manipulation: to perform operations like inserting or deleting nodes.
 *     - Game Trees: to explore possible moves in games like chess or tic-tac-toe.
 *     - Syntax Trees: to analyze and transform programming language syntax.
 *     - Hierarchical Data Representation: to represent and process hierarchical data structures.
 *
 * 2. In-order Traversal (Left-Root-Right):
 *  - Recursively traverse the left subtree first, visit the root node,
 *   then recursively traverse the right subtree.
 *  - Example: For the tree below, the in-order traversal would yield: 4, 2, 5, 1, 3, 6
 *       1
 *      / \
 *     2   3
 *    / \   \
 *   4   5   6
 *
 *  - Applications and Use Cases:
 *    - Binary Search Trees (BST): to retrieve values in sorted order.
 *    - Expression Trees: to generate infix expressions from expression trees.
 *    - Syntax Trees: to analyze and transform programming language syntax.
 *    - Data Retrieval: to efficiently retrieve data stored in a binary search tree.
 *    - Tree Visualization: to visualize the structure of the tree in a human-readable format.
 *    - Range Queries: to find all values within a specific range in a BST.
 *    - Balanced Trees: to maintain balance in self-balancing binary search trees.
 *    - Hierarchical Data Representation: to represent and process hierarchical data structures.
 *
 * 3. Post-order Traversal (Left-Right-Root):
 * - Recursively traverse the left subtree first, then the right subtree,
 *  followed by visiting the root node.
 * - Example: For the tree below, the post-order traversal would yield: 4, 5, 2, 6, 3, 1
 *       1
 *      / \
 *     2   3
 *    / \   \
 *   4   5   6
 *
 *  - Applications and Use Cases:
 *   - Expression Trees: to generate postfix expressions (Reverse Polish notation) from expression trees.
 *   - Tree Deletion: to safely delete nodes in a tree by ensuring child nodes are deleted before their parents.
 *   - File System Cleanup: to delete files and directories in a hierarchical manner.
 *   - Syntax Trees: to analyze and transform programming language syntax.
 *   - Memory Management: to free up memory used by tree structures.
 *   - Dependency Resolution: to resolve dependencies in build systems or package managers.
 *   - Hierarchical Data Representation: to represent and process hierarchical data structures.
 *
 * 4. Level-order Traversal (Breadth-First):
 * - Visit nodes level by level from top to bottom and left to right within each level.
 * - Example: For the tree below, the level-order traversal would yield: 1, 2, 3, 4, 5, 6
 *      1
 *     / \
 *    2   3
 *   / \   \
 *  4   5   6
 *
 * - Applications and Use Cases:
 *   - Shortest Path Finding: to find the shortest path in unweighted graphs.
 *   - Peer-to-Peer Networks: to efficiently broadcast messages across a network.
 *   - Social Network Analysis: to explore connections and relationships in social networks.
 *   - Web Crawling: to systematically explore web pages level by level.
 *   - Hierarchical Data Representation: to represent and process hierarchical data structures.
 *
 * These traversal methods are fundamental for various applications, including searching, sorting,
 * and manipulating binary tree data structures.
 */
