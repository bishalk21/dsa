/** Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia:
 * "The lowest common ancestor is defined between two nodes p and q
 *  as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself)."
 *
 * Example 1:
 *              6
 *           /    \
 *          2      8
 *        /  \   /  \
 *       0    4 7    9
 *           / \
 *          3   5
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 *
 * Example 2:
 *              6
 *           /    \
 *          2      8
 *        /  \   /  \
 *       0    4 7    9
 *           / \
 *          3   5
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2,
 *              since a node can be a descendant of itself according to the LCA definition.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
  let LCA = null;
  let traversal = (node) => {
    if (p.val < node.val && q.val < node.val && node.left) {
      traversal(node.left);
    } else if (p.val > node.val && q.val > node.val && node.right) {
      traversal(node.right);
    } else {
      LCA = node;
    }
  };
  traversal(root);
  return LCA;
}
