/** Linked List Cycle Detection using Hash Table
 * This function detects if a linked list has a cycle using a hash table.
 * It traverses the list and stores each visited node in a hash table.
 * If a node is encountered that is already in the hash table, a cycle is detected.
 *
 * if node has next pointer pointing to any of the visited nodes, then it is a cycle
 * if node has next pointer pointing to null, then it is not a cycle
 *
 * Finding Cycle in Linked List
 * Approach 1: Hash Table (Using a Set)
 * 1. Create a set to store visited nodes.
 * 2. Traverse the linked list.
 * 3. If the current node is in the set, a cycle is detected.
 * 4. If the end of the list is reached, there is no cycle.
 * 5. Return true if a cycle is detected, otherwise return false.
 *
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

MyLinkedList.prototype.hasCycle = function () {
  let curr = this.head;
  let visitedNodes = new Set();

  while (curr !== null) {
    if (visitedNodes.has(curr)) {
      return true;
    }
    visitedNodes.add(curr);
    curr = curr.next;
  }
  return false;
};
