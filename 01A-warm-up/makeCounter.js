/** Make Counter
 * https://namastedev.com/practice/make-counter
 *
 * Create a function makeCounter that returns a counter object
 * with methods to increment, decrement, and reset the counter.
 * the counter should maintain its current value and
 * provide the following methods:
 * - increment(): Increases the counter value by 1 and returns the new value.
 * - decrement(): Decreases the counter value by 1 and returns the new value.
 * - reset(): Resets the counter value to 0 and returns 0.
 *
 */

function makeCounter(initialValue = 0) {
  let count = initialValue; // Initialize counter with initial value
  return {
    increment: function () {
      count += 1; // Increase counter by 1
      return count; // Return the new counter value
    },
    decrement: function () {
      count -= 1; // Decrease counter by 1
      return count; // Return the new counter value
    },

    reset: function () {
      count = initialValue; // Reset counter to initial value
      return count; // Return initial value
    },
  };
}
