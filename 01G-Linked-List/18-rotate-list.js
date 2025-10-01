/** Rotate List
 * https://leetcode.com/problems/rotate-list/
 * Given the head of a linked list, rotate the list to the right by k places.
 * Example 1:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 *
 * Example 2:
 * Input: head = [0,1,2], k = 4
 * Output: [2,0,1]
 *
 * - reach k from end
 * - mark it as new head
 * - link the last node to the first node
 *
 * Algorithm:
 * 1. Handle edge cases where the list is empty, has only one node, or k is 0.
 * 2. Use two pointers (slow and fast) to find the length of the list.
 * 3. Calculate the effective rotations needed by taking k modulo the length of the list.
 * 4. Move the fast pointer k steps ahead.
 * 5. Move both pointers until the fast pointer reaches the end of the list.
 * 6. The slow pointer will now be at the (length - k)th node.
 * 7. Adjust the pointers to rotate the list:
 *    - Connect the end of the list to the head.
 *    - Set the new head to be the node after the slow pointer.
 *   - Break the link at the slow pointer to form the new list.
 * 8. Return the new head of the rotated list.
 * 9. Time Complexity: O(n), where n is the number of nodes in the list.
 * 10. Space Complexity: O(1), as we are only using a constant amount of extra space.
 * 11. This solution efficiently handles cases where k is greater than the length of the list by using modulo operation.
 * 12. The use of two pointers allows us to find the rotation point in a single pass after determining the length.
 */

function rotateRight(head, k) {
  // Edge case: if the list is empty or has only one node, or k is 0
  if (!head || !head.next || k === 0) return head;
  // using slow and fast pointers to find the length of the list
  let slow = head;
  let fast = head;
  let length = 0; // Initialize length to 0

  // Calculate the length of the list
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  // to avoid unnecessary rotations
  k = k % length;

  // Move fast pointer k steps ahead to find the rotation point
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  // move both pointers until fast reaches the end
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Now, slow is at the (length - k)th node
  // and fast is at the last node
  fast.next = head; // Connect the end of the list to the head
  let newHead = slow.next; // The new head is the (length - k + 1)th node
  slow.next = null; // Break the link to form the new list
  return newHead; // Return the new head of the rotated list
}
