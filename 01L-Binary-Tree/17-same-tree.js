/** Same Tree (easy)
 * https://leetcode.com/problems/same-tree/
 *
 * Given the roots of two binary trees p and q,
 * write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 *
 * Example 1:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Example 2:
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 *
 * Example 3:
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function isSameTree(p, q) {
  // both nodes are null, they are the same
  if (p === null && q === null) return true;
  // one of the nodes is null, they are not the same
  if (p === null || q === null) return false;
  // values of the nodes are different, they are not the same
  if (p.val !== q.val) return false;
  // recursively check left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
