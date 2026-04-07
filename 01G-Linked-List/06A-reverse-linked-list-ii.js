/** Reverse Linked List II
 * https://leetcode.com/problems/reverse-linked-list-ii/
 *
 * Given the head of a singly linked list and two integers left and right
 * where left <= right, reverse the nodes of the list from position left to position right,
 * and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 *
 * Example 2:
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 *
 * Constraints:
 * * The number of nodes in the list is n.
 * * 1 <= n <= 500
 * * -500 <= Node.val <= 500
 * * 1 <= left <= right <= n
 *
 * Follow up: Could you do it in one pass?
 */

/** * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

/** Pattern: Linked List and Two Pointers (Dummy Node Pattern and prev pointer)
 * pseudocode
 * - create a dummy node to basically handle the head pointer change
 * - use a prev pointer to keep track of the node before the sublist to be reversed
 * - reverse the sublist in place
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 *
 * Algorithm:
 * 1. Create a dummy node and point its next to the head of the list.
 * 2. Initialize a prev pointer to the dummy node.
 * 3. Move the prev pointer to the node just before the left position
 *    (the start of the sublist to be reversed).
 * 4. Initialize a curr pointer to the node at the left position.
 * 5. Loop from left to right, reversing the nodes in place:
 *    a. Store the next node of curr in a temporary variable (temp).
 *    b. Update the next pointer of curr to skip the next node and point to the node after it.
 *    c. Insert the next node immediately after prev by updating the next pointers accordingly.
 *    d. Move the curr pointer to the next node (which is now the node after the reversed sublist).
 * 6. After the loop, return dummy.next as the new head of the modified list.
 */

function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  for (let i = left; i < right; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }
  return dummy.next;
}
