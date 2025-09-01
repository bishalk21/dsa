/** Reverse a linked list
 * head [1|next] -> [2|next] -> [3|next] -> [4|next] -> [5|next] -> null
 *
 * Algorithm:
 * - initialize three pointers: prev, curr, and temp
 *     - set prev to null
 *     - set curr to head (curr -> 1)
 * - iterate through the list till curr is not null
 *     - set temp to curr.next (temp -> 2)
 *     - set curr.next to prev (curr -> null)
 *     - move prev to curr (prev -> 1)
 *     - move curr to temp (curr -> 2)
 * - set head to prev (head -> 5)
 * - return head
 *
 * null <- [next|1] <- [next|2] <- [next|3] <- [next|4] <- [next|5] head
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

MyLinkedList.prototype.reverseLinkedList = function () {
  let prev = null;
  let curr = this.head;
  console.log("Initial: ", { prev, curr });
  // iterate till curr !== null
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  this.head = prev;
  return this.head;
};
