/** Binary Tree Post-order Traversal (Recursive)
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 *
 * Post-order traversal is a method of visiting all the nodes in a binary tree
 * where the left subtree is visited first, followed by the right subtree,
 * and finally the root node. This traversal method is often used for various applications,
 * including expression tree evaluation, tree deletion, and hierarchical data representation.
 * The post-order traversal can be implemented using recursion, which simplifies the process
 * of visiting nodes in the correct order.
 *
 * Given the root of a binary tree, return the post-order traversal of its nodes' values.
 *
 *  Example:
 *       1
 *      / \
 *         2
 *        / \
 *      3
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
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
 * Output: [4,6,7,5,2,9,8,3,1]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

function postorderTraversal(root) {
  let ans = [];

  function traversal(current) {
    if (current === null) return;
    // post-order: left -> right -> root
    traversal(current.left);
    traversal(current.right);
    ans.push(current.val);
  }

  traversal(root);
  return ans;
}
