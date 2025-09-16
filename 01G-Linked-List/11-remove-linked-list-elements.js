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
 * Algorithm Approach: Iterative
 * - Use a dummy node (Sentinel) to simplify the removal process.
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

  let prev = sentinel; // Pointer to the previous node
  while (prev && prev.next) {
    if (prev.next.val === val) {
      // Node needs to be removed
      prev.next = prev.next.next; // Skip the node
    } else {
      // Move to the next node
      prev = prev.next;
    }
  }
  // Return the new head, which is the next of the sentinel node
  return sentinel.next;
}
