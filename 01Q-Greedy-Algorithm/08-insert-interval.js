/** Insert Interval [Medium]
 * https://leetcode.com/problems/insert-interval/
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Note that you don't need to modify intervals in-place. You can return a new array.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * Explanation: Since the new interval [2,5] overlaps with [1,3], we merge them into [1,5].
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: The new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *              Merging them into [3,10].
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

/** Greedy Approach - insert interval
 * - iterate through the list of intervals and add all non-overlapping intervals to the result list
 * Time Complexity: O(n), where n is the number of intervals
 * Space Complexity: O(n), where n is the number of intervals
 *
 * Time Complexity Explanation:
 * The algorithm iterates through the list of intervals once,
 * performing constant-time operations for each interval.
 * Therefore, the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses an additional list to store the result intervals.
 * In the worst case, all intervals may be added to the result list,
 * leading to a space complexity of O(n).
 */

function insert(intervals, newInterval) {
  let result = [];
  // left non-overlapping intervals
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  // overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);
  // right non-overlapping intervals or remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
}
