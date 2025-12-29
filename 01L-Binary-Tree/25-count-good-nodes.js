/** Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 *
 * Given a binary tree root, a node X in the tree is named
 * "good" if in the path from root to X
 * there are no nodes with a value greater than X.
 *
 * Return the number of good nodes in the binary tree.
 *
 * Example 1:
 *              3
 *            /   \
 *           1     4
 *         /     /   \
 *        3     1     5
 * Input: root = [3,1,4,3,null,1,5]
 * Output: 4
 * Explanation:
 *      Nodes in blue are good.
 *      Root Node (3) is always a good node.
 *      Node 4 -> (3,4) is the maximum value in the path starting from the root.
 *      Node 5 -> (3,4,5) is the maximum value in the path starting from the root.
 *      Node 3 -> (3,1,3) is the maximum value in the path starting from the root.
 *
 * Example 2:
 *             3
 *            /
 *          3
 *         / \
 *        4   2
 * Input: root = [3,3,null,4,2]
 * Output: 3
 * Explanation:
 *      Node 2 -> (3,3,2) is not good, because
 *      3 is higher than 2.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number}
 */

function countGoodNodes(root) {
  let goodNodesCount = 0;
  function traversal(node, maxSoFar) {
    if (maxSoFar <= node.val) {
      goodNodesCount++;
    }
    let currMax = Math.max(maxSoFar, node.val);
    node.left && traversal(node.left, currMax);
    node.right && traversal(node.right, currMax);
  }
  traversal(root, -Infinity);
  return goodNodesCount;
}
