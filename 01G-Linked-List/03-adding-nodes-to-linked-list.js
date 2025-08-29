/** Adding nodes to the linked list
 * 1. Adding a node at the head or the beginning
 *    - Create a new node
 *    - Point the new node's next to the current head
 *    - Update the head to the new node
 * 2. Adding a node at the tail or the end
 *    - Create a new node
 *    - If the list is empty, set head to the new node (corner case)
 *    - Otherwise, traverse to the end and append the new node
 *          - loop until the current node's next is null
 *          - set the current node's next to the new node
 *   - Increment the size of the list
 *   - Update the tail pointer if necessary
 *   - If the list was empty, set the tail to the new node
 *   - If the list was not empty, update the tail's next to the new node
 * 3. Adding a node at a specific position or index
 *    - Create a new node
 *    - If the position is 0, use the addNodeAtHead method
 *    - If the position is equal to the size, use the addNodeAtTail method
 *    - Otherwise, traverse to the position and insert the new node
 *      - Start from the head and move to the desired position
 *      - Update the new node's next to the current node's next
 *      - Update the current node's next to the new node
 *      - Increment the size of the list
 */

// Linked List Node
// function ListNode(value) {
//   this.value = value;
//   this.next = null;
// }

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List
// function MyLinkedList() {
//   this.head = null;
//   this.size = 0;
// }

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

// 1. Adding a node at the head or the beginning
MyLinkedList.prototype.addNodeAtHead = function (value) {
  const newNode = new ListNode(value);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// 2. Adding a node at the tail or the end
MyLinkedList.prototype.addNodeAtTail = function (value) {
  let newNode = new ListNode(value);

  // corner case: if the list is empty, set the head to the new node
  if (this.head === null) {
    this.head = newNode;
  }
  // traverse to the end and append the new node
  else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

// 3. Adding a node at a specific position or index
MyLinkedList.prototype.addNodeAtIndex = function (index, value) {
  let newNode = new ListNode(value);

  // corner case: if the index is out of bounds
  if (index < 0 || index > this.size) {
    return;
  }

  // if the index is at 0 or the list is empty, add at head
  if (index === 0 || this.head === null) {
    this.addNodeAtHead(value);
    return;
  }

  // if the index is equal to the size, add at tail
  else if (index === this.size) {
    this.addNodeAtTail(value);
    return;
  }
  // traverse to the position and insert the new node
  else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
};
