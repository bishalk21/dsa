/** Intersection of Linked Lists
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 * Given the heads of two singly linked lists,
 * return the node at which the two lists intersect, or null if they do not.
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
 */

// Optimal Approach using Hashing/Hash Map/Hash Table/Map
function getIntersectionNodesOptimal(headA, headB) {
  // put all nodes of list B in a set
  let nodeSet = new Set();

  // while (headB !== null) {
  while (headB) {
    // add node to the set
    nodeSet.add(headB);
    headB = headB.next;
  }

  // check if any node of list A is present in the set
  while (headA) {
    if (nodeSet.has(headA)) {
      return headA; // intersection found
    }
    headA = headA.next;
  }
  return null; // no intersection found
}

// Brute Force Approach
function getIntersectionNodes(headA, headB) {
  let currA = headA;
  let currB = headB;

  // while currA
  while (currA !== null) {
    currB = headB;
    while (currB) {
      if (currA === currB) {
        return currA; // intersection found
      }
      currB = currB.next;
    }
    currA = currA.next;
  }
  return null; // no intersection found
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
