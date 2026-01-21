/** Heaps
 * a specialized tree-based data structure that satisfies the heap property.
 * a complete binary tree that is either a max heap or a min heap.
 *
 * In a max heap, for any given node C, if P is a parent node of C, (parent val >= child val)
 *                then the key (the value) of P is greater than or equal to the key of C.
 * In a min heap, the key of P is less than or equal to the key of C. (parent val <= child val)
 *
 * Max Heap Example:
 *          50
 *        /    \
 *      30      20
 *     /  \    /  \
 *   15   10  8    16
 *  / \
 * 5   7
 * - Time Complexity:
 *   - Insertion: O(log n)
 *   - Deletion (Extract Max/Min): O(log n)
 *   - Peek (Get Max/Min): O(1)
 *   - Build Heap: O(n)
 *
 * Min Heap Example:
 *          5
 *        /   \
 *      10     15
 *     /  \   /  \
 *    20  25 30   35
 *   / \
 * 40  45
 * - Time Complexity:
 *   - Insertion: O(log n)
 *   - Deletion (Extract Min): O(log n)
 *   - Peek (Get Min): O(1)
 *   - Build Heap: O(n)
 *
 * Advantages of Heaps:
 * - Efficiently supports priority queue operations.
 * - Insertion and deletion operations can be performed in O(log n) time.
 * - Finding the maximum or minimum element can be done in O(1) time.
 *
 * Disadvantages of Heaps:
 * - Not suitable for searching arbitrary elements (O(n) time).
 * - More complex to implement compared to other data structures like arrays or linked lists.
 * - Not stable; the order of equal elements is not guaranteed to be preserved.
 *
 * Use Cases:
 * Heaps are commonly used to implement priority queues,
 * where the highest (or lowest) priority element is always at the root of the heap.
 * Heaps are also used in algorithms like heapsort and
 * for efficient graph algorithms like Dijkstra's and Prim's.
 *
 * Common Problems:
 * - Implementing a Priority Queue
 * - Heap Sort Algorithm
 * - Merging K Sorted Lists
 * - Finding the Kth Largest/Smallest Element in an Array
 * - Median of a Data Stream
 * - Sliding Window Maximum
 * - Top K Frequent Elements
 * - Kth Smallest Element in a Sorted Matrix
 * - Design a Data Structure for Constant Time Operations
 * - Find Median from Data Stream
 * - Kth Largest Element in an Array
 * - Merge K Sorted Lists
 */
