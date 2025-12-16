/** Binary Tree In-order Traversal (Recursive)
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * In-order traversal is a method of visiting all the nodes in a binary tree
 * where the left subtree is visited first, followed by the root node and then
 * the right subtree. This traversal method is particularly useful for binary
 * search trees (BSTs) because it retrieves the node values in sorted order.
 * The in-order traversal can be implemented using recursion, which simplifies the process
 * of visiting nodes in the correct order.
 *
 * Given the root of a binary tree, return the in-order traversal of its nodes' values.
 *
 * Example:
 *      1
 *       \
 *        2
 *       /
 *      3
 *
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
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
 * Output: [4,2,6,5,7,1,3,9,8]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

function inorderTraversal(root) {
  let result = [];
  function traversal(current) {
    if (current === null) return;
    // in-order: left -> root -> right
    traversal(current.left);
    result.push(current.val);
    traversal(current.right);
  }
  traversal(root);
  return result;
}
