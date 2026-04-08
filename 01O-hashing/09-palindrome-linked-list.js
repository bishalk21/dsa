/** Palindrome Linked List Check
 * https://leetcode.com/problems/palindrome-linked-list/
 *
 * Given the head of a singly linked list,
 * return true if the list is a palindrome or false otherwise.
 *
 * A palindrome is a sequence that reads the same backward as forward.
 * For example, 1 -> 2 -> 2 -> 1 is a palindrome, while 1 -> 2 is not.
 *
 * Example 1:
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: false
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 10^5].
 * - 0 <= Node.val <= 9
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
 *
 * Algorithm Approach 1:
 * - Convert the linked list to an array
 * - find the middle of the array (n/2) and
 * - compare the first half (0 to n/2) with the second half (n - 1 - i).
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * Algorithm Approach 2: using slow/fast pointer and reverse the second half of the list
 * - Use a slow/fast pointer to find the middle of the list.
 * - Reverse the second half of the list in-place (flip the next pointers).
 * - Compare the first half and the reversed second half of the list.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */

// Approach 2
function isPalindromeOptimized(head) {
  // slow/fast pointer
  let slow = head;
  let fast = head;

  // 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null

  // find the middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  /**
   * 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null
   *
   * curr = middle = 3
   * next = curr.next = 2
   * curr.next = prev = null
   * prev = curr = 3
   * curr = next = 2
   *
   * 1 -> 2 -> 3
   * reverse 2nd half
   * 1 -> 2 -> 3 -> null
   *
   */

  // reverse the second half
  let curr = slow;
  let prev = null;
  while (curr !== null) {
    // temp variable to store the next node
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // checking palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList !== null) {
    if (firstList.value !== secondList.value) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}

// EXAMPLE
console.log(
  isPalindromeOptimized({
    value: 1,
    next: { value: 2, next: { value: 1, next: null } },
  }),
); // true
console.log(
  isPalindromeOptimized({
    value: 1,
    next: { value: 2, next: { value: 3, next: null } },
  }),
); // false

// Approach 1
function isPalindrome(head) {
  let listArr = [];
  let curr = head;
  while (curr) {
    listArr.push(curr.value);
    curr = curr.next;
  }
  for (let i = 0; i < listArr.length / 2; i++) {
    if (listArr[i] !== listArr[listArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Approach 1:
function isPalindrome(head) {
  let listArr = [];
  let curr = head;

  while (curr !== null) {
    listArr.push(curr.value);
    curr = curr.next;
  }
  let reversedArr = [...listArr].reverse();
  console.log(listArr);
  //   let reversedArr = reversesArr(listArr);
  //   return isEqual(listArr, reversedArr);
  console.log(reversedArr);
  return isEqual(listArr, reversedArr);
}

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function reversesArr(arr) {
  let arrLength = arr.length;
  let temp;
  for (let i = 0; i < arrLength / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arrLength - 1 - i];
    arr[arrLength - 1 - i] = temp;
  }
  return arr;
}

// // example
console.log(
  isPalindrome({
    value: 1,
    next: { value: 2, next: { value: 1, next: null } },
  }),
); // true
console.log(
  isPalindrome({
    value: 1,
    next: {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    },
  }),
); // false
