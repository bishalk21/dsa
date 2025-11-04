/** Next Greater Element
 * https://leetcode.com/problems/next-greater-element-i/
 *
 * The next greater element of some element x in an array is
 * the first greater element that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2,
 * where nums1 is a subset of nums2.
 *
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j]
 * and determine the next greater element of nums2[j] in nums2.
 * If there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 *
 * Example 1:
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 * - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 * - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
 * - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 *
 * Algorithm: Using Stack and Map
 * - Initialize an empty stack and a map to store the next greater elements
 *    - stack will be used to keep track of elements for which we are finding the next greater element
 *    - map will store the mapping of each element in nums2 to its next greater element
 * - Iterate through nums2 from right to left
 *   - For each element, pop elements from the stack until the top of the stack is greater than the current element
 *   - If the stack is empty, it means there is no greater element to the right, so map the current element to -1
 *  - Otherwise, map the current element to the top of the stack
 *  - Push the current element onto the stack
 * - After processing nums2, iterate through nums1 and use the map to find the next greater elements
 * - Return the results as an array
 * Time Complexity: O(m + n), where m is the length of nums1 and n is the length of nums2.
 * Space Complexity: O(n), for the stack and map used to store next greater elements.
 */

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  let nextGreaterMap = {};
  let n = nums2.length;

  stack.push(nums2[n - 1]); // push last element
  nextGreaterMap[nums2[n - 1]] = -1; // last element has no next greater element

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1]; // peek

    if (nums2[i] < top) {
      nextGreaterMap[nums2[i]] = top;
    } else {
      while (stack.length) {
        if (stack[stack.length - 1] < nums2[i]) {
          stack.pop();
        } else {
          nextGreaterMap[nums2[i]] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) {
        nextGreaterMap[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
  }

  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(nextGreaterMap[nums1[i]]);
  }
  return ans;

  // return nums1.map((num) => nextGreaterMap[num]);
}
