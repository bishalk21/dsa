/** Right Side View of Binary Tree
 * https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * Given the root of a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * Example 1:
 *           1     <-- visible
 *          / \
 *         2   3   <-- visible
 *          \   \
 *           5   4  <-- visible
 *
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 *
 *               1    <-- visible
 *              / \
 *             2   3  <-- visible
 *            /
 *           4        <-- visible
 *          /
 *         5          <-- visible
 * Input: root = [1,2,3,4,null,null,null,5]
 * Output: [1,3,4,5]
 *
 * Example 2:
 * Input: root = [1,null,3]
 * Output: [1,3]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 *  }
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

function rightSideView(root) {
  if (!root) return [];
  let res = [];
  let q = [root];

  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      i === 0 && res.push(node.val);
      node.right && q.push(node.right);
      node.left && q.push(node.left);
    }
  }
  return res;
}
