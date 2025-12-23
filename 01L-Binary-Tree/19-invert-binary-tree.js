/** Invert a binary tree
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example:
 * Input: root = [4,2,7,1,3,6,9]
 *            4                         4
 *           / \                       / \
 *          /   \                     /   \
 *         2     7       -->         7     2
 *        / \   / \                 / \   / \
 *       1   3 6   9               9   6 3   1
 * Output: [4,7,2,9,6,3,1]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
  // base case: if the node is null, return null
  // if root = [], return []
  if (root === null) return null;
  // swap the left and right children
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  // recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
