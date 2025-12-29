/** Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * "The lowest common ancestor is defined between two nodes p and q
 *  as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself)."
 *
 * Example 1:
 *               3
 *             /   \
 *            5     1
 *           / \   / \
 *          6   2 0   8
 *             / \
 *            7   4
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 * Example 2:
 *               3
 *             /   \
 *            5     1
 *           / \   / \
 *          6   2 0   8
 *             / \
 *            7   4
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5,
 *              since a node can be a descendant of itself according to the LCA definition.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
  let LCA = null;
  function traversal(node) {
    if (!node) return 0;
    let count = 0;
    if (node.val === p.val || node.val === q.val) {
      count++;
    }
    let ansOnLeft = traversal(node.left);
    let ansOnRight = traversal(node.right);
    count += ansOnLeft + ansOnRight;
    if (count === 2 && LCA === null) {
      LCA = node;
    }
    return count;
  }
  traversal(root);
  return LCA;
}
