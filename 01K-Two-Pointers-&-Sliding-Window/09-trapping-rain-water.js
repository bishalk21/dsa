/** Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * Given n non-negative integers representing an elevation map
 * where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped.
 * Example 2:
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 */

/**
 * @param {number[]} height
 * @return {number}
 *
 * Two Pointers Approach
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 */
function trap(height) {
  let n = height.length;
  // store max left and max right height for each index
  let maxLeft = [];
  maxLeft[0] = height[0];
  let maxRight = [];
  maxRight[n - 1] = height[n - 1];

  // fill maxLeft array
  for (let i = 1; i < n; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);

    // fill maxRight array simultaneously
    maxRight[n - 1 - i] = Math.max(height[n - 1 - i], maxRight[n - i]); // maxRight[n - 1 - i + 1]
  }

  // fill maxRight array
  //   for (let i = n - 2; i >= 0; i--) {
  //     maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  //   }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let waterLevel = Math.min(maxLeft[i], maxRight[i]) - height[i];
    ans = ans + (waterLevel < 0 ? 0 : waterLevel);
  }
  return ans;
}
