/** Priority Queues
 * https://github.com/datastructures-js/priority-queue
 * A priority queue is a data structure that stores elements with associated priorities.
 * - A queue which serves elements based on priority rather than just order of insertion (First-In-First-Out).
 *
 * Is queue same as priority queue?
 * - No, a regular queue serves elements in the order they were added (FIFO),
 *   while a priority queue serves elements based on their priority, regardless of the order they were added.
 *
 * Real-world Examples:
 * - Hospital emergency rooms: Patients with more severe conditions are treated before those with less severe conditions.
 *   A - Fever (priority 1)
 *   B - Accident (priority 5)
 *   C - Headache (priority 2)
 *   In this case, patient B (Accident) would be treated first, followed by patient C (Headache), and then patient A (Fever).
 * - Air traffic control: Airplanes with higher priority (e.g., those in distress) are given landing clearance before others.
 * - Task scheduling in operating systems: Tasks with higher priority are executed before those with lower priority.
 * - Event management: Events with higher importance are handled before less important ones.
 * - Customer service: Customers with higher priority (e.g., VIP customers) are served before regular customers.
 * - CPU scheduling: Processes with higher priority are allocated CPU time before those with lower priority.
 * - Cache System: Frequently accessed data (higher priority) is stored in faster cache memory, while less frequently accessed data (lower priority) is stored in slower memory.
 * - Dijkstra's Algorithm: In graph algorithms like Dijkstra's, a priority queue is used to efficiently retrieve the next vertex with the smallest tentative distance.
 * - Real-time systems: In real-time systems, tasks with higher priority are executed before those with lower priority to meet time constraints.
 *
 * Normal Queue:
 * - is a linear data structure that follows the First-In-First-Out (FIFO) principle.
 * - Elements are added to the rear of the queue and removed from the front.
 * - Steps:
 *   1. Enqueue: Add an element to the rear or end of the queue.
 *   2. Dequeue: Remove an element from the front of the queue.
 *   3. Peek: View the front element without removing it.
 *
 * Priority Queue:
 * - is an abstract data type that operates similarly to a regular queue but with an added feature of priority.
 * - Each element in a priority queue has an associated priority,
 *   and elements are served based on their priority rather than just their order of insertion.
 * - Steps:
 *   1. Enqueue: Add an element to the priority queue with an associated priority.
 *   2. Dequeue: Remove and return the element with the highest priority from the queue.
 *   3. Peek: View the element with the highest priority without removing it.
 *
 * - In a priority queue, if two elements have the same priority,
 *   they are typically served in the order they were added (FIFO for elements with the same priority).
 *
 * Implementation of a Priority Queue:
 * 1. Sorting-based implementation (not efficient for handling priority queues (O(n log n) for enqueue operation)):
 *    - Elements are stored in a list or array and sorted based on their priority.
 *    - should always ensure that the highest priority element is at the front of the list for efficient dequeue operations.
 *    - Enqueue operation involves inserting the element and then sorting the list, which can be inefficient (O(n log n)).
 *    - Dequeue operation involves removing the element with the highest priority, which can be efficient (O(1)).
 *    [5, 3, 4] -> Enqueue(2) -> [5, 4, 3, 2] (sorted by priority)
 *    if Enqueue(10), first 10 is added to the end of the list [5, 4, 3, 2, 10], then sorted to [10, 5, 4, 3, 2]
 *
 *    - Steps:
 *      1. Enqueue: Add an element to the list and sort it based on priority.
 *                  list.push(element);
 *                  list.sort((a, b) => b.priority - a.priority); // Sort in descending order of priority
 *      2. Dequeue: Remove and return the element with the highest priority (the first element in the sorted list).
 *    - Time Complexity:
 *      - Enqueue: O(n log n) (due to sorting)
 *      - Dequeue: O(1) (removing the highest priority element)
 *    - Space Complexity: O(n) (for storing the elements in the list)
 *
 * 2. Heap-based implementation (efficient for handling priority queues):
 *    - A common way to implement a priority queue is using a binary heap (min-heap or max-heap).
 *    - In a max-heap, the element with the highest priority is always at the root,
 *      making it efficient for dequeue operations.
 *    - Enqueue operation involves adding the element to the heap and
 *      then performing a "heapify up" operation to maintain the heap property, which takes O(log n) time.
 *    - Dequeue operation involves removing the root element (the highest priority) and
 *      then performing a "heapify down" operation to maintain the heap property, which also takes O(log n) time.
 *
 *    - Steps:
 *      1. Enqueue: Add an element to the heap and perform "heapify up" to maintain the heap property.
 *      2. Dequeue: Remove the root element (the highest priority) and perform "heapify down" to maintain the heap property.
 *    - Time Complexity:
 *      - Enqueue: O(log n) (due to heapify up)
 *      - Dequeue: O(log n) (due to heapify down)
 *      - Space Complexity: O(n) (for storing the elements in the heap)
 *
 *    - max-heap: The element with the highest priority is at the root, and each parent node is greater than or equal to its children.
 *    - min-heap: The element with the lowest priority is at the root, and each parent node is less than or equal to its children.
 *
 * Heap is a specialized tree-based data structure that satisfies the heap property:
 * - In a max-heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C.
 * - In a min-heap, for any given node C, if P is a parent node of C, then the key of P is less than or equal to the key of C.
 *
 * The binary heap is commonly used to implement priority queues because it allows for efficient insertion and removal of elements based on their priority.
 *
 * Priority queues are abstract data types that can be implemented using various underlying data structures,
 * such as arrays, linked lists, or heaps.
 *
 * Heap vs Priority Queue:
 * - A heap is a specific data structure that can be used to implement a priority queue,
 *   but a priority queue is an abstract data type that can be implemented using various data structures, including heaps.
 * - A heap is a binary tree that satisfies the heap property,
 *   while a priority queue is a collection of elements with associated priorities that can be served based on their priority.
 * - A heap is often used to implement a priority queue because it allows for efficient insertion and removal of elements based on their priority,
 *   but a priority queue can also be implemented using other data structures, such as arrays or linked lists.
 *
 * In summary, a priority queue is an abstract data type that serves elements based on their priority,
 * while a heap is a specific data structure that can be used to implement a priority queue efficiently.e
 *
 * JavaScript does not have a built-in priority queue data structure,
 * but it can be implemented using arrays or heaps.
 * Java, Python, and C++ have built-in priority queue implementations (e.g., Java's PriorityQueue class, Python's heapq module, and C++'s std::priority_queue).
 */

// Implementation of a Priority Queue using a heap-based approach
class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }
  // Enqueue: Add an element to the priority queue with an associated priority.
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }
  // helper method to maintain the max-heap property after adding a new element
  heapifyUp() {
    let index = this.heap.length - 1; // Start with the last element (the newly added element)
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // Calculate the parent index
      // If the current element's priority is less than or equal to its parent's priority, stop
      if (this.heap[index].priority <= this.heap[parentIndex].priority) break;
      // Swap the current element with its parent
      this.swap(index, parentIndex);
      index = parentIndex; // Move up to the parent's index
    }
    // This process continues until the new element is in the correct position to maintain the max-heap property.
    // swapping ensures that the element with the highest priority is always at the root of the heap.
  }
  // helper method to swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  // Dequeue: Remove and return the element with the highest priority from the queue.
  dequeue() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    const max = this.heap[0]; // The root element (highest priority)
    const end = this.heap.pop(); // Remove the last element
    if (this.heap.length > 0) {
      this.heap[0] = end; // Move the last element to the root
      this.heapifyDown(); // Restore the max-heap property
    }
    return max; // Return the element with the highest priority
  }
  // helper method to maintain the max-heap property after removing the root element
  heapifyDown() {
    let index = 0; // Start with the root element
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1; // Calculate the left child index
      let rightChildIndex = 2 * index + 2; // Calculate the right child index
      let largest = index; // Assume the current index is the largest
      // If the left child exists and has a higher priority than the current largest, update largest
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].priority > this.heap[largest].priority
      ) {
        largest = leftChildIndex;
      }
      // If the right child exists and has a higher priority than the current largest, update largest
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].priority > this.heap[largest].priority
      ) {
        largest = rightChildIndex;
      }
      // If the largest is still the current index, the max-heap property is satisfied, so break
      if (largest === index) break;
      // Swap the current element with the largest element
      this.swap(index, largest);
      index = largest; // Move down to the largest index
    }
    // This process continues until the element is in the correct position to maintain the max-heap property.
  }
  // Peek: View the element with the highest priority without removing it.
  peek() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.heap[0]; // Return the root element (highest priority) without removing it
  }
  // front
  front() {
    return this.peek(); // Alias for peek method
  }
  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// example usage:
const maxPQ = new MaxPriorityQueue();
maxPQ.enqueue("Task A", 2);
maxPQ.enqueue("Task B", 5);
maxPQ.enqueue("Task C", 3);
console.log(maxPQ.dequeue());
console.log(maxPQ.peek());
console.log(maxPQ.isEmpty());

// Implementation of a Priority Queue using a sorting-based approach
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Enqueue: Add an element to the priority queue with an associated priority.
  enqueue(value, priority) {
    this.queue.push({ value, priority });
    // Sort the queue based on priority (higher priority first)
    this.queue.sort((a, b) => b.priority - a.priority);
  }
  // Dequeue: Remove and return the element with the highest priority from the queue.
  dequeue() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.queue.shift(); // Remove and return the first element (highest priority)
  }
  // Peek: View the element with the highest priority without removing it.
  peek() {
    if (this.isEmpty()) {
      return null; // or throw an error
    }
    return this.queue[0]; // Return the first element (highest priority) without removing it
  }
  // Check if the priority queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
  // Get the size of the priority queue
  size() {
    return this.queue.length;
  }
  // Clear the priority queue
  clear() {
    this.queue = [];
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("Task A", 2);
pq.enqueue("Task B", 5);
pq.enqueue("Task C", 3);
console.log(pq.dequeue()); // { value: 'Task B', priority: 5 }
console.log(pq.peek());
console.log(pq.size());
console.log(pq.isEmpty());
pq.clear();
console.log(pq.isEmpty());
