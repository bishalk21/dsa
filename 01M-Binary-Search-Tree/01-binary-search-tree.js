/** Binary Search Tree (BST)
 * - a special type of binary tree with at most two children per node
 * - a node-based binary tree data structure
 *
 * For each node:
 * - all nodes in the left subtree have values or keys less than the node's value
 * - all nodes in the right subtree have values or keys greater than the node's value
 *          50
 *       /      \
 *     30       70
 *    /  \     /  \
 *   20  40  60   80
 *
 * - The left and right subtree each must also be a binary search tree.
 * - There must be no duplicate nodes.
 *
 * Why it is called "search" tree?
 * - Because it allows for efficient searching, insertion, and deletion of values.
 * - The time complexity for search, insert, and delete operations in a balanced BST is O(log n).
 * - In the worst case (unbalanced tree), these operations can take O(n) time.
 * - BSTs are commonly used in various applications such as database indexing,
 *   searching algorithms, and maintaining sorted data.
 *
 * In-Order Traversal (Left, Root, Right) of BST yields sorted order of elements.
 */
