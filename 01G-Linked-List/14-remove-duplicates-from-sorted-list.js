/** Remove duplicates from sorted list
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * Given the head of a sorted linked list,
 * delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well.
 *
 * Example 1:
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 * Example 2:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 *
 * Algorithm Approach: Iterative
 * - Use a pointer to traverse the list.
 * - Compare the current node's value with the next node's value.
 * - If they are the same, skip the next node by adjusting the pointers.
 * - If they are different, move the pointer to the next node.
 * - Continue until the end of the list.
 * - Return the head of the modified list.
 * - This approach ensures that we only keep unique elements in the list.
 *
 * - Time Complexity: O(n) where n is the number of nodes in the list.
 * - Space Complexity: O(1)
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function deleteDuplicates(head) {
  // pointer to traverse the list
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // Skip the next node as it's a duplicate
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }
  return head;
}
