/** Sliding Window Maximum (hard)
 * https://leetcode.com/problems/sliding-window-maximum/
 *
 * You are given an array of integers nums,
 * there is a sliding window of size k
 * which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
 * Return the max sliding window.
 *
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function maxSlidingWindow(nums, k) {
  let result = [];

  // deque is monotonically decreasing
  // maintains the maximum window element at the front
  let deque = []; // will store indices of array elements
  let i = (j = 0);

  while (j < nums.length) {
    // remove elements smaller than the current element from the back of the deque
    while (deque.length && nums[deque[deque.length - 1]] < nums[j]) {
      deque.pop();
    }
    // add current element at the back of the deque
    deque.push(nums[j]);

    // window has reached size k
    if (j >= k - 1) {
      // the front of the deque is the largest element of the window
      // push it to the result
      result.push(deque[0]);
      // remove the element going out of the window
      nums[i] === deque[0] && deque.shift();
      // slide the window
      i++;
    }
    // expand the window
    j++;
  }
  return result;
}
