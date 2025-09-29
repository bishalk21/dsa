/** Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Algorithm:
 * 1. Initialize a dummy node to help with building the result list.
 * 2. Initialize a carry variable to handle sums greater than 9.
 * 3. Loop through both lists until both are null and there is no carry left.
 *   a. Sum the values of the current nodes and the carry.
 *   b. Update the carry for the next iteration.
 *   c. Create a new node with the digit value (sum % 10) and append it to the result list.
 *   d. Move to the next nodes in both lists.
 * 4. Return the next node of the dummy node, which is the head of the new list.
 * 5. Time Complexity: O(max(m, n)), where m and n are the lengths of the two lists
 * 6. Space Complexity: O(max(m, n)), for the new list.
 * 7. This solution handles cases where the lists are of different lengths and where there is a carry left after processing both lists.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let dummyNode = new ListNode(0);
  let dummyHead = dummyNode;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let newNode = new ListNode(digit);
    dummyNode.next = newNode;
    dummyNode = dummyNode.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return dummyHead.next;
}
