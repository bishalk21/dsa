/** N-ary Tree Post-order Traversal
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 *
 * Given the root of an n-ary tree, return the post-order traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value (See examples).
 *
 * Example 1:
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [5,6,3,2,4,1]
 *                1
 *              / | \
 *             3  2  4
 *            / \
 *           5   6
 *
 * Example 2:
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 *               1
 *           / |  \  \
 *          /  |   \   \
 *         2   3    4   5
 *            / \   |   / \
 *           6   7  8   9 10
 *               |  |   |
 *              11  12  13
 *               |
 *              14
 *
 * Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *   this.children = children;
 * }
 *
 * @param {Node|null} root
 * @return {number[]}
 */

// recursive Approach
function postorder(root) {
  if (!root) return [];
  let res = [];

  function traversal(node) {
    if (!node) return;
    // Traverse each child (since it's an n-ary tree and can have multiple children)
    for (let child of node.children) {
      traversal(child);
    }
    // Visit the root node
    res.push(node.val);
  }

  traversal(root);
  return ans;
}

// iterative Approach
function postOrder(root) {
  if (!root) return [];
  let result = [];
  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    // Push all children to s1
    for (let child of curr.children) {
      s1.push(child);
    }
  }

  while (s2.length) {
    result.push(s2.pop().val);
  }

  return result;
}
