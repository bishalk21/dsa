/** Binary Tree
 * A binary tree is a hierarchical data structure in which each node has at most two children,
 * referred to as the left child and the right child.
 * The topmost node is called the root, and each node contains a value or data.
 *
 * Binary trees are commonly used in computer science for various applications,
 * including searching, sorting, and hierarchical data representation.
 *
 * - non-linear data structure
 * - hierarchical structure
 * - node has 0 or more children (max 2)
 * - topmost node is called root
 * - node has one parent node except root node
 * - can not have cycles (no back references)
 * - exactly one path between root and any other node
 * - no two parents can have same child node
 * - used in searching, sorting, hierarchical data representation
 *
 * Examples:
 *         1           -- root node: root/root.value = 1
 *        / \
 *       /   \
 *      2     3         -- left child of 1: root.left/root.left.value = 2
 *     / \     \        -- right child of 1: root.right/root.right.value = 3
 *    /   \     \
 *   4     5     6     -- left child of 2: root.left.left/root.left.left.value = 4
 *
 * In this example, the root node is 1, which has two children: 2 (left) and 3 (right).
 * Node 2 has two children: 4 (left) and 5 (right), while node 3 has one child: 6 (right).
 *
 * - File System Hierarchy
 * - HTML Document Object Model (DOM)
 * - Organizational Structures
 * - Database Indexing (e.g., B-Trees)
 * - Expression Trees in Compilers
 * - Network Routing Trees
 * - Decision Trees in Machine Learning
 * - Hierarchical Data Representation in XML/JSON
 *
 * Types of Binary Trees:
 * - General Binary Tree
 *   - Each node can have 0, 1, or 2 children (any number) without any specific ordering.
 *
 * - Binary Tree
 *   - Each node can have at most 2 children.
 *
 * - Binary Search Tree (BST)
 *   - A binary tree where the left subtree contains values less than the parent node,
 *     and the right subtree contains values greater than the parent node.
 *
 * - Complete Binary Tree
 *   - All levels are fully filled except possibly the last level, which is filled from left to right.
 *
 * - Full Binary Tree
 *   - Every node has either 0 or 2 children (no nodes have only one child).
 *
 * - Perfect Binary Tree
 *   - A binary tree in which all internal nodes have two children and all leaf nodes are at the same level.
 *
 * - Balanced Binary Tree
 *   - A binary tree where the height of the two subtrees of any node differs by at most one.
 */
