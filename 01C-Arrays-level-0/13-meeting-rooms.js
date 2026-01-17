/** Meeting Rooms [Easy]
 * https://leetcode.com/problems/meeting-rooms/
 *
 * Given an array of meeting time intervals where intervals[i] = [starti, endi],
 * determine if a person could attend all meetings.
 *
 * Example 1:
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: false
 * Explanation: There is a conflict between the meetings [0,30] and [5,10].
 *
 * Example 2:
 * Input: intervals = [[7,10],[2,4]]
 * Output: true
 * Explanation: There is no conflict between the meetings.
 *
 * @param {number[][]} intervals
 * @return {boolean}
 */

function canAttendMeetings(intervals) {
  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);
  // Iterate through the sorted intervals to check for overlaps
  for (let i = 1; i < intervals.length; i++) {
    // If the start time of the current interval is less than the end time of the previous interval, there is an overlap
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false; // Overlap found, cannot attend all meetings
    }
  }
  return true; // No overlaps found, can attend all meetings
}
