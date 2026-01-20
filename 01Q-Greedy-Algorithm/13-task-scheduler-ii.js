/** Task Scheduler II [Medium]
 * https://leetcode.com/problems/task-scheduler-ii/
 *
 * You are given a 0-indexed array of positive integers tasks,
 * representing tasks that need to be completed in order, where
 * tasks[i] is the type of the ith task.
 * You are also given a positive integer space, which
 * represents the minimum number of days that must pass after the completion of a task
 * before another task of the same type can be performed.
 * Each day, until all tasks are completed, you must either:
 * - complete the next task from tasks, or
 * - take a break.
 * Return the minimum number of days needed to complete all tasks.
 *
 * Example 1:
 * Input: tasks = [1,2,1,2,3,1], space = 3
 * Output: 9
 * Explanation: Day 1: Complete task 0 (type 1).
 *              Day 2: Complete task 1 (type 2).
 *              Day 3: Take a break.
 *              Day 4: Take a break.
 *              Day 5: Complete task 2 (type 1).
 *              Day 6: Complete task 3 (type 2).
 *              Day 7: Take a break.
 *              Day 8: Complete task 4 (type 3).
 *              Day 9: Complete task 5 (type 1).
 *              It can be shown that all tasks cannot be completed in less than 9 days.
 *
 * Example 2:
 * Input: tasks = [5,8,8,5], space = 2
 * Output: 6
 * Explanation: Day 1: Complete task 0 (type 5).
 *              Day 2: Complete task 1 (type 8).
 *              Day 3: Take a break.
 *              Day 4: Take a break.
 *              Day 5: Complete task 2 (type 8).
 *              Day 6: Complete task 3 (type 5).
 *             It can be shown that all tasks cannot be completed in less than 6 days.
 *
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */

/** Greedy Approach - Task Scheduler II
 * Time Complexity: O(n), where n is the number of tasks
 * Space Complexity: O(m), where m is the number of unique task types
 *
 * Time Complexity Explanation:
 * The algorithm iterates through the list of tasks once,
 * performing constant-time operations for each task.
 * Therefore, the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses a map to store the last performed day for each unique task type.
 * In the worst case, all tasks are of different types, leading to a space complexity of O(m),
 * where m is the number of unique task types.
 */

function taskSchedulerII(tasks, space) {
  // Map to track the last day each task type was performed
  let lastPerformed = {};
  // Current day counter
  let currentDay = 0;
  // Iterate through each task in the tasks array
  for (let i = 0; i < tasks.length; i++) {
    let taskType = tasks[i];
    // Check if the task type has been performed before
    if (taskType in lastPerformed) {
      // Calculate the next available day to perform this task type
      let nextAvailableDay = lastPerformed[taskType] + space + 1;
      // If the current day is less than the next available day, take breaks
      if (currentDay < nextAvailableDay) {
        currentDay = nextAvailableDay;
      }
    }
    // Perform the current task and update the last performed day
    lastPerformed[taskType] = currentDay;
    currentDay++;
  }
  return currentDay;
}
