/** Task Scheduler [Medium]
 * https://leetcode.com/problems/task-scheduler/
 *
 * You are given an array of CPU tasks,
 * each labeled with a letter from 'A' to 'Z', and a non-negative integer number n.
 * Each CPU interval can be idle or allow the completion of one task.
 * Tasks can be completed in any order, but there's a constraint:
 * there has to be a gap of at least n intervals between two same tasks with the same label.
 *
 * Return the minimum number of CPU intervals required to complete all the given tasks.
 *
 * Example 1:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
 *              After completing task A, you must wait two intervals before doing task A again.
 *              The same applies to task B. In the 3rd interval, neither A nor B can be done, so
 *              you idle. By the 4th interval, you can do task A again as 2 intervals have passed.
 *
 * Example 2:
 * Input: tasks = ["A","C","A","B","D","B"], n = 1
 * Output: 6
 * Explanation: One possible scheduling is A -> B -> C -> D -> A -> B.
 *              With cooling interval of 1, you can repeat a task after just one other task.
 *
 * Example 3:
 * Input: tasks = ["A","A","A", "B","B","B"], n = 3
 * Output: 10
 * Explanation: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B
 *              There are only two types of tasks, A and B, which need to be separated
 *              by at least 3 intervals. Therefore, idle intervals are needed or this leads to
 *              idling twice between repetitions of these tasks.
 *
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

/** Greedy Approach - task scheduler
 * Time Complexity: O(n), where n is the number of tasks
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The algorithm iterates through the list of tasks a constant number of times,
 * performing constant-time operations for each task.
 * Therefore, the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses a fixed-size array of size 26 to store the frequency of each task,
 * regardless of the input size. Therefore, the space complexity is O(1).
 */

function leastInterval(tasks, n) {
  // Frequency array to count occurrences of each task
  let freq = new Array(26).fill(0);
  // maxFreq to track the maximum frequency of any task
  let maxFreq = 0;
  // Populate the frequency array
  for (let i = 0; i < tasks.length; i++) {
    let taskIndex = tasks[i].charCodeAt(0) - 65; // 'A' ASCII is 65
    freq[taskIndex]++;
    maxFreq = Math.max(maxFreq, freq[taskIndex]);
  }
  // Count how many tasks have the maximum frequency
  let countMaxFreq = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxFreq) {
      countMaxFreq++;
    }
  }
  // Calculate the minimum number of CPU intervals required
  // n is the cooling interval
  // n + 1 represents the length of each cycle (maxFreq - 1) full cycles
  // maxFreq - 1 is the number of full cycles
  // countMaxFreq is the number of tasks with maximum frequency
  let cycles = (n + 1) * (maxFreq - 1) + countMaxFreq;
  // The result is the maximum between calculated cycles and total tasks
  // total tasks to handle cases where there are enough tasks to fill idle slots
  return Math.max(cycles, tasks.length);
}
