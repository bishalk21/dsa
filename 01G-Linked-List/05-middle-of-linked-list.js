/** Middle of Linked List
 * Given the head of a singly linked list,
 * return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node is 3. The second middle node is 4.
 *
 * Approach 1: convert this linked list to an array and return the middle element.
 * - create an array to store the values of the linked list
 * - iterate through the linked list and push each value into the array
 * - find the middle index
 * - return the subarray from the middle index to the end
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Approach 2: slow and fast pointer
 * - create two pointers, slow and fast
 * - initialize both pointers to the head of the linked list
 * - move the fast pointer two steps for every one step the slow pointer takes
 * - when the fast pointer reaches the end of the list, the slow pointer will be at the middle
 * Time Complexity: O(n)
 * Space Complexity: O(1)
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

MyLinkedList.prototype.getMiddle = function (head) {
  let slow = head;
  let fast = head;

  //   while (fast !== null && fast.next !== null) {
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Approach 1: convert linked list into array and return the middle element
MyLinkedList.prototype.getMiddle = function (head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  let mid = Math.floor(arr.length / 2);
  return arr.slice(mid);
};
