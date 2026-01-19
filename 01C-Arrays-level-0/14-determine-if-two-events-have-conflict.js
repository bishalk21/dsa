/** Determine if Two Events Have Conflict [Easy]
 * https://leetcode.com/problems/determine-if-two-events-have-conflict/
 *
 * You are given two arrays of strings that represent two inclusive events
 * that happened on the same day, event1 and event2,
 * where event1 = [startTime1, endTime1] and event2 = [startTime2, endTime2].
 * The format of the startTime and endTime strings is "HH:MM".
 * A conflict happens when two events have some non-empty intersection.
 * (i.e., some moment is common to both events).
 * Return true if there is a conflict between two events. Otherwise, return false.
 *
 * Example 1:
 * Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
 * Output: true
 * Explanation: The two events intersect at time 02:00.
 *
 * Example 2:
 * Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
 * Output: true
 * Explanation: The two events intersect starting from 01:20 to 02:00.
 *
 * Example 3:
 * Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
 * Output: false
 * Explanation: The two events do not intersect.
 *
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */

/** Simple Comparison Approach - Determine if Two Events Have Conflict
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The algorithm performs a constant number of comparisons
 * regardless of the input size. Therefore, the time complexity is O(1).
 *
 * Space Complexity Explanation:
 * The algorithm uses a constant amount of extra space
 * regardless of the input size. Therefore, the space complexity is O(1).
 */

function haveConflict(event1, event2) {
  // Sort events based on start time
  event1.sort();
  event2.sort();
  // Check for overlap
  if (event1[0] <= event2[1] && event2[0] <= event1[1]) {
    return true; // Events overlap
  }
  return false; // No overlap

  // Check if the events overlap
  // event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
  //   return !(event1[1] < event2[0] || event2[1] < event1[0]);
}
