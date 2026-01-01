/** Closest Binary Search Tree Value
 * https://leetcode.com/problems/closest-binary-search-tree-value/
 *
 * Given the root of a binary search tree and a target value,
 * return the value in the BST that is closest to the target.
 * You are guaranteed to have only one unique value in the BST that is closest to the target.
 * If there are multiple answers, print the smallest one.
 *
 * Example 1:
 *              4
 *           /    \
 *          2      5
 *        /  \
 *       1    3
 * Input: root = [4,2,5,1,3], target = 3.714286
 * Output: 4
 *
 * Example 2:
 *             1
 *              \
 *               2
 * Input: root = [1,null,2], target = 3.428571
 * Output: 2
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

// Top-Down Iterative Approach
function closestValue(root, target) {
  let closest = root.val;
  while (root !== null) {
    // Calculate distances
    const currentDiff = Math.abs(root.val - target);
    const closestDiff = Math.abs(closest - target);

    // Update closest if current is closer OR same distance but smaller value
    if (
      currentDiff < closestDiff ||
      (currentDiff === closestDiff && root.val < closest)
    ) {
      closest = root.val;
    }
    // Navigate BST using BST property
    if (target < root.val) {
      root = root.left;
    } else if (target > root.val) {
      root = root.right;
    } else {
      // Exact match found
      return root.val;
    }
  }
  return closest;
}

function closestValue(root, target) {
  let closest = root.val;
  function traversal(node, closest) {
    if (!node) return closest;
    // Calculate distances
    const currentDiff = Math.abs(node.val - target);
    const closestDiff = Math.abs(closest - target);

    // Update closest
    if (
      currentDiff < closestDiff ||
      (currentDiff === closestDiff && node.val < closest)
    ) {
      closest = node.val;
    }
    if (target < node.val) {
      traversal(node.left, closest);
    } else {
      traversal(node.right, closest);
    }
  }
  return traversal(root, closest);
}
