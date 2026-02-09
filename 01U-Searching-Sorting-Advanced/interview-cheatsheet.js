/** Interview Cheatsheet
 * Sorting Algorithms:
 * 1. Bubble Sort:
 *    - KEEP SWAPPING ADJACENT ELEMENTS UNTIL SORTED
 *    - Repeatedly steps through the list,
 *    - compares adjacent elements and
 *    - swaps them if they are in the wrong order.
 *    - Time Complexity: O(n^2) in worst
 *                       O(n^2) in average
 *                       O(n) in best case (when the array is already sorted)
 *    - Space Complexity: O(1) (in-place sorting)
 *    - Stability: Stable (does not change the relative order of equal elements)
 *    - Comparison-based sorting algorithm
 *
 * 2. Selection Sort:
 *    - SELECT THE MINIMUM ELEMENT AND SWAP WITH THE FIRST ELEMENT
 *    - Repeatedly finds the minimum element from the unsorted part
 *    - and puts it at the beginning.
 *    - Time Complexity: O(n^2) in worst and average case
 *                       O(n^2) in best case (selection sort always takes O(n^2) time)
 *    - Space Complexity: O(1) (in-place sorting)
 *    - Stability: Not stable (may change the relative order of equal elements)
 *    - Comparison-based sorting algorithm
 *
 * 3. Insertion Sort:
 *    - INSERT ELEMENTS INTO THEIR CORRECT POSITION IN THE SORTED PART OF THE ARRAY
 *    - Builds the sorted array one item at a time by repeatedly taking the next item
 *    - (first index item is considered sorted) and comparing it with the elements in the sorted part of the array,
 *    - and inserting it into the correct position in the already sorted part of the array.
 *    - Time Complexity: O(n^2) in worst and average case
 *                       O(n) in best case (when the array is already sorted)
 *    - Space Complexity: O(1) (in-place sorting)
 *    - Stability: Stable (does not change the relative order of equal elements)
 *    - Comparison-based sorting algorithm
 *
 * 4. Merge Sort:
 *    - DIVIDE, SORT HALVES, THEN MERGE
 *    - Divide and conquer algorithm that divides the input array into two halves,
 *    - calls itself for the two halves, and then merges the two sorted halves.
 *    - Time Complexity: O(n log n) in all cases (worst, average, and best)
 *    - Space Complexity: O(n) (not in-place sorting)
 *    - Stability: Stable (does not change the relative order of equal elements)
 *    - Comparison-based sorting algorithm
 *    - Databases, linked lists, stable sorting
 *    - Use if needed stable sorting algorithm, and if space is not a concern.
 *
 * 5. Quick Sort:
 *    - PLACE ONE ELEMENT IN THE CORRECT POSITION AND PARTITION THE ARRAY AROUND IT
 *    - Divide and conquer algorithm that picks an element as pivot and
 *    - partitions the given array around the picked pivot
 *    - such that elements smaller than the pivot are on the left of the pivot and elements greater than the pivot are on the right of the pivot.
 *    - The process is then recursively applied to the sub-arrays on the left and right of the pivot.
 *    - Time Complexity: O(n log n) on average, O(n^2) in worst case
 *    - Space Complexity: O(log n) (in-place sorting)
 *    - Stability: Not stable (may change the relative order of equal elements)
 *    - Comparison-based sorting algorithm
 *    - Default choice in many systems due to its efficiency and low memory usage, especially for large datasets.
 *    - Use if needed fast general-purpose sorting algorithm, and if space is a concern (in-place sorting).
 *
 * 6. Heap Sort:
 *    - REPEATEDLY TAKE MAX/MIN ELEMENT FROM THE HEAP AND BUILD THE SORTED ARRAY
 *    - uses a binary heap data structure to sort elements.
 *    - Time Complexity: O(n log n) in all cases (worst, average, and best)
 *    - Space Complexity: O(1) (in-place sorting)
 *    - Stability: Not stable (may change the relative order of equal elements)
 *    - Comparison-based sorting algorithm
 *    - Priority queues, guaranteed bounds
 *    - Use if needed guaranteed O(n log n) time complexity, and if space is a concern (in-place sorting).
 *
 * 7. Counting Sort:
 *    - COUNT FREQUENCIES INSTEAD OF COMPARING ELEMENTS
 *    - sorts elements by counting the number of occurrences of each unique element in the input array.
 *    - Time Complexity: O(n + k) where n is the number of elements in the input array and k is the range of the input.
 *    - Space Complexity: O(k) where k is the range of the input.
 *    - Stability: Stable (does not change the relative order of equal elements)
 *    - Non-comparison-based sorting algorithm
 *    - IDs, numbers, digits
 *    - Use if needed linear time complexity, and if the range of input is not significantly greater than the number of elements to be sorted.
 *
 * 8. Radix Sort:
 *    - SORTS DIGITS ONE BY ONE USING A STABLE SORTING ALGORITHM (LIKE COUNTING SORT)
 *    - sorts numbers by processing individual digits.
 *    - Time Complexity: O(n * k) where n is the number of elements in the input array and k is the number of digits in the largest number.
 *    - Space Complexity: O(n + k) where n is the number of elements in the input array and k is the number of digits in the largest number.
 *    - Stability: Stable (does not change the relative order of equal elements)
 *    - Non-comparison-based sorting algorithm
 *    - IDs, numbers, digits
 *    - Use if large integers
 *
 * 9. Bucket Sort:
 *    - DISTRIBUTES ELEMENTS INTO BUCKETS, SORTS EACH BUCKET LOCALLY, THEN CONCATENATES
 *    - distributes elements into a number of buckets, sorts each bucket individually (using another sorting algorithm or recursively applying bucket sort), and then concatenates the sorted buckets.
 *    - Time Complexity: O(n + k) on average, O(n^2) in worst case
 *    - Space Complexity: O(n + k) where n is the number of elements in the input array and k is the number of buckets.
 *    - Stability: Depends on the sorting algorithm used for the buckets
 *    - Suitable for uniformly distributed data over a range, not suitable for data with a large range or non-uniform distribution.
 *    - Distribution-based sorting algorithm
 *    - Uniformly distributed data, floating-point numbers, normalized data
 *    - Use if needed linear time complexity for uniformly distributed data
 *
 * There is no one-size-fits-all or perfect sorting algorithm.
 * The choice of sorting algorithm depends on the specific requirements of the problem,
 * such as the size of the input, whether stability is required, and whether space is a concern.
 */
