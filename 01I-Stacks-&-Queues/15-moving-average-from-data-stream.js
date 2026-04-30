/** Moving Average from Data Stream
 * https://leetcode.com/problems/moving-average-from-data-stream/
 *
 * Given a stream of integers and a window size,
 * calculate the moving average of all integers in the sliding window.
 *
 * Implement the MovingAverage class:
 * - MovingAverage(int size) Initializes the object with the size of the window size.
 * - double next(int val) Returns the moving average of the last size values of the stream.
 *
 * Example 1:
 * Input
 * ["MovingAverage", "next", "next", "next", "next"]
 * [[3], [1], [10], [3], [5]]
 * Output
 * [null, 1.00000, 5.50000, 4.66667, 6.00000]
 *
 * Explanation
 * MovingAverage movingAverage = new MovingAverage(3);
 * movingAverage.next(1); // return 1.00000 = 1 / 1
 * movingAverage.next(10); // return 5.50000 = (1 + 10) / 2
 * movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
 * movingAverage.next(5); // return 6.00000 = (10 + 3 + 5) / 3
 *
 * Constraints:
 * - 1 <= size <= 1000
 * - -10^5 <= val <= 10^5
 * - At most 10^4 calls will be made to next.
 */

/**** Algorithm:
 * 1. We can use a queue to store the last size values of the stream.
 * 2. We can also keep track of the sum of the values in the queue to calculate the moving average efficiently.
 * 3. For the next operation, we can add the new value to the queue and update the sum. If the size of the queue exceeds the window size, we can remove the oldest value from the queue and update the sum accordingly. Finally, we can return the moving average by dividing the sum by the size of the queue.
 * Time Complexity: O(1) for each call to next, since we are just adding and removing elements from the queue and updating the sum.
 * Space Complexity: O(size) since we are using a queue to store the last size values of the stream.
 */

class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }
}

MovingAverage.prototype.next = function (val) {
  this.queue.push(val);
  this.sum += val;

  if (this.queue.length > this.size) {
    this.sum -= this.queue.shift();
  }

  return this.sum / this.queue.length;
};
