/** Lowest Common Ancestor of a Binary Tree II
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
 *
 * Given a binary tree,
 * find the lowest common ancestor (LCA) of two given nodes in the tree, P and Q.
 * If either P or Q does not exist in the tree, return null.
 * All node values are unique.
 *
 * According to the definition of LCA on Wikipedia:
 * "The lowest common ancestor is defined between two nodes p and q
 * as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself)."
 * A descendant of a node x is a node y that is
 * on the path from node x to some leaf node.
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
 * Example 3:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
 * Output: null
 * Explanation: Node 10 does not exist in the tree, so return null.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
  let LCA = null;
  let count = 0;
  let traversal = (node) => {
    if (!node) return;
    if (!p || !q) return;
    if (node.val === p.val || node.val === q.val) {
      count++;
    }
    let left = traversal(node.left);
    let right = traversal(node.right);
    count += left + right;
    if (count === 2 && LCA === null) {
      LCA = node;
    }
    return count;
  };
  traversal(root);
  return LCA;
}
