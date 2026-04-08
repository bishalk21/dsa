/** Intersection of Linked Lists
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 * Given the heads of two singly linked lists,
 * return the node at which the two lists intersect, or null if they do not.
 *
 * Algorithm Approach 1: Using Hashing/Hash Map/Hash Table/Map (optimal)
 * - put all the elements or nodes of the second linked list into a hash set.
 * - traverse the first linked list and check if any node is present in the hash set.
 * - If a node is found in the hash set, return that node as the intersection point.
 * - Time Complexity: O(m + n) where m and n are the lengths of the two lists.
 * - Space Complexity: O(m) where m is the length of the second list
 *   (the one we are putting into the hash set).
 * - This approach is efficient in terms of time complexity but uses extra space for the hash set.
 * - This approach is straightforward and easy to implement.
 *
 *
 * Algorithm Approach 2: Brute Force (not optimal)
 * - For each node in the first linked list, traverse the second linked list
 *   and check if there is a node that matches.
 * - If a match is found, return that node as the intersection point.
 *
 * - Time Complexity: O(n^2) - O(m * n) where m and n are the lengths of the two lists.
 * - Space Complexity: O(1)
 */

// Optimal Approach using Hashing/Hash Map/Hash Table/Map
function getIntersectionNodesOptimal(headA, headB) {
  let nodeSet = new Set();
  // while (headB !== null) {
  while (headB) {
    // add nodes of list B to the set
    nodeSet.add(headB);
    headB = headB.next;
  }
  // check if any node of list A is present in the set
  while (headA) {
    if (nodeSet.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
}

// Brute Force Approach
function getIntersectionNodes(headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA !== null) {
    // reset currB to the head of list B for each node in list A
    currB = headB;
    while (currB) {
      if (currA === currB) {
        return currA;
      }
      currB = currB.next;
    }
    currA = currA.next;
  }
  return null;
}

// Example:
const listA = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

const listB = {
  value: 4,
  next: {
    value: 5,
    next: {
      value: 6,
      next: listA.next, // Intersecting at node with value 2
    },
  },
};

const intersection = getIntersectionNodes(listA, listB);
console.log(intersection ? intersection.value : "No intersection"); // Output: 2
