/** Design Linked List (Singly)
 * https://leetcode.com/problems/design-linked-list/
 *
 * Design your own implementation of the linked list.
 * You can choose to use a singly or doubly linked list.
 *
 * A node in a singly linked list should have two attributes: val and next.
 * val is the value of the current node, and
 * next is a pointer/reference to the next node in the list.
 *
 * If you want to use the doubly linked list, you will need one more attribute prev to
 * indicate the previous node in the linked list.
 * Assume all nodes in the linked list are 0-indexed.
 * 0-indexed means that the first node is at position 0,
 * the second node is at position 1, and so on.
 */

/** What is Node in Linked List?
 * A node in a linked list is a fundamental part of the data structure.
 * Each node contains two main components:
 * 1. Value (val): This holds the data or value of the node.
 * 2. Pointer/Reference (next): This points to the next node in the sequence.
 * In a singly linked list, each node points to the next node, while the last node points to null.
 */

/** How is Node created in Linked List?
 * A node is created by defining a class or a constructor function.
 * The class should have a constructor that initializes the val and next attributes.
 * The next attribute is usually initialized to null.
 */

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

function Node(value) {
  this.value = value;
  this.next = null;
}

// Create a new node with value 5
let newNode = new Node(5);

/** How is Linked List is represented in code?
 * A linked list is represented as a sequence of nodes.
 * Each node contains a value and a reference to the next node.
 * The first node is called the head, and the last node points to null.
 * The linked list can grow and shrink dynamically as nodes are added or removed.
 * The linked list is typically managed by a class that provides methods to manipulate the list.
 */

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
// }

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/** Implement the MyLinkedList class:
 * - MyLinkedList() Initializes the MyLinkedList object.
 * - int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
 * - void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * - void addAtTail(int val) Append a node of value val as the last element of the linked list.
 * - void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
 * - void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 */

/** ADD AT HEAD
 * - Create a new node with the given value
 * - Point the new node's next to the current head
 * - Update the head to the new node
 * - Increment the size of the list
 *
 * Time Complexity: O(1) - Adding at the head is a constant time operation since it does not require traversing the list.
 * Space Complexity: O(1) - We are only creating one new node, so the space complexity is constant.
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/** ADD AT TAIL
 * - Create a new node with the given value
 * - If the list is empty, set head to the new node (corner case)
 * - Otherwise, traverse to the end and append the new node
 *      - loop until the current node's next is null
 *      - set the current node's next to the new node
 * - Increment the size of the list
 * - Update the tail pointer if necessary
 *
 * Time Complexity: O(n) - In the worst case, we need to traverse the entire list to find the last node.
 * Space Complexity: O(1) - We are only creating one new node, so the space complexity is constant.
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  // If the list is empty, set head to the new node
  if (!this.head) {
    this.head = newNode;
  }
  // Otherwise, traverse to the end and append the new node
  else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

/** ADD AT INDEX
 * - Create a new node with the given value
 * - If the position is 0, use the addNodeAtHead method
 * - If the position is equal to the size, use the addNodeAtTail method
 * - Otherwise, traverse to the position and insert the new node
 *    - Start from the head and move to the desired position
 *    - Update the new node's next to the current node's next
 *    - Update the current node's next to the new node
 *    - Increment the size of the list
 *
 * Time Complexity: O(n) - In the worst case, we need to traverse the entire list to find the position where the new node should be inserted.
 * Space Complexity: O(1) - We are only creating one new node, so the space complexity is constant.
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  // If the position is 0, use the addNodeAtHead method
  if (index === 0) {
    this.addAtHead(val);
  }
  // If the position is equal to the size, use the addNodeAtTail method
  else if (index === this.size) {
    this.addAtTail(val);
  }
  // Otherwise, traverse to the position and insert the new node
  else if (index > 0 && index < this.size) {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  } // If index is greater than the size, the node will not be inserted (do nothing)
};

/** GET AT INDEX
 * - Traverse the list to the given index
 * - If the index is valid, return the value of the node at that index
 * - If the index is invalid, return -1
 *   - An index is considered valid if it is greater than or equal to 0 and less than the size of the list.
 *
 * Time Complexity: O(n) - In the worst case, we need to traverse the entire list to find the node at the given index.
 * Space Complexity: O(1) - We are not using any additional space that grows with the input size, so the space complexity is constant.
 */
MyLinkedList.prototype.get = function (index) {
  // If the index is invalid, return -1
  if (index < 0 || index >= this.size) {
    return -1;
  }

  // if the index is valid, return the value of the node at that index
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.value;
};

/** DELETE AT INDEX
 * - If the index is valid, delete the node at that index
 *   - reach the index - 1 node and update its next to skip the node at the index
 *   - If the index is 0, update the head to the next node
 *   - If the index is greater than 0, traverse to the position and delete the node
 *      - Start from the head and move to the desired position
 *      - Update the current node's next to skip the node at the index
 * - If the index is invalid, do nothing
 *   - An index is considered valid if it is greater than or equal to 0 and less than the size of the list.
 *
 * Time Complexity: O(n) - In the worst case, we need to traverse the entire list to find the node at the given index and delete it.
 * Space Complexity: O(1) - We are not using any additional space that grows with the input size, so the space complexity is constant.
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  // If the index is 0, update the head to the next node
  if (index === 0) {
    this.head = this.head.next;
  }
  // Otherwise, traverse to the position and delete the node
  else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  this.size--;
};
