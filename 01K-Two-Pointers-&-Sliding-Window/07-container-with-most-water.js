/** Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of
 * the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by the array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 * Explanation: The above vertical lines are represented by the array [1,1].
 * In this case, the max area of water (blue section) the container can contain is 1.
 *
 * @param {number[]} height
 * @return {number}
 */

/** Brute Force Approach
 * - check for every possible pair of lines
 * - calculate the area formed by each pair
 * - keep track of the maximum area found
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function maxAreaBruteForce(height) {
  let maxArea = 0;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}

/** Two-Pointer Approach
 * - use two pointers, one at the beginning and one at the end of the array
 * - calculate the area formed by the lines at the two pointers
 * - move the pointer pointing to the shorter line inward
 * - repeat until the two pointers meet
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;

  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    // if (area > maxArea) {
    //   maxArea = area;
    // }
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
