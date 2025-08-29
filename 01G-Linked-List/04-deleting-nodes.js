/** Deleting nodes in a linked list
 * This function deletes a node from a linked list.
 * @param {Node} head - The head of the linked list.
 * @param {number} value - The value of the node to delete.
 * @returns {Node} - The new head of the linked list.
 *
 * 4. Getting the node at a specific index
 * @param {number} index - The index of the node to get.
 * @returns {Node} - The node at the specified index.
 *  - If the index is out of bounds, return null.
 *  - If the index is valid, return the node at that index.
 *  - If the list is empty, return null.
 *  - traverse the list to find the node at the given index
 *    - Start from the head and move to the desired index
 *  - use a loop to iterate through the list
 *    - Keep track of the current index
 *    - If the current index matches the desired index, return the current node
 *
 *
 */

// node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// linked list
class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

// 4. getting the node at a specific index
MyLinkedList.prototype.getNodeAtIndex = function (index) {
  // corner case: index is out of bounds
  if (index < 0 || index >= this.size) {
    return null;
  }

  // traverse the list to find the node at the given index
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.value;
};

// 5. Deleting a node by index
MyLinkedList.prototype.deleteNodeAtIndex = function (index) {
  // corner case: index is out of bounds
  if (index < 0 || index >= this.size) {
    return;
  }

  // corner case: if delete node is the head
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
};
