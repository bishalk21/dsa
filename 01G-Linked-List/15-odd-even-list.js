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
 * Algorithm Pattern: Pointer Manipulation
 * - if head is null or head.next is null, return head.
 * - initialize two pointers, odd and even, to the head and head.next respectively.
 *   also store the starting point of even nodes in evenStart.
 * - while odd.next and even.next are not null,
 *   link odd to the next odd node (odd.next.next) and
 *   even to the next even node (even.next.next).
 *   then move odd and even pointers to their respective next nodes.
 * - after the loop, link the last odd node to
 *   the starting point of even nodes (evenStart).
 * - return the head of the modified list.
 *
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
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
}
