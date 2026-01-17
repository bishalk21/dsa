/** Merge Intervals [Medium]
 * https://leetcode.com/problems/merge-intervals/
 *
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and
 * return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 *
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Example 3:
 * Input: intervals = [[4,7],[1,4]]
 * Output: [[1,7]]
 * Explanation: Intervals [4,7] and [1,4] are considered overlapping.
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/** Greedy Approach - merge intervals
 * Time Complexity: O(n log n), where n is the number of intervals
 * Space Complexity: O(n), where n is the number of intervals
 *
 * Time Complexity Explanation:
 * The algorithm first sorts the intervals based on their start times,
 * which takes O(n log n) time. Then, it iterates through the sorted intervals once,
 * performing constant-time operations for each interval.
 * Therefore, the overall time complexity is O(n log n).
 *
 * Space Complexity Explanation:
 * The algorithm uses an additional list to store the merged intervals.
 * In the worst case, all intervals may be added to the merged list,
 * leading to a space complexity of O(n).
 */

function merge(intervals) {
  // Sort intervals based on the start time - intervals = [[1,4], [4,7]]
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [intervals[0]]; // Initialize the result with the first interval - ans = [[1,4]]

  // Iterate through the sorted intervals starting from the second interval
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i]; // Current interval to be processed - currentInterval = [4,7]
    let lastMergedInterval = ans[ans.length - 1]; // Last interval in the merged result - lastMergedInterval = [1,4]

    // Check if there is an overlap between the current interval and the last merged interval
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // 4 <= 4
      // If they overlap, merge them by updating the end time of the last merged interval
      lastMergedInterval[1] = Math.max(
        // max(4, 7)
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // If they don't overlap, add the current interval to the result
      ans.push(currentInterval);
    }
  }
  return ans; // Return the merged intervals
}
