/** Intersection of Linked Lists
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 * Given the heads of two singly linked lists,
 * return the node at which the two lists intersect, or null if they do not.
 *
 *
 *
 * Algorithm Approach 1: Using Hashing/Hash Map/Hash Table/Map (optimal)
 * - put all the elements or nodes of the first linked list or list in a hash set.
 * - traverse the second linked list and check if any node is already present in the hash set.
 * - If a node is found in the hash set, return that node as the intersection point.
 * - Time Complexity: O(m + n) where m and n are the lengths of the two lists.
 * - Space Complexity: O(1)
 * - This approach is efficient in terms of time complexity but uses extra space for the hash set.
 * - This approach is straightforward and easy to implement.
 *
 *
 * Algorithm Approach 2: Brute Force (not optimal)
 * - Compare each node of the first list with each node of the second list.
 * - If a match is found, return the intersecting node.
 * - Time Complexity: O(n^2) - O(m * n) where m and n are the lengths of the two lists.
 * - Space Complexity: O(1)
 *
 * Algorithm Approach 3: Two Pointers (optimal)
 * - Calculate the lengths of both linked lists.
 * - Find the difference in lengths.
 * - Move the pointer of the longer list ahead by the difference in lengths.
 * - Now, move both pointers one step at a time until they meet.
 * - The meeting point is the intersection node.
 * - Time Complexity: O(m + n) where m and n are the lengths of the two lists.
 * - Space Complexity: O(1)
 * - This approach is efficient in terms of both time and space complexity.
 * - This approach is slightly more complex to implement but avoids extra space usage.
 */

// Optimal approach using two pointers
function getIntersectionNodeTwoPointers(headA, headB) {
  let n = 0;
  let pA = headA;
  while (pA) {
    n++;
    pA = pA.next;
  }

  let m = 0;
  pB = headB;
  while (pB) {
    m++;
    pB = pB.next;
  }

  let diff = Math.abs(n - m);

  // first list as small and second list as large
  if (n > m) {
    temp = headA;
    headA = headB;
    headB = temp;
  }

  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  pA = headA;
  pB = headB;

  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }

  return pA;
}

function getIntersectionNodesOptimal(headA, headB) {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }
  return currA;
}
