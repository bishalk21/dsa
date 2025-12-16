/** Binary Tree Pre-order Traversal (Recursive)
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 *
 * Pre-order traversal is a method of visiting all the nodes in a binary tree
 * where the root node is visited first, followed by the left subtree and then
 * the right subtree. This traversal method is often used for various applications,
 * including expression tree evaluation, tree copying, and hierarchical data representation.
 * The pre-order traversal can be implemented using recursion, which simplifies the process
 * of visiting nodes in the correct order.
 *
 * Given the root of  a binary tree, return the pre-order traversal of its nodes' values.
 *
 * Example:
 *       1
 *      / \
 *         2
 *        / \
 *      3
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 *
 * Example:
 *           1
 *          / \
 *         2   3
 *        / \   \
 *       4   5   8
 *          / \  /
 *          6 7  9
 * Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
 * Output: [1,2,4,5,6,7,3,8,9]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

function preorderTraversal(root) {
  let result = [];

  function traversal(current) {
    if (current === null) return;

    // pre-order: root -> left -> right
    result.push(current.val);
    traversal(current.left);
    traversal(current.right);
  }

  traversal(root);
  return result;
}
