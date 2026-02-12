/** Longest Balanced Subarray II
 * https://www.leetcode.com/problems/longest-balanced-subarray-ii/
 *
 * You are given a 0-indexed binary array nums.
 *
 * A subarray is called balanced if the number of distinct even numbers
 * in the subarray is equal to the number of distinct odd numbers in the subarray.
 *
 * Return the length of the longest balanced subarray in nums.
 *
 * Example 1:
 * Input: nums = [2,5,4,3]
 * Output: 4
 * Explanation: The longest balanced subarray is the entire array [2,5,4,3].
 *              It has 2 distinct even numbers (2 and 4) and
 *              2 distinct odd numbers (5 and 3).
 * Example 2:
 * Input: nums = [3,2,2,5,4]
 * Output: 5
 * Explanation: The longest balanced subarray is the entire array [3,2,2,5,4].
 *              It has 2 distinct even numbers (2 and 4) and
 *              2 distinct odd numbers (3 and 5).
 * Example 3:
 * Input: nums = [1,2,3,2]
 * Output: 3
 * Explanation: The longest balanced subarray is [2,3,2].
 *              It has 1 distinct even number (2) and
 *              1 distinct odd number (3).
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - 1 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number}
 */

class SegmentTree {
  constructor(n) {
    // n is the size of the input array
    this.n = n;
    this.minTree = new Array(4 * n).fill(0); // segment tree for minimum values
    this.maxTree = new Array(4 * n).fill(0); // segment tree for maximum values
    this.lazy = new Array(4 * n).fill(0); // lazy propagation array for range updates
  }
  push(node, start, end) {
    // apply the pending updates to the current node (lazy propagation)
    if (this.lazy[node] !== 0) {
      // update the current node with the pending value
      this.minTree[node] += this.lazy[node];
      this.maxTree[node] += this.lazy[node];
      // if the current node is not a leaf node, propagate the pending updates to its children
      if (start !== end) {
        this.lazy[node * 2] += this.lazy[node]; // propagate to left child
        this.lazy[node * 2 + 1] += this.lazy[node]; // propagate to right child
      }
      // clear the lazy value for the current node after applying it
      this.lazy[node] = 0;
    }
  }
  // Update range [l, r] by adding val
  updateRange(node, start, end, l, r, val) {
    this.push(node, start, end);

    // No overlap
    if (start > end || start > r || end < l) return;

    // Complete overlap
    if (l <= start && end <= r) {
      this.lazy[node] += val;
      this.push(node, start, end);
      return;
    }

    // Partial overlap - recurse
    let mid = Math.floor((start + end) / 2);
    this.updateRange(node * 2, start, mid, l, r, val);
    this.updateRange(node * 2 + 1, mid + 1, end, l, r, val);

    // Update min/max
    this.minTree[node] = Math.min(
      this.minTree[node * 2],
      this.minTree[node * 2 + 1],
    );
    this.maxTree[node] = Math.max(
      this.maxTree[node * 2],
      this.maxTree[node * 2 + 1],
    );
  }
  // Find leftmost position where value = 0
  findLeftmostZero(node, start, end) {
    this.push(node, start, end);

    // Prune: if min > 0 or max < 0, no zero exists
    if (this.minTree[node] > 0 || this.maxTree[node] < 0) {
      return -1;
    }

    // Leaf node
    if (start === end) {
      return this.minTree[node] === 0 ? start : -1;
    }

    // Check left child first (leftmost)
    let mid = Math.floor((start + end) / 2);
    let left = this.findLeftmostZero(node * 2, start, mid);
    if (left !== -1) return left;

    // Check right child
    return this.findLeftmostZero(node * 2 + 1, mid + 1, end);
  }
}

function longestBalancedSegmentTree(nums) {
  let n = nums.length;
  let st = new SegmentTree(n);
  let prev = new Map(); // map to store the last occurrence index of each number
  let res = 0; // variable to store the length of the longest balanced subarray
  for (let r = 0; r < n; r++) {
    let num = nums[r];
    // let val = (num & 1) === 0 ? 1 : -1; // +1 for even, -1 for odd
    let val = num % 2 === 0 ? 1 : -1; // +1 for even, -1 for odd
    // if the number has appeared before, we need to undo the previous effect of that number
    if (prev.has(num)) {
      let prevIndex = prev.get(num);
      st.updateRange(1, 0, n - 1, 0, prevIndex, -val); // undo previous effect
    }
    // add the current number's effect to the segment tree
    st.updateRange(1, 0, n - 1, 0, r, val); // add current effect
    // set the current index as the last occurrence of the number
    prev.set(num, r);
    // find the leftmost position where the value in the segment tree is 0
    let l = st.findLeftmostZero(1, 0, n - 1);
    if (l !== -1 && l <= r) {
      res = Math.max(res, r - l + 1); // update the result with the length of the balanced subarray
    }
  }
  return res; // return the length of the longest balanced subarray
}
