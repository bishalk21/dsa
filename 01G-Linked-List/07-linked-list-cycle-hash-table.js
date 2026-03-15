/** Linked List Cycle Detection using Hash Table
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
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
 * Constraints:
 * The number of the nodes in the list is in the range [0, 104].
 * -10^5 <= Node.val <= 10^5
 * pos is -1 or a valid index in the linked-list.
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 *
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
    curr = curr.next
  }
  return false;
};
