/** Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 * (i.e., from left to right, then right to left for the next level and alternate between).
 *
 * Example 1:
 *            3
 *           / \
 *          9  20
 *            /  \
 *           15   7
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 *
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */

function zigzagLevelOrder(root) {
  if (!root) return [];
  let res = [];
  let q = [root];
  let level = 0;
  while (q.length) {
    let size = q.length;
    let levelNodes = [];

    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (level % 2 === 0) {
        levelNodes.push(node.val);
      } else {
        levelNodes.unshift(node.val);
      }
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    res.push(levelNodes);
    level++;
  }
  return res;
}
