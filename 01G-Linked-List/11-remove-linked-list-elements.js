/** Remove Linked List Elements
 * https://leetcode.com/problems/remove-linked-list-elements/
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list
 * that has Node.val == val, and
 * return the new head.
 *
 * Example 1:
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Example 2:
 * Input: head = [], val = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 10^4].
 * - 1 <= Node.val <= 50
 * - 0 <= val <= 50
 *
 * Algorithm Approach: Iterative
 *
 * keeping track of previous node is necessary as
 * we need to adjust the pointers to remove nodes.
 *
 * What is a dummy node (Sentinel)?
 * A dummy node, also known as a sentinel node,
 * is a placeholder node that is used to simplify edge cases in linked list operations.
 * It does not hold any meaningful data and
 * is typically placed at the beginning of the list.
 * The dummy node allows us to avoid special handling for cases
 * where the head of the list needs to be removed,
 * as it provides a consistent starting point for traversal and manipulation of the list.
 *
 * - Use a dummy node (Sentinel) to simplify the removal process.
 * - sentinel node helps us delete node from the starting of the list
 *   without worrying about edge cases.
 * - sentinel node keeps check on the next node and
 *   if it needs to be removed, we can easily adjust the pointers
 *   without worrying about edge cases.
 *
 *
 * - add a dummy node at the beginning of the list, pointing to the head.
 * - Traverse the list
 * - If the current node's value is equal to val, adjust the pointers to skip this node.
 * - Otherwise, move to the next node.
 * - Continue until the end of the list.
 * - Return the next of the dummy node as the new head of the modified list.
 * - Handle edge cases such as an empty list or all nodes being removed.
 * - This approach ensures that we can handle the removal of nodes uniformly, including the head node.
 *
 * - Time Complexity: O(n) where n is the number of nodes in the list.
 * - Space Complexity: O(1)
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeElements(head, val) {
  // sentinel node to handle edge cases
  let sentinel = new ListNode(0);
  sentinel.next = head;
  let prev = sentinel;
  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
}
