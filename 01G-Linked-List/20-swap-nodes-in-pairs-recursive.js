/** Swap nodes in pairs in a linked list (Recursive)
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 * Example 2:
 * Input: head = []
 * Output: []
 * Example 3:
 * Input: head = [1]
 * Output: [1]
 *
 * Algorithm:
 * - Base case: if head is null or head.next is null, return head
 * - Create two pointers: leftNode (head) and rightNode (head.next)
 * - Recursively call swapPairs for the next pair (rightNode.next)
 * - Swap the nodes by changing the pointers
 * - Return rightNode as the new head of the swapped pair
 * - Time complexity: O(n)
 * - Space complexity: O(n) due to recursion stack
 */

function swapPairs(head) {
  if (!head || !head.next) return head;

  let leftNode = head;
  let rightNode = head.next;

  leftNode.next = swapPairs(rightNode.next);
  rightNode.next = leftNode;
  return rightNode;
}
