/** Creating a Heap
 * A heap is a specialized tree-based data structure that satisfies the heap property.
 * Heap property:
 * - In a max heap,
 *   for any given node C, if P is a parent node of C,
 *   then the key (the value) of P is greater than or equal to the key of C.
 * - In a min heap,
 *   the key of P is less than or equal to the key of C.
 *
 * To create a heap, we can use an array to represent the complete binary tree.
 *
 * The parent-child relationships can be determined using the following formulas for 0-based indexing:
 * - For a node at index i:
 *   - Left child index: 2i + 1
 *   - Right child index: 2i + 2
 *   - Parent index: Math.floor((i - 1) / 2)
 *
 *                 50
 *               /    \
 *             30      20
 *            /  \    /  \
 *          15   10  8    16
 *         / \
 *        5   7
 * - The array representation of the above max heap would be:
 *   [50, 30, 20, 15, 10, 8, 16, 5, 7]
 *
 * For 1-based indexing, the formulas would be:
 * - For a node at index i:
 *   - Left child index: 2i
 *   - Right child index: 2i + 1
 *   - Parent index: Math.floor(i / 2)
 *
 * Operations to maintain the heap property:
 * - Insertion:
 *   When inserting a new element, we add it to the end of the array and
 *   then "bubble up" to restore the heap property.
 *   - Time Complexity: O(log n)
 *
 *              2            (insert 1) in [2,5,8,10]
 *            /   \          - first we add the new element (1) at the end of the array
 *           5     8         [2,5,8,10,1]
 *          / \              - then we compare the newly added element (1) with its parent (5) and
 *        10   1             - since 1 < 5 (for a min heap), we swap them
 *    [2,5,8,10]             [2,1,8,10,5]
 *                           - we continue to compare the newly added element (1) with its new parent (2) and
 *             1             - since 1 < 2 (for a min heap), we swap them
 *           /   \           [1,2,8,10,5]
 *          2     8
 *        /   \
 *      10     5
 *    - first always ensure that the heap is a complete binary tree
 *    - then we compare the newly added element with its parent and swap if necessary
 *      (parent val >= child val for max heap, parent val <= child val for min heap)
 *
 * - Deletion (Extract Max/Min):
 *   We replace the root element with the last element in the array,
 *   remove the last element, and then "bubble down" to restore the heap property.
 *   - Time Complexity: O(log n)
 *
 * - Peek (Get Max/Min):
 *   We simply return the root element,
 *   which is the maximum or minimum element in the heap.
 *   - Time Complexity: O(1)
 */
