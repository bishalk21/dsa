/** Remove nth node from end of list
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
 * Algorithm Approach: Two-Pointer Technique
 * - Use a dummy node (Sentinel) to simplify the removal process.
 * - calculate the length of the linked list.
 * - find the (length - n)th node from the start of the list as the previous node to the one we want to remove.
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

  // Calculate the length of the linked list
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  // Find the (length - n)th node from the start
  let prevLen = length - n;
  let prev = sentinel; // Pointer to the previous node
  //   while (prevLen > 0) {
  //     prev = prev.next;
  //     prevLen--;
  //   }

  for (let i = 0; i < prevLen; i++) {
    prev = prev.next;
  }

  // Remove the nth node from the end
  prev.next = prev.next.next;

  return sentinel.next;
}
