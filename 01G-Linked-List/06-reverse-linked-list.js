/** Reverse a linked list
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000].
 * - -5000 <= Node.val <= 5000
 *
 * Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
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
 *
 * @param {Node} head
 * @return {Node}
 */
/** How can we go back as in singly list we can only perform next?
 * - maintain the previous node while traversing the list starting with null
 * - maintain the current node while traversing the list starting with head
 * - maintain the next node while traversing the list starting with head.next
 * - for each node, reverse the next pointer to point to the previous node
 * - move the previous node to the current node
 * - move the current node to the next node
 * - repeat the process until we reach the end of the list (current node becomes null)
 * - at the end, the previous node will be the new head of the reversed list
 * - return the new head of the reversed list
 *
 * Time complexity: O(n) where n is the number of nodes in the linked list
 * Space complexity: O(1) since we are using only a constant amount of extra space for the pointers
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
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  this.head = prev;
  return this.head;
};
