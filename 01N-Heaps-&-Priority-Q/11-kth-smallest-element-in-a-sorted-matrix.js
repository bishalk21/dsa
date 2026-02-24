/** Kth Smallest Element in a Sorted Matrix
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 *
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order,
 * return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * You must find a solution with a memory complexity better than O(n^2).
 *
 * Example 1:
 * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 * Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13.
 *
 * Example 2:
 * Input: matrix = [[-5]], k = 1
 * Output: -5
 * Explanation: The only element in the matrix is -5, which is the 1st smallest number in the matrix.
 *
 * Constraints:
 * n == matrix.length
 * n == matrix[i].length
 * 1 <= n <= 300
 * -10^9 <= matrix[i][j] <= 10^9
 * All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
 * 1 <= k <= n^2
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 *
 * Follow up: Could you solve the problem with a constant memory (i.e., O(1) memory complexity)?
 * Could you solve the problem in O(n) time complexity?
 * The solution may be too advanced for an interview but you may find reading this article fun.
 */

/** Bruteforce:
 * 1. Flatten the matrix into a single array (Time Complexity: O(n^2)).
 * 2. Sort the array in ascending order (Time Complexity for sorting: O(n^2 log n)).
 * 3. Return the element at index k-1 (since array indices are 0-based) (Time Complexity: O(1)).
 * Time Complexity: O(n^2 log n) because we are sorting n^2 elements.
 * Space Complexity: O(n^2) for the flattened array.
 */
function kthSmallest(matrix, k) {
  const flatArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      flatArray.push(matrix[i][j]);
    }
  }
  flatArray.sort((a, b) => a - b);
  return flatArray[k - 1];
}

/** Min Heap:
 * 1. Create a min heap to store the elements of the matrix.
 * 2. Insert the first element of each row into the min heap
 *    along with its row and column indices.
 * 3. Initialize a variable to keep track of the count of elements
 *    extracted from the min heap.
 * 4. While the min heap is not empty:
 *    a. Extract the minimum element from the min heap (the smallest element).
 *    b. Increment the count of extracted elements.
 *    c. If the count equals k, return the value of the extracted element.
 *    d. If there is a next element in the same row (i.e., column index + 1 < n),
 *       insert the next element from the same row into the min heap
 *       along with its row and column indices.
 *
 * Time Complexity: O(k log n) -> O(Min(n,k) log(Min(n,k)))
 *                  because we are inserting and extracting from the min heap k times, and the size of the heap is at most n.
 * Space Complexity: O(n) for the min heap, as it can contain at most one element from each of the n rows.
 * Note: This solution is more efficient than the brute-force approach, especially for larger matrices, as it avoids sorting all n^2 elements and instead focuses on the k smallest elements.
 */

class MyMinPriorityQueue {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = this.parent(idx);
      if (this.heap[parentIdx].value <= this.heap[idx].value) break;
      //   [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }
  swap(i, j) {
    // [ this.heap[i], this.heap[j] ] = [ this.heap[j], this.heap[i] ];
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
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
    let idx = 0;
    let length = this.heap.length;
    while (true) {
      let smallest = idx;
      let leftIdx = this.left(idx);
      let rightIdx = this.right(idx);
      if (
        leftIdx < length &&
        this.heap[leftIdx].value < this.heap[smallest].value
      ) {
        smallest = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx].value < this.heap[smallest].value
      ) {
        smallest = rightIdx;
      }
      if (smallest === idx) break;
      this.swap(idx, smallest);
      idx = smallest;
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
}

function kthSmallestMinHeap(matrix, k) {
  // 1. insert all the first elements of each row into the min heap
  //   let pq = new MyMinPriorityQueue((x) => x[0]);
  let pq = new MyMinPriorityQueue();
  let n = matrix[0].length;
  //   for (let i = 0; i < n; i++) {
  // if k is less than n, we only need to insert the first k elements of the first row
  for (let i = 0; i < Math.min(n, k); i++) {
    pq.insert({
      value: matrix[i][0],
      row: i,
      col: 0,
    });
  }
  // 2. extract the min element from the min heap keeping track of count and
  //    increasing the count until it equals k, at which point we return the value of the extracted element
  // 3. if there is a next element in the same row, insert it into the min heap
  for (let count = 0; count < k - 1; count++) {
    let { row, col } = pq.remove();
    // if there is a next element in the same row, insert it into the min heap
    if (col + 1 < n) {
      pq.insert({
        value: matrix[row][col + 1],
        row: row,
        col: col + 1,
      });
    }
  }
  return pq.peek().value;
}
