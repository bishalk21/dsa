/**
 * Merge two sorted arrays num1 and num2, where num1 has a size of m+n and
 * contains m elements followed by n zeros.
 * The elements of num1 and num2 are sorted in non-decreasing order.
 * You must merge the arrays in-place and without using extra space.
 *
 * num1 = [1, 2, 3, 0, 0, 0], m = 3
 * num2 = [2, 5, 6], n = 3
 *
 * after merging, num1.length = m + n = 6
 * num1 = [1, 2, 2, 3, 5, 6]
 *
 * Algorithm 1: Brute Force
 * - put all elements of num2 into num1
 * - sort num1
 * time complexity: O((m+n)log(m+n))
 * space complexity: O(1)
 * The best complexity of sorting is O(n log n), so this is not optimal.
 *
 * Algorithm 2: Two Pointers
 * - create copy of num1, num1Copy
 * - use two pointers, i for num1Copy and j for num2
 * - iterate through num1 and num2, comparing elements
 *   - if num1Copy[i] < num2[j], place num1Copy[i] in num1 and increment i
 *   - else place num2[j] in num1 and increment j
 * - continue until one of the arrays is fully traversed
 * - then copy remaining elements from the other array
 * * time complexity: O(m + n)
 * space complexity: O(m + n) for the copy of num1
 *
 * Algorithm 3: Two Pointers (in-place)
 * - use two pointers, i for the end of num1 (m+n-1) and j for the end of num2 (n-1)
 * - iterate backwards through num1
 *  - compare num1[i] and num2[j]
 * - if num1[i] > num2[j], place num1[i] at the end of num1 and decrement i
 * - else place num2[j] at the end of num1 and decrement j
 * - continue until one of the arrays is fully traversed
 * - then copy remaining elements from the other array
 * time complexity: O(m + n)
 * space complexity: O(1) (in-place)
 *
 */

// Algo 2: Two Pointers
function merge(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m); // Create a copy of the first m elements of nums1
  let pointer1 = 0; // Pointer for nums1Copy
  let pointer2 = 0; // Pointer for nums2

  for (let i = 0; i < m + n; i++) {
    if (
      pointer2 >= n || // if all elements in nums2 are already placed
      (pointer1 < m && // Check if pointer1 is within bounds of nums1Copy
        nums1Copy[pointer1] < nums2[pointer2])
    ) {
      nums1[i] = nums1Copy[pointer1];
      pointer1++;
    } else {
      nums1[i] = nums2[pointer2];
      pointer2++;
    }
  }
  return nums1; // Return the merged array
}

// Example usage
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // Output: [1, 2, 2, 3, 5, 6]
/**
 * | i | pointer1  | pointer2  | nums1Copy[pointer1]  | nums2[pointer2]  | nums1[i]             |
 * |---|-----------|-----------|----------------------|------------------|----------------------|
 * | 0 |     0     |     0     |          1           |        2         |    1, pointer1++     |
 * | 1 |     1     |     0     |          2           |        2         |    2, pointer2++     |
 * | 2 |     1     |     1     |          2           |        5         |    2, pointer1++     |
 * | 3 |     2     |     1     |          3           |        5         |    3, pointer1++     |
 * | 4 |     3     |     1     |          -           |        5         |    5, pointer2++     |
 * | 5 |     3     |     2     |          -           |        6         |    6, pointer2++     |
 *
 */

// Algo 3: Two Pointers (in-place)
function mergeInPlace(nums1, m, nums2, n) {
  let pointer1 = m - 1; // Pointer for the end of nums1's valid elements
  let pointer2 = n - 1; // Pointer for the end of nums2
  let mergeIndex = m + n - 1; // Pointer for the end of nums1's total length

  // Iterate backwards through nums1
  for (let i = mergeIndex; i >= 0; i--) {
    if (pointer2 < 0) {
      // If all elements in nums2 are already placed
      break;
    }
    if (
      pointer1 >= 0 && // Check if pointer1 is within bounds of nums1
      nums1[pointer1] > nums2[pointer2]
    ) {
      nums1[i] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[i] = nums2[pointer2];
      pointer2--;
    }
  }
  return nums1; // Return the merged array
}

// Example usage
console.log(mergeInPlace([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // Output: [1, 2, 2, 3, 5, 6]

/**
 * | i | pointer1  | pointer2  | nums1[pointer1]  | nums2[pointer2]  | nums1[i]             |
 * |---|-----------|-----------|------------------|------------------|----------------------|
 * | 5 |     2     |     2     |        3         |        6         |    6, pointer2--     |
 * | 4 |     2     |     1     |        3         |        5         |    5, pointer2--     |
 * | 3 |     2     |     0     |        3         |        2         |    3, pointer1--     |
 * | 2 |     1     |     0     |        2         |        2         |    2, pointer1--     |
 * | 1 |     0     |     0     |        1         |        2         |    2, pointer2--     |
 * | 0 |     0     |    -1     |        1         |        -         |    1, pointer1--     |
 */
