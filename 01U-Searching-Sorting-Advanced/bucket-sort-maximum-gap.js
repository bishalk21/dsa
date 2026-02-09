/** Bucket Sort
 * - a distribution based sorting algorithm
 * - the input is distributed into a number of buckets
 * - each bucket is then sorted individually either using a different sorting algorithm or by recursively applying the bucket sort algorithm
 * - finally, the sorted buckets are combined (or concatenated) to form the final sorted array
 * - Time Complexity: O(n + k) on average,
 *                    where n is the number of elements in the input array and k is the number of buckets.
 *                    In the worst case, it can be O(n^2) if all elements are placed in a single bucket.
 *                    However, with a good distribution of elements and
 *                    an efficient sorting algorithm for the buckets, the average case is more relevant.
 * - Space Complexity: O(n + k) - requires additional space for the buckets.
 *                     O(n) when k is O(1).
 *
 * - suitable for uniformly distributed data over a range
 * - works well when the input is uniformly distributed over a range
 * - not suitable for data with a large range or non-uniform
 *
 * - Steps:
 *   1. Create an empty array of buckets (sub-arrays).
 *   2. Distribute the input array elements into the buckets based on a certain criterion (e.g., range of values).
 *   3. Sort each bucket individually using a suitable sorting algorithm (e.g., insertion sort, quicksort).
 *   4. Concatenate the sorted buckets to form the final sorted array.
 */

function bucketSort(arr) {
  let n = arr.length;
  let buckets = Array.from({ length: n }, () => []);
  for (let x of arr) {
    let index = Math.floor(x * n);
    buckets[index].push(x);
  }

  for (let bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  let i = 0;
  for (let bucket of buckets) {
    for (let x of bucket) {
      arr[i++] = x;
    }
  }
  return arr;
  //   return buckets.flat();
}

const arr = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.55, 0.43, 0.68];

/** Maximum Gap
 * https://leetcode.com/problems/maximum-gap/
 *
 * Given an integer array nums,
 * return the maximum difference between two successive elements in its sorted form.
 * If the array contains less than two elements, return 0.
 * You must write an algorithm that runs in linear time and uses linear extra space.
 *
 * Example 1:
 * Input: nums = [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9],
 *              either (3,6) or (6,9) has the maximum difference 3.
 *
 * Example 2:
 * Input: nums = [10]
 * Output: 0
 * Explanation: The array contains less than 2 elements, therefore return 0.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 *
 * @param {number[]} nums
 * @return {number}
 */

/** Algorithm: Bucket Sort for Maximum Gap
 * Time Complexity: O(n) - The algorithm runs in linear time because it distributes the elements into buckets and then processes each bucket in linear time.
 * Space Complexity: O(n) - The algorithm requires additional space for the buckets.
 *
 * Steps:
 * 1. Find the minimum and maximum values in the input array to determine the range of the data.
 * 2. Calculate the size of each bucket and
 *    the number of buckets needed based on the range and the number of elements in the array.
 *    (bucket size = Math.ceil((max - min) / (n - 1)))
 * 3. Create the buckets and distribute the elements of the input array into the appropriate buckets based on their values.
 * 4. For each non-empty bucket, find the minimum and maximum values.
 * 5. Calculate the maximum gap by comparing the minimum value of the current bucket with the maximum value of the previous non-empty bucket.
 * 6. Return the maximum gap found.
 */

function maximumGap(nums) {
  if (nums.length < 2) return 0;
  // nums = [3,6,9,1]
  let min = Math.min(...nums); // 1
  let max = Math.max(...nums); // 9
  let n = nums.length; // 4

  // bucket size is the minimum possible maximum gap
  let bucketSize = Math.max(1, Math.floor((max - min) / (n - 1))); // floor((9 - 1) / (4 - 1)) = floor(8 / 3) = 2
  // number of buckets
  let bucketCount = Math.floor((max - min) / bucketSize) + 1; // floor((9 - 1) / 2) + 1 = floor(8 / 2) + 1 = 4 + 1 = 5

  // create buckets - [[min, max], [min, max], [min, max]]
  let buckets = Array(bucketCount)
    .fill(null)
    .map(() => [Infinity, -Infinity]);

  // distribute the numbers into buckets
  for (let num of nums) {
    let index = Math.floor((num - min) / bucketSize); // (num - 1) / 2
    buckets[index][0] = Math.min(buckets[index][0], num); // buckets[0][0] = min(Infinity, 3) = 3
    buckets[index][1] = Math.max(buckets[index][1], num); // buckets[0][1] = max(-Infinity, 3) = 3

    // num = 3, index - (3 - 1) / 2 = 1, buckets[1] = [min: 3, max: 3]
    // num = 6, index - (6 - 1) / 2 = 2, buckets[2] = [min: 6, max: 6]
    // num = 9, index - (9 - 1) / 2 = 4, buckets[4] = [min: 9, max: 9]
    // num = 1, index - (1 - 1) / 2 = 0, buckets[0] = [min: 1, max: 1]
  }
  let maxGap = 0;
  let previousMax = min;
  // calculate the maximum gap
  for (let bucket of buckets) {
    if (bucket[0] === Infinity && bucket[1] === -Infinity) {
      // skip empty buckets
      continue;
    }
    maxGap = Math.max(maxGap, bucket[0] - previousMax);
    previousMax = bucket[1];

    // bucket[0] = [min: 1, max: 1], maxGap = max(0, 1 - 1) = 0, previousMax = 1
    // bucket[1] = [min: 3, max: 3], maxGap = max(0, 3 - 1) = 2, previousMax = 3
    // bucket[2] = [min: 6, max: 6], maxGap = max(2, 6 - 3) = 3, previousMax = 6
    // bucket[3] = [min: Infinity, max: -Infinity], skip
    // bucket[4] = [min: 9, max: 9], maxGap = max(3, 9 - 6) = 3, previousMax = 9
  }
  return maxGap;
}
