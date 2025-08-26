/** Design Linked List (Singly)
 * Design your own implementation of the linked list.
 * You can choose to use a singly or doubly linked list.
 * A node in a singly linked list should have two attributes: val and next.
 * val is the value of the current node, and next is a pointer/reference to the next node in the list.
 * If you want to use the doubly linked list, you will need one more attribute prev to
 * indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 * 0-indexed means that the first node is at position 0, the second node is at position 1, and so on.
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
