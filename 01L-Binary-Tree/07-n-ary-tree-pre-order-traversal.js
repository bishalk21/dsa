/** N-ary Tree Pre-order Traversal
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 *
 * Given the root of an n-ary tree, return the pre-order traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value (See examples).
 *
 * Example 1:
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [1,3,5,6,2,4]
 *                1
 *              / | \
 *             3  2  4
 *            / \
 *           5   6
 *
 * Example 2:
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
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

// Recursive Approach
function preorder(root) {
  let result = [];

  function traversal(node) {
    if (!node) return;
    // Visit the root node
    result.push(node.val);
    // Traverse each child (since it's an n-ary tree and can have multiple children)
    for (let child of node.children) {
      traversal(child);
    }
  }

  traversal(root);

  return result;
}

// Iterative Approach
function preOrder(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];

  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);

    // Push children to stack in reverse order to maintain left-to-right traversal
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }

  return result;
}

// among the two, iterative is preferred for its space efficiency in this case.
