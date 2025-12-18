/** Level-order Bottom Traversal in Binary Tree: recursive approach -----------------------------------------
 * - explores a tree level by level from bottom to top,
 *   visiting all nodes at the present depth before moving on to nodes at the next depth level
 * - typically implemented using a queue, but can also be done recursively
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 *
 *      3
 *     / \
 *    9   20
 *       /  \
 *      15   7
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
 *
 * example:
 * input: root = [1]
 * output: [[1]]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */

function levelOrderBottom(root) {
  let res = [];
  // corner case: if root is null
  if (root === null) return res;

  function traversal(node, level) {
    if (node === null) return;
    // if the level of result array equals to current level,
    // meaning we need to add a new level array at the front
    // because we are doing bottom-up traversal
    if (res.length === level) {
      res.unshift([]);
    }
    // index to add the current node's value
    // is calculated as (res.length - 1 - level)
    // as we are adding levels in reverse order
    const index = res.length - 1 - level;
    res[index].push(node.val);
    // recursively process left and right children, increasing the level
    // corner case: check if child nodes exist
    node.left && traversal(node.left, level + 1);
    node.right && traversal(node.right, level + 1);
  }

  traversal(root, 0);
  return res;
}
