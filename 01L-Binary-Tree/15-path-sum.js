/** Path Sum
 * https://leetcode.com/problems/path-sum/
 *
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 *
 * Example 1:
 *         5
 *        / \
 *       4   8
 *      /   / \
 *     11  13  4
 *    / \       \
 *   7   2       1
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 *
 * Example 2:
 * Input: root = [1,2,3], targetSum = 5
 * Output: false
 * Explanation: There two root-to-leaf paths in the tree:
 * (1 --> 2): The sum is 3.
 * (1 --> 3): The sum is 4.
 * There is no root-to-leaf path with sum = 5.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// top-down approach
function hasPathSum(root, targetSum) {
  // base case: if the node is null, return false
  if (root === null) return false;
  let ans = false;

  function dfs(node, currentSum) {
    if (node === null) return;
    let newSum = currentSum + node.val;

    // check if the node is a leaf
    if (node.left === null && node.right === null) {
      if (newSum === targetSum) {
        ans = ans || true;
      }
      return;
    }

    node.left && dfs(node.left, newSum);
    node.right && dfs(node.right, newSum);
  }
  dfs(root, 0);
  return ans;
}

// bottom-up approach
function hasPathSum(root, targetSum) {
  // base case: if the node is null, return false
  if (root === null) return false;
  // check if the node is a leaf
  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }
  let isLeftPathHasSum = hasPathSum(root.left, targetSum - root.val);
  let isRightPathHasSum = hasPathSum(root.right, targetSum - root.val);
  return isLeftPathHasSum || isRightPathHasSum;
}
