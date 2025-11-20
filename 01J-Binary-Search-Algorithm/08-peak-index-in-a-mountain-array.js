/** Find the peak index in a mountain array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * You are given an integer mountain array arr of length n
 * where the values increase to a peak element and then decrease.
 * Return the index of the peak element.
 * A mountain array is defined as an array that:
 * - arr.length >= 3
 * - There exists some i with 0 < i < n - 1 such that:
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[n - 1]
 *
 * Your task is to solve it in O(log(n)) time complexity.
 *
 * Example 1:
 * Input: arr = [0,1,0]
 * Output: 1
 * Example 2:
 * Input: arr = [0,2,1,0]
 * Output: 1
 * Example 3:
 * Input: arr = [0,10,5,2]
 * Output: 1
 */

// using linear search
function peakIndexInMountainArrayLinear(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
}

function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
