/** Level-order Traversal in Binary Tree: Queue -----------------------------------------
 * - explores a tree level by level,
 *   visiting all nodes at the present depth before moving on to nodes at the next depth level
 * - typically implemented using a queue, but can also be done recursively
 * - recursive approach involves a helper function that processes nodes level by level
 *  and collects their values
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
 * Output: [[3],[9,20],[15,7]]
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

function levelOrder(root) {
  if (!root) return [];
  let ans = [];
  let q = [root];
  while (q.length) {
    let size = q.length;
    let levelNodes = [];

    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (node) {
        levelNodes.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (levelNodes.length > 0) {
      ans.push(levelNodes);
    }
  }
  return ans;
}
