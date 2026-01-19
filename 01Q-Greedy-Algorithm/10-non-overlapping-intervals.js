/** Non-overlapping Intervals [Medium]
 * https://leetcode.com/problems/non-overlapping-intervals/
 *
 * Given an array of intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of intervals you need to remove
 * to make the rest of the intervals non-overlapping.
 *
 * Note that intervals which only touch at a point
 * are non-overlapping (i.e., [1,2] and [2,3] are non-overlapping).
 *
 * Example 1:
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 *
 * Example 2:
 * Input: intervals = [[1,2],[1,2],[1,2]]
 * Output: 2
 * Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
 *
 * Example 3:
 * Input: intervals = [[1,2],[2,3]]
 * Output: 0
 * Explanation: You don't need to remove any intervals since they're already non-overlapping.
 *
 * @param {number[][]} intervals
 * @return {number}
 */

/** Greedy Approach - non-overlapping intervals
 * Time Complexity: O(n log n), where n is the number of intervals
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The algorithm first sorts the intervals based on their end times,
 * which takes O(n log n) time. Then, it iterates through the sorted intervals once,
 * performing constant-time operations for each interval.
 * Therefore, the overall time complexity is O(n log n).
 *
 * Space Complexity Explanation:
 * The algorithm uses a constant amount of extra space for variables,
 * regardless of the input size. Therefore, the space complexity is O(1).
 */

function eraseOverlapIntervals(intervals) {
  // Sort intervals based on the end time
  intervals.sort((a, b) => a[1] - b[1]);
  let removeIntervalsCount = 0; // Count of intervals to remove
  let lastIncludedIntervalEnd = -Infinity; // End time of the last included interval

  // Iterate through the sorted intervals
  for (let i = 0; i < intervals.length; i++) {
    // If the start time of the current interval is greater than or equal to the end time of the last included interval
    if (intervals[i][0] < lastIncludedIntervalEnd) {
      removeIntervalsCount++; // Overlap found, increment the count
    } else {
      lastIncludedIntervalEnd = intervals[i][1]; // Update the end time of the last included interval
    }
  }
  return removeIntervalsCount; // Return the total count of intervals to remove
}
