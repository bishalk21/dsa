/** Maximum Depth of N-ary Tree
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 *
 * Given a N-ary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 * (Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value.)
 *
 * Example 1:
 *         1
 *       / | \
 *      3  2  4
 *     / \
 *    5   6
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: 3
 * Explanation: The maximum depth is 3 because the longest path is 1 -> 3 -> 5 (or 1 -> 3 -> 6).
 *
 * Example 2:
 *            1
 *           /
 *         2
 *        / \
 *       3   4
 *      /     \
 *     5       6
 * Input: root = [1,null,2,null,3,null,4,null,5,null,6]
 * Output: 4
 * Explanation: The maximum depth is 4 because the longest path is 1 -> 2 -> 3 -> 5 (or 1 -> 2 -> 4 -> 6).
 *
 * Example 3:
 *               1
 *           / |  \  \
 *         /   |   \   \
 *        2    3    4   5
 *            / \   |   / \
 *           6   7  8  9  10
 *               |  |  |
 *              11 12  13
 *              |
 *             14
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: 5
 * Explanation: The maximum depth is 5 because the longest path is 1 -> 3 -> 7 -> 11 -> 14.
 *
 * Definition for a Node.
 * function Node(val, children) {
 *   this.val = val === undefined ? null : val;
 *  this.children = children === undefined ? null : children;
 * }
 *
 * @param {Node|null} root
 * @return {number}
 */

function maxDepthNAryTree(root) {
  if (!root) return 0;
  //   let depth = 0;
  //   for (let child of root.children) {
  //     depth = Math.max(depth, maxDepthNAryTree(child));
  //   }
  //   return depth + 1;

  let max1Depth = 0;
  let max2Depth = 0;
  for (let child of root.children) {
    let childDepth = maxDepthNAryTree(child);
    if (childDepth > max1Depth) {
      max2Depth = max1Depth;
      max1Depth = childDepth;
    } else if (childDepth > max2Depth) {
      max2Depth = childDepth;
    }
  }
  return max1Depth + 1;
}
