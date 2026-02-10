/** Balance a Binary Search Tree (BST)
 * A binary search tree is a binary tree in which for each node,
 * the value of all the nodes in the left subtree is less than the node's value,
 * and the value of all the nodes in the right subtree is greater than the node's value.
 * (leftVal < nodeVal < rightVal)
 *
 * https://leetcode.com/problems/balance-a-binary-search-tree/
 * Given the root of a binary search tree,
 * return a balanced binary search tree with the same node values.
 * If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if and only if the difference in height
 * between the left and right subtrees of any node is no more than one.
 * (leftHeight - rightHeight <= 1 && rightHeight - leftHeight <= 1)
 *
 * Example 1:
 * Input: root = [1,null,2,null,3,null,4,null,null]
 *   1                         2
 *    \                      /   \
 *     2                    1     3
 *      \     --->                 \                 3
 *       3                          4    ||        /   \
 *        \                                       1     4
 *         4                                       \
 *                                                  2
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,2,null,1,null,null,4] is also correct.
 *
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 * Explanation: The tree is already balanced.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 10^4].
 * - 1 <= Node.val <= 10^5
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 * }
 */

/** Algorithm: Inorder Traversal + Reconstruct BST
 * 1. Perform an inorder traversal of the BST to get the node values in sorted order.
 * 2. Use the sorted values to reconstruct a balanced BST.
 *    - The middle element of the sorted array will be the root of the balanced BST.
 *    - Recursively do the same for the left half to construct the left subtree,
 *      and for the right half to construct the right subtree.
 * 3. Return the root of the balanced BST.
 *
 * Time Complexity: O(n) - where n is the number of nodes in the tree (for traversal and reconstruction)
 * Space Complexity: O(n) - for storing the sorted values and the recursive call stack
 */

function balanceBST(root) {
  // root = [1,null,2,null,3,null,4,null,null]
  // Step 1: Inorder traversal to get sorted values
  let sortedValues = [];
  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    sortedValues.push(node.val);
    dfs(node.right);
  }

  // sortedValues = [1, 2, 3, 4]
  // Step 2: Reconstruct balanced BST from sorted values
  function buildBST(left, right) {
    if (left > right) return null; // base case: no elements to construct the tree
    let mid = Math.floor(left + (right - left) / 2); // find the middle index
    let node = new TreeNode(sortedValues[mid]); // create a new node with the middle value
    node.left = buildBST(left, mid - 1); // recursively build the left subtree
    node.right = buildBST(mid + 1, right); // recursively build the right subtree
    return node; // return the constructed node

    /**
     * buildBST(0, 3) -> mid = 1 -> node.val = 2
     * - node.left = buildBST(0, 0) -> mid = 0 -> node.val = 1
     *   - node.left = buildBST(0, -1) -> return null
     *   - node.right = buildBST(1, 0) -> return null
     * - node.right = buildBST(2, 3) -> mid = 2 + (3 - 2) / 2 = 2 -> node.val = 3
     */
  }

  dfs(root);
  return buildBST(0, sortedValues.length - 1); // buildBST(0, 3)
}
