/** Linked List Cycle - Floyd's Algorithm
 *
 * Floyd's Cycle Detection Algorithm, also known as slow and fast algorithm (Tortoise and Hare)
 *
 * This algorithm uses two pointers, a slow pointer (tortoise) and a fast pointer (hare).
 * The slow pointer moves one step at a time, while the fast pointer moves two steps.
 * If there is a cycle, the fast pointer will eventually meet the slow pointer.
 * If there is no cycle, the fast pointer will reach the end of the list.
 *
 * Problem statement:
 * Given head, the head of a linked list,
 * determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list
 * that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node
 * that tail's next pointer is connected to.
 * Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Constraints:
 * The number of the nodes in the list is in the range [0, 104].
 * -105 <= Node.val <= 105
 * pos is -1 or a valid index in the linked-list.
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the second node.
 *
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the first node.
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 *
 * Algorithm Approach:
 * - Use two pointers, slow and fast.
 * - Move slow pointer one step at a time and fast pointer two steps at a time.
 * - If there is a cycle, the fast pointer will eventually meet the slow pointer.
 * - If there is no cycle, the fast pointer will reach the end of the list.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  listCycle() {
    // if empty list
    if (this.head === null) return false;
    let slow = this.head;
    let fast = this.head.next;
    while (slow !== fast) {
      if (fast === null || fast.next === null) {
        return false;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  }
}

function hasCycle(head) {
  // corner case: empty list
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow && fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

// MyLinkedList.prototype.listCycle = function () {
//   // if empty list
//   if (this.head === null) return false;
//   let slow = this.head;
//   let fast = this.head.next;

//   while (slow !== fast) {
//     if (fast === null || fast.next === null) {
//       return false;
//     }
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return true;
// };
