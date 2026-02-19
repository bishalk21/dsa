/** Stable Sorting Algorithm
 * - A sorting algorithm is stable if it preserves the relative order of equal elements in the input data.
 * - Examples of stable sorting algorithms include Merge Sort, Insertion Sort, and Bubble Sort.
 * - Examples of unstable sorting algorithms include Quick Sort and Heap Sort.
 * Time Complexity: O(n log n) - The time complexity of stable sorting algorithms can vary, but many efficient stable sorting algorithms have a time complexity of O(n log n).
 * Space Complexity: O(n) - Stable sorting algorithms often require additional space to maintain the stability of the sort, especially if they are not in-place.
 *
 * Suppose, we have an array of objects representing people, where each object has a name and an age property. If we sort this array by age using a stable sorting algorithm, the relative order of people with the same age will be preserved. For example, if two people are both 30 years old, they will appear in the same order in the sorted array as they did in the original array.
 *   const people = [
 *                   { name: 'Alice', age: 30 },
 *                   { name: 'Bob', age: 25 },
 *                   { name: 'Charlie', age: 30 },
 *                   { name: 'David', age: 25 }
 *                 ];
 *  If we sort this array by age using a stable sorting algorithm, the sorted array will look like this:
 *                 [
 *                   { name: 'Bob', age: 25 },
 *                   { name: 'David', age: 25 },
 *                   { name: 'Alice', age: 30 },
 *                   { name: 'Charlie', age: 30 }
 *                 ];
 * In this sorted array, Bob and David (both 25 years old) maintain their original order, as do Alice and Charlie (both 30 years old), demonstrating the stability of the sorting algorithm used.
 */
