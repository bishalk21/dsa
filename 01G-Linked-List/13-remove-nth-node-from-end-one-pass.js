/** Remove nth node from end - One Pass
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given the head of a linked list,
 * remove the nth node from the end of the list and
 * return its head.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Algorithm Approach: One Pass Technique (Two Pointers)
 * - Use a dummy node (Sentinel) to simplify the removal process.
 * - Use two pointers (first and second) to traverse the list.
 * - Move the first pointer or fast pointer n steps ahead.
 * - move second pointer or slow pointer to the head.
 * - Move both pointers until the first pointer reaches the end of the list.
 * - At this point, the second pointer will be at the (length - n)th node or the previous node to the one we want to remove.
 * - Adjust the pointers to skip the nth node from the end.
 * - Return the next of the dummy node as the new head of the modified list.
 * - Handle edge cases such as an empty list or removing the head node.
 * - This approach ensures that we can handle the removal of nodes uniformly, including the head node.
 *
 * - Time Complexity: O(L) where L is the number of nodes in the list.
 * - Space Complexity: O(1)
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNthFromEnd(head, n) {
  // sentinel node to handle edge cases
  let sentinel = new ListNode(0);
  sentinel.next = head;

  // first pointer
  let first = head;
  // Move the first pointer n steps ahead
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  // second pointer
  let second = sentinel; // Pointer to the previous node

  // Move both pointers until the first pointer reaches the end of the list
  while (first) {
    first = first.next;
    second = second.next;
  }
  // Remove the nth node from the end
  second.next = second.next.next;
  return sentinel.next;
}
