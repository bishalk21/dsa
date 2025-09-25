/** Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/
 *
 * Given the head of a singly linked list,
 * group all the nodes with odd indices together followed by the nodes with even indices,
 * and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the odd and even groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 *
 * Example 2:
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 *
 * Algorithm Approach: Iterative
 * - if head is null or head.next is null, return head.
 * - one pointer `odd` for head of list and another pointer `even` for head.next of list.
 * - use one more pointer `evenStart` to store the starting point of even nodes.
 * - traverse the list until odd.next and even.next is not null.
 * - In each iteration:
 * - link odd.next to odd.next.next (next odd node).
 * - link even.next to even.next.next (next even node).
 * - move odd and even pointers to their respective next nodes.
 * - After the loop, link odd.next to evenStart to connect odd and even lists.
 * - Return the head of the modified list.
 * - This approach ensures that we maintain the relative order of nodes within the odd and even groups.
 *
 * - Time Complexity: O(n) where n is the number of nodes in the list.
 * - Space Complexity: O(1)
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function oddEvenList(head) {
  if (!head || !head.next) return head;
  let odd = head; // Pointer for odd indexed nodes
  let even = head.next; // Pointer for even indexed nodes
  let evenStart = even; // Store the starting point of even nodes

  while (odd.next && even.next) {
    odd.next = odd.next.next; // Link to the next odd node
    even.next = even.next.next;
    odd = odd.next; // Move to the next odd node
    even = even.next; // Move to the next even node
  }
  odd.next = evenStart; // Connect odd list to even list
  return head;
}
