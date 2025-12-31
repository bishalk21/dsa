/** Populating Next Right Pointers in Each Node II
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 *
 * You are given a binary tree
 *
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * };
 *
 * Populate each next pointer to point to its next right node.
 * If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 *
 * Example 1:
 *           1                              1 -> NULL
 *        /     \                        /    \
 *       2       3                      2  ->  3 -> NULL
 *      / \       \                    / \      \
 *     4   5       7                  4-> 5  ->  7 -> NULL
 * Input: root = [1,2,3,4,5,null,7]
 * Output: [1,#,2,3,#,4,5,7,#]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * }
 *
 * @param {Node} root
 * @return {Node}
 */

function connect(root) {
  if (!root) return root;
  let traversal = (curr) => {
    // Connect the children of curr
    if (curr.left && curr.right) {
      curr.left.next = curr.right;
    }
    // Connect the right child to the next subtree's leftmost child
    if (curr.left || curr.right) {
      let child = curr.right || curr.left;
      let nextNode = curr.next;
      while (nextNode && !child.next) {
        if (nextNode.left) {
          child.next = nextNode.left;
        } else if (nextNode.right) {
          child.next = nextNode.right;
        } else {
            nextNode = nextNode.next;
        }
      }
    }

    curr.left && traversal(curr.left);
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return root;
}
