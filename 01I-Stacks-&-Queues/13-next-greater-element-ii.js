/** Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 *
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]),
 * return the next greater number for every element in nums.
 *
 * The next greater number of a number x is the first greater number to its traversing-order next in the array,
 * which means you could search circularly to find its next greater number.
 * If it doesn't exist, return -1 for this number.
 *
 * Example 1:
 * Input: nums = [1,2,1]
 * Output: [2,-1,2]
 * Explanation: The first 1's next greater number is 2;
 * The number 2 can't find next greater number;
 * The second 1's next greater number needs to search circularly, which is also 2.
 *
 * Example 2:
 * Input: nums = [1,2,3,4,3]
 * Output: [2,3,4,-1,4]
 *
 * Algorithm: Using Stack
 * - Initialize an empty stack to keep track of elements for which we are finding the next greater element
 * - Create a result array initialized with -1s, of the same length as nums
 * - Push the last element of nums onto the stack
 * - Iterate through the nums array from right to left, simulating a circular array by iterating twice the length of nums
 * - For each element, pop elements from the stack until the top of the stack is greater than the current element
 * - If the stack is not empty after popping, set the result for the current index to the top of the stack
 * - Push the current element onto the stack
 * - Return the result array
 * Time Complexity: O(n), where n is the length of the nums array.
 * Space Complexity: O(n), for the stack and result array.
 */

function nextGreaterElements(nums) {
  let stack = [];
  let arr = [...nums, ...nums]; // simulate circular array
  let n = arr.length;
  let result = Array(n).fill(-1);

  stack.push(arr[n - 1]); // push last element

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) {
        result[i] = top;
        break;
      } else {
        stack.pop();
      }
      if (!stack.length) {
        result[i] = -1;
      }
    }
    stack.push(arr[i]);
  }
  return result.slice(0, n / 2);
}

// without using two-pass array
function nextGreaterElements(nums) {
  let stack = [];
  let n = nums.length;
  let result = Array(n).fill(-1);

  stack.push(nums[n - 1]); // push last element

  // iterate twice the length of the array
  for (let i = 2 * n - 2; i >= 0; i--) {
    let index = i % n; // get the actual index in the circular array
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums[index] < top) {
        result[index] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(nums[index]);
  }
  return result.slice(0, n);
}
