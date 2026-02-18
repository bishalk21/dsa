/** Insert an element inside a heap
 * To insert an element into a heap, we follow these steps:
 * 1. Add the new element to the end of the array (which represents the complete binary tree).
 * 2. "Bubble up" the new element to restore the heap property:
 *    - Compare the new element with its parent.
 *    - If the new element violates the heap property
 *      (e.g., in a max heap, if the new element is greater than its parent),
 *      swap it with its parent.
 *    - Repeat this process until the new element is in the correct position or
 *      it becomes the root of the heap.
 *
 * Time Complexity: O(log n) due to the bubbling up process.
 * Space Complexity: O(1) for the insertion itself,
 *                   but O(n) if we consider the space used by the array to store the heap.
 */

class MinHeap {
  constructor() {
    this.heap = [];
    // this.heap = [5, 10, 20, 30];
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  insert(value) {
    // Step 1: Add the new element to the end of the array
    this.heap.push(value);
    // Step 2: Bubble up the new element to restore the heap property
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index] < this.heap[parentIndex]) {
        // Swap the new element with its parent
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        // Move up to the parent index
        index = parentIndex;
      } else {
        // If the heap property is satisfied, we can stop
        break;
      }
    }
  }
}
let heap = new MinHeap();
heap.insert(5);
heap.insert(10);
heap.insert(20);
heap.insert(30);
console.log(`heap: ${heap}`); // [5, 10, 20, 30]
heap.insert(1);
console.log(`heap after inserting 1: ${heap}`); // [1, 5, 20, 30, 10]
heap.insert(0);
console.log(`heap after inserting 0: ${heap}`); // [0, 5, 1, 30, 10, 20]
