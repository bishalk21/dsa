/** Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Algorithm:
 * 1. Initialize a dummy node to help with building the result list.
 * (if we don't use a dummy node, we need to find the start of the list to return it later)
 * 2. Use a pointer to track the current position in the new list.
 * 3. Loop through both lists until one is null.
 *  a. Compare the values of the current nodes in both lists.
 *  (always trying to find the next smallest value to add to the new list)
 *  b. Append the smaller value to the new list and move the pointer in that list forward.
 *  c. Move the current pointer in the new list forward.
 * 4. If there are remaining nodes in either list, append them to the end of the new list.
 * 5. Return the next node of the dummy node, which is the head of the new list.
 * 6. Time Complexity: O(m + n), where m and n are the lengths of the two lists.
 * 7. Space Complexity: O(1), as we are only using a few pointers and not creating new nodes (except for the dummy head).
 * 8. This solution handles cases where the lists are of different lengths.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// using a dummy node
function mergeTwoListsDummy(l1, l2) {
  let dummyNode = new ListNode(0);
  let curr = dummyNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) curr.next = l2;
  if (!l2) curr.next = l1;
  return dummyNode.next;
}

// without using a dummy node
function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let curr = null;
  if (l1.val < l2.val) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }

  let head = curr; // to return the head of the merged list later

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) curr.next = l2;
  if (!l2) curr.next = l1;
  return head;
}
