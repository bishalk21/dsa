/** Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 *
 * Given the roots of two binary trees root and subRoot,
 * return true if there is a subtree of root with the same structure and node values of subRoot
 * and false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree
 * and all of this node's descendants.
 * The tree tree could also be considered as a subtree of itself.
 *
 * Example 1:
 *      root
 *       3
 *      / \
 *     4   5    subRoot
 *   / \           4
 *  1   2         / \
 *               1   2
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 *
 * Example 2:
 *     root
 *      3
 *    / \
 *   4   5    subRoot
 *  / \           4
 * 1   2         / \
 *    /         1   2
 *   0
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * Output: false
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function isSubtree(root, subRoot) {
  // serialize both trees
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);
  // check if serialized subRoot is a substring of serialized root
  return hashRoot.includes(hashSubRoot);
}

// serializes a tree into a string using pre-order traversal
function serialize(node) {
  // hash to store the serialized string
  let hash = "";
  function preOrder(curr) {
    if (!curr) {
      // using a unique marker for null nodes to avoid ambiguity
      hash += "#,";
      return;
    }
    hash += curr.val + ",";
    preOrder(curr.left);
    preOrder(curr.right);
  }
  preOrder(node);
  return hash;
}
