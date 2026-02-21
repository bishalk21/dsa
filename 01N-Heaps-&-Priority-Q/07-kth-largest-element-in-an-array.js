/** Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Given an integer array nums and an integer k,
 * return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order,
 * not the kth distinct element.
 * Can you solve it without sorting (Time Complexity using sort is O(n log n))?
 *
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 *
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 *
 * Constraints:
 * 1 <= k <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/** Algorithm - Min Heap
 * 1. Use a Min Heap to keep track of the k largest elements seen so far.
 * 2. Iterate through the array and add elements to the Min Heap.
 * 3. If the size of the Min Heap exceeds k, remove the smallest element (the root).
 * 4. After processing all elements, the root of the Min Heap will be the kth largest element.
 *
 * Time Complexity: O(n log k) - We insert each of the n elements into the Min Heap,
 *                  and each insertion takes O(log k) time.
 * Space Complexity: O(k) - The Min Heap will hold at most k elements.
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.parent(index);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);
      let smallest = index;
      if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
        smallest = leftIndex;
      }
      if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
        smallest = rightIndex;
      }
      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
}

function findKthLargest(nums, k) {
  let heap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
    if (heap.size() > k) {
      heap.remove();
    }
  }
  return heap.peek();
}
