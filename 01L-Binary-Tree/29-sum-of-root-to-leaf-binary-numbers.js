/** Sum of Root To Leaf Binary Numbers
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
 *
 * You are given the root of a binary tree where each node's value is either 0 or 1.
 * Each root-to-leaf path represents a binary number starting with the most significant bit.
 * For example, if the path is 0 -> 1 -> 1,
 * then this could represent 011 in binary, which is 3 in decimal.
 * For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
 * Return the sum of these numbers.
 * The test cases are generated so that the answer fits in a 32-bits integer.
 * A leaf node is a node with no children.
 *
 * Example 1:
 * Input: root = [1,0,1,0,1,0,1]
 * Output: 22
 * Explanation: (100)2 + (101)2 + (110)2 + (111)2 = 4 + 5 + 6 + 7 = 22
 *
 * Example 2:
 * Input: root = [0]
 * Output: 0
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 1000].
 * Node.val is 0 or 1.
 *
 * @param {TreeNode} root
 * @return {number}
 */

/** DFS: Recursive Approach (Pre-order Traversal)
 * 1. Initialize a variable to keep track of the sum of root-to-leaf binary numbers.
 * 2. Define a recursive function that takes a node and the current binary number as arguments.
 * 3. If the node is null, return from the function.
 * 4. Update the current binary number by shifting the previous value to the left and adding the current node's value.
 * 5. If the node is a leaf (i.e., it has no left or right children), add the current binary number to the sum.
 * 6. Recursively call the function for the left and right children of the current node.
 * 7. Return the final sum after traversing all root-to-leaf paths.
 * Time Complexity: O(n) because we visit each node exactly once.
 * Space Complexity: O(h) where h is the height of the tree, due to the recursive call stack.
 */

function sumRootToLeaf(root) {
  let sum = 0;
  // 1. recursive function to traverse the tree
  let dfs = (node, currNum) => {
    if (node === null) return;
    // 2. update the current binary number
    // currNum is the binary number formed from the root to the current node, we need to shift it left and add the current node's value
    // if we are at a node with value 1, we can add 1 to the current number
    // if we are at a node with value 0, we can just shift the current number to the left
    // currNum = 0, currNum << 1 (shift left) = 0, currNum << 1 | node.val = 0 | node.val = node.val
    currNum = (currNum << 1) | node.val; // equivalent to currNum = currNum * 2 + node.val
    // 3. if we are at a leaf node, add the current number to the sum
    if (node.left === null && node.right === null) {
      sum += currNum;
    }
    // 4. recursively call the function for the left and right children
    dfs(node.left, currNum);
    dfs(node.right, currNum);
  };
  dfs(root, 0);
  return sum;
}
