/** Kth Largest Element in a Stream
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 *
 * Stream means that we are continuously receiving new test scores, and
 * we need to maintain the kth largest score at any given time.
 * This is a common problem in real-time data processing and
 * can be efficiently solved using a Min Heap.
 *
 * You are part of a university admissions office and need to keep
 * track of the kth highest test score from applicants in real time.
 * This helps to determine cut-off marks for interviews and admissions
 * dynamically as new applicants submit their scores.
 * You are tasked to implement a class which, for a given integer k,
 * maintains a stream of test scores and continuously returns the kth highest test
 * score after a new score has been submitted. More specifically, we
 * are looking for the kth highest score in the sorted list of all scores.
 * Implement the KthLargest class:
 * - KthLargest(int k, int[] nums) Initializes the object with the integer k and
 *   the stream of integers nums.
 * - int add(int val) adds a new test score val to the stream and returns the element
 *   representing the kth highest score in the pool of test scores so far.
 *
 * Example 1:
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 * Explanation
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 *
 * Example 2:
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[4, [7,7,7,7,8,3]], [2], [10], [9], [9]]
 * Output
 * [null, 7, 7, 7, 8]
 * Explanation
 * KthLargest kthLargest = new KthLargest(4, [7,7,7,7,8,3]);
 * kthLargest.add(2);   // return 7
 * kthLargest.add(10);  // return 7
 * kthLargest.add(9);   // return 7
 * kthLargest.add(9);   // return 8
 *
 * Constraints:
 * 1 <= k <= nums.length + 1
 * 0 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * -10^4 <= val <= 10^4
 * At most 10^4 calls will be made to add.
 *
 * @constructor
 * @param {number} k
 * @param {number[]} nums
 */

/** Algorithm - Min Heap
 * 1. Use a Min Heap to keep track of the k largest elements seen so far.
 * 2. Iterate through the initial array of scores and add elements to the Min Heap.
 * 3. If the size of the Min Heap exceeds k, remove the smallest element (the root).
 * 4. For each new score added through the add method, insert it into the Min Heap and
 *    if the size exceeds k, remove the smallest element.
 * 5. After processing all elements, the root of the Min Heap will be the kth largest element.
 * Time Complexity: O(n log k) for the constructor (where n is the length of the initial array) and O(log k) for each call to add.
 * Space Complexity: O(k) for the Min Heap, as it will hold at most k elements.
 */

class MyMinHeap {
  constructor() {
    this.heap = [];
  }
  prarent(i) {
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
      let parentIndex = this.prarent(index);
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
    const min = this.heap[0];
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

// time complexity: O(log k) for add method, O(k) for constructor
// space complexity: O(k) for the heap
function KthLargest(k, nums) {
  this.heap = new MyMinHeap();
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
}
KthLargest.prototype.add = function (val) {
  this.heap.insert(val);
  if (this.heap.size() > this.k) {
    this.heap.remove();
  }
  return this.heap.peek();
};
