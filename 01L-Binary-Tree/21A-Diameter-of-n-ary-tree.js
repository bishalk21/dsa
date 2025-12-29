/** Diameter of N-ary Tree
 * https://leetcode.com/problems/diameter-of-n-ary-tree/
 *
 * Given a root of an N-ary tree, you need to compute
 * the length of the diameter of the tree.
 * The diameter of an N-ary tree is the length of
 * the longest path between any two nodes in the tree.
 * This path may or may not pass through the root.
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
 * Explanation: 3 is the length of the path [5,3,1,2] or [6,3,1,4].
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
 * Explanation: 4 is the length of the path [5,3,2,4,6].
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
 * Output: 7
 * Explanation: 7 is the length of the path [11,7,3,1,5,9,13].
 *
 * Definition for a Node.
 * function Node(val, children) {
 *   this.val = val === undefined ? 0 : val;
 *  this.children = children === undefined ? [] : children;
 * }
 *
 * @param {Node|null} root
 * @return {number}
 */

function diameterOfNAryTree(root) {
  // Initialize the maximum diameter
  let maxDiameter = 0;
  // Helper function to compute the depth of the tree
  function depth(node) {
    // Base case: if the node is null, return 0
    if (!node) return 0;

    // To find the top two maximum depths among all children
    let max1 = 0; // First maximum depth
    let max2 = 0; // Second maximum depth

    // Recursively compute the depth of each child
    for (let child of node.children) {
      let childDepth = depth(child);

      // Update the top two maximum depths
      if (childDepth > max1) {
        max2 = max1;
        max1 = childDepth;
      } else if (childDepth > max2) {
        max2 = childDepth;
      }
    }
    let currentDiameter = max1 + max2;

    // Update the maximum diameter if the path through the current node is larger
    maxDiameter = Math.max(maxDiameter, currentDiameter);
    // Return the depth of the tree rooted at the current node
    return max1 + 1;
  }
  depth(root);
  return maxDiameter;
}
