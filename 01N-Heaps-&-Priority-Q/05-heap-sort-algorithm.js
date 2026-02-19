/** Heap Sort Algorithm
 * - a comparison-based sorting algorithm
 * - uses a binary heap data structure to sort elements.
 * - It works by first building a max heap from the input data, and
 *   then repeatedly extracting the maximum element from the heap and rebuilding the heap until it is empty.
 *
 * 1. Build a max heap from the input data.
 *    - extra space
 *    - without extra space
 *      - heapify the input array in-place to create a max heap.
 *      - from the last non-leaf node down to the root node,
 *        call the heapify function to maintain the max heap property.
 *      - skip the leaf nodes since they are already heaps.
 *      - find the maximum between the parent node and its children, and swap if necessary.
 *      - repeat the process until the max heap property is restored for all nodes.
 *      - The time complexity of building the heap is O(n) because each node is visited once,
 *        and the heapify operation takes O(log n) time in the worst case.
 *      - The resulting max heap will have the largest element at the root.
 *      - The space complexity of building the heap is O(1) since we are modifying the input array in-place and not using any additional data structures.
 *
 * 2. The largest item is stored at the root of the heap.
 *    Replace it with the last item of the heap followed by reducing the size of the heap by one.
 *    Finally, heapify the root of the tree.
 *
 * Time Complexity: O(n log n) - Building the heap takes O(n) time,
 *                  and each of the n elements is extracted from the heap, which takes O(log n) time.
 * Space Complexity: O(1) - Heap sort is an in-place sorting algorithm, meaning it requires only a constant amount of additional space for temporary variables.
 *
 * Optimizations:
 * - find the length of parent nodes = Math.floor(number of nodes (n) / 2)
 * - skip the leaf nodes since they are already heaps.
 *
 * Heap sort is not a stable sorting algorithm,
 * meaning that it does not preserve the relative order of equal elements.
 * It is also not an adaptive sorting algorithm,
 * meaning that it does not take advantage of existing order in the input data.
 */

let arr = [4, 10, 3, 5, 1];
function heapSort(arr) {
  const n = arr.length;

  // TODO 1: Build a max heap from the input data.
  //   for (let i = n - 1; i >= 0; i--) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // TODO 2: Sort the array
  for (let i = n - 1; i > 0; i--) {
    // Swap the root element (maximum) with the last element of the heap
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Heapify the reduced heap
    heapifyDown(arr, 0, i);
  }
  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    // Swap the root element with the largest element
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Recursively heapify the affected subtree
    heapifyDown(arr, largest, n);
  }
}

console.log(heapSort(arr)); // Output: [1, 3, 4, 5, 10]
