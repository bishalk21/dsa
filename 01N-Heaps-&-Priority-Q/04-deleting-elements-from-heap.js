/** Extracting elements from a heap or Extracting values in heap & Heapify Down
 * - To delete an element from a heap, we typically remove the root element
 *   (the minimum in a min-heap or the maximum in a max-heap) and then restore the heap property.
 * - and then we "bubble down" the last element to restore the heap property:
 * 1. Replace the root element with the last element in the heap.
 * 2. Remove the last element from the heap (since it's now at the root).
 * 3. "Bubble down" the new root element to restore the heap property:
 *    - Compare the new root element with its children.
 *    - If the new root element violates the heap property
 *      (e.g., in a min-heap, if the new root element is greater than either of its children),
 *      swap it with the smaller child (for a min-heap) or the larger child (for a max-heap).
 *    - Repeat this process until the new root element is in the correct position or it becomes a leaf node.
 *
 * Time Complexity: O(log n) due to the bubbling down process.
 * Space Complexity: O(1) for the deletion itself,
 *                   but O(n) if we consider the space used by the array to store the heap.
 */

class MinHeap {
  constructor() {
    this.heap = [];
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
    // Step 2: Bubble up the new element to maintain heap property
    let lastIndex = this.heap.length - 1;
    this.bubbleUp(lastIndex);
  }
  bubbleUp(index) {
    if (index === 0) return;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
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
  extract() {
    if (this.heap.length === 0) return null; // Heap is empty
    // Step 1: Replace the root element with the last element
    let rootValue = this.heap[0];
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    // Step 2: Remove the last element from the heap
    this.heap.pop();
    // Step 3: Bubble down the new root element to restore the heap property
    this.bubbleDown(0);
    return rootValue; // Return the extracted root value
  }
  bubbleDown(index) {
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);
    let smallestIndex = index;
    let heapSize = this.heap.length;
    if (
      //   this.heap[leftChildIndex] !== undefined &&
      leftChildIndex < heapSize &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }
    if (
      //   this.heap[rightChildIndex] !== undefined &&
      rightChildIndex < heapSize &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }
    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.bubbleDown(smallestIndex);
    }
  }
  peek() {
    // Return the minimum element (the root of the heap) without removing it
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

let heap = new MinHeap();
heap.insert(5);
heap.insert(20);
heap.insert(4);
heap.insert(10);
heap.insert(1);
heap.insert(0);
heap.extract();
heap.extract();
console.log(heap);
console.log(heap.peek());
