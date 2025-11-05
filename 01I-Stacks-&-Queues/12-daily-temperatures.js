/** Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day
 * to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * Example 1:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * Example 2:
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 * Example 3:
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 *
 * Algorithm: Using Stack
 * - Initialize an empty stack to keep track of indices of temperatures
 * - Create an answer array initialized with 0s, of the same length as temperatures
 * - Push the index of the last temperature onto the stack and set answer for that day to 0
 * - Iterate through the temperatures array from right to left (starting from the second last element)
 *  - While the stack is not empty, compare the current temperature with the temperature at the index stored at the top of the stack
 *   - If the current temperature is greater than or equal to the temperature at the top index of the stack, pop the stack
 *  - If the stack becomes empty, it means there is no warmer future day, so set answer for the current day to 0
 * - Otherwise, calculate the difference between the current index and the index at the top of the stack to find the number of days to wait for a warmer temperature, and set this value in the answer array
 * - Push the current index onto the stack
 * - Return the answer array
 * Time Complexity: O(n), where n is the length of the temperatures array.
 * Space Complexity: O(n), for the stack and answer array.
 */

function dailyTemperatures(temperatures) {
  let stack = [];
  let n = temperatures.length;
  let answer = Array(n).fill(0);

  stack.push(n - 1);
  answer[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (temperatures[i] >= temperatures[top]) {
        stack.pop();
      } else {
        answer[i] = top - i;
        break;
      }
    }
    if (!stack.length) {
      answer[i] = 0;
    }
    stack.push(i);
  }
  return answer;
}
