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
}

MyLinkedList.prototype.listCycle = function () {
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
};
