/** Second Minimum Node in a Binary Tree
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
 *
 * Given a non-empty special binary tree consisting of nodes with the non-negative value,
 * where each node in this tree has exactly two or zero sub-node.
 * If the node has two sub-nodes,
 * then this node's value is the smaller value among its two sub-nodes.
 * Given such a binary tree,
 * you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
 * If no such second minimum value exists, output -1 instead.
 *
 * Example 1:
 *               2
 *            /    \
 *           2      5
 *                 / \
 *                5   7
 * Input: root = [2,2,5,null,null,5,7]
 * Output: 5
 * Explanation: The smallest value is 2, the second smallest value is 5.
 *
 * Example 2:
 *               2
 *            /    \
 *           2      2
 * Input: root = [2,2,2]
 * Output: -1
 * Explanation: The smallest value is 2, but there isn't any second smallest value.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number}
 */

function findSecondMinimumValue(root) {
  let min = root.val;
  let secondMin = Infinity;
  let traversal = (node) => {
    if (node === null) return;
    if (node.val > min && node.val < secondMin) {
      secondMin = node.val;
    }
    traversal(node.left);
    traversal(node.right);
  };
  traversal(root);
  return secondMin === Infinity ? -1 : secondMin;
}
