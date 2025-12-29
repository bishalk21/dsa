/** Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 * Example 1:
 *          3
 *         / \
 *        9  20
 *          /  \
 *         15   7
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * Explanation: The maximum depth is 3 because the longest path is 3 -> 20 -> 15 (or 3 -> 20 -> 7).
 *
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 * Explanation: The maximum depth is 2 because the longest path is 1 -> 2.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number}
 */

/**  Top-Down Approach
 * @param {TreeNode} root
 * @return {number}
 * - Time Complexity: O(N), where N is the number of nodes in the binary tree.
 * - Space Complexity: O(H), where H is the height of the binary tree (due to the recursion stack).
 */
function maxDepth(root) {
  let maxDepth = 0;
  function traverse(node, currentDepth) {
    if (!node) return;
    // If it's a leaf node, update the maximum depth
    if (!node.left && !node.right) {
      maxDepth = Math.max(maxDepth, currentDepth);
    }
    // Traverse the left and right subtrees
    traverse(node.left, currentDepth + 1);
    traverse(node.right, currentDepth + 1);
  }
  traverse(root, 1);
  return maxDepth;
}

/** Bottom-Up Approach
 * @param {TreeNode} root
 * @return {number}
 * - Time Complexity: O(N), where N is the number of nodes in the binary tree.
 * - Space Complexity: O(H), where H is the height of the binary tree (due to the recursion stack).
 */
function maxDepthBottomUp(root) {
  if (!root) return 0;
  const leftDepth = maxDepthBottomUp(root.left);
  const rightDepth = maxDepthBottomUp(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
