/** Balanced binary tree
 * https://leetcode.com/problems/balanced-binary-tree/
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * A height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of
 * every node differ in height by no more than 1.
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *            3
 *           / \
 *          9  20
 *            /  \
 *           15   7
 *
 * Example 2:
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *           1
 *          / \
 *         2   2
 *        / \
 *       3   3
 *      / \
 *     4   4
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * if the tree is empty, it is balanced
 * for each node, check the height of left and right subtrees
 * if the height difference is more than 1, return false
 * (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) return false
 * (else leftHeight - rightHeight <= 1 && rightHeight - leftHeight <= 1) return true
 * recursively check the left and right subtrees
 */

function isBalanced(root) {
  // initialize a variable to track if the tree is balanced
  let ans = true;
  // helper function to calculate the height of the tree
  function calcHeight(node) {
    // base case: if the node is null, return height 0
    if (node === null) return 0;
    // recursively calculate the height of left and right subtrees
    let leftHeight = calcHeight(node.left);
    let rightHeight = calcHeight(node.right);
    // check if the current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = ans && false; // && will keep ans false once it is set to false
    }
    // return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }
  calcHeight(root);
  return ans;
}
