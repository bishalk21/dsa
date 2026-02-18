/** Binary Watch
 * https://leetcode.com/problems/binary-watch/
 *
 * A binary watch has 4 LEDs on the top which represent the hours (0-11),
 * and the 6 LEDs on the bottom represent the minutes (0-59).
 * Each LED represents a zero or one, with the least significant bit on the right.
 * Given a non-negative integer turnedOn which represents the number of LEDs
 * that are currently on, return all possible times the watch could represent.
 * You may return the answer in any order.
 * The hour must not contain a leading zero.
 * - For example, "01:00" is not valid. It should be "1:00".
 * The minute must consist of two digits and may contain a leading zero.
 * - For example, "10:2" is not valid. It should be "10:02".
 *
 * Example 1:
 * Input: turnedOn = 1
 * Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 * Explanation: There are 10 ways to turn on 1 LED, those are the valid times.
 *
 * Example 2:
 * Input: turnedOn = 9
 * Output: []
 * Explanation: There are 10 LEDs on the watch. We need to turn on 9 of them,
 *              so it is impossible to have a valid time.
 *
 * Constraints:
 * - 0 <= turnedOn <= 10
 *
 * @param {number} turnedOn
 * @return {string[]}
 */

/** Algorithm 1: Brute Force
 * Time Complexity: O(1) - The number of possible times is fixed (720), so it is constant time.
 * Space Complexity: O(1) - The space used to store the result is also constant, as there can be at most 720 valid times.
 */
function readBinaryWatch(turnedOn) {
  const result = [];
  // Iterate through all possible hours (0-11) and minutes (0-59)
  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      // Count the number of LEDs that are on for the current hour and minute
      const hourBits = countBits(hour);
      const minuteBits = countBits(minute);
      // If the total number of LEDs on matches turnedOn, add the time to the result
      if (hourBits + minuteBits === turnedOn) {
        // Format the time as "H:MM" and add to the result
        result.push(`${hour}:${minute.toString().padStart(2, "0")}`);
      }
    }
  }
  return result;
}

// Helper function to count the number of bits that are set to 1
function countBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1; // Increment count if the least significant bit is 1
    num >>= 1; // Right shift the bits to check the next bit
  }
  return count;
}

/** Algorithm 2: Backtracking
 * Intuition: Instead of checking all possible times,
 *            we can use backtracking to generate combinations of LEDs that are turned on.
 *            We can represent the hours and minutes as binary numbers and
 *            explore all combinations of LEDs being on until we reach the desired count.
 * Steps:
 * 1. Create a backtracking function that takes the current hour, minute, count of LEDs on, and the index of the LED being considered.
 * 2. If the count of LEDs on matches turnedOn, check if the hour and minute are valid and add the time to the result.
 * 3. If the count exceeds turnedOn or the index exceeds the total number of LEDs (10), stop exploring that path.
 * 4. For each LED, try turning it on and recursively call the backtracking function with the updated hour, minute, count, and index.
 *
 * Time Complexity: O(1) - Similar to the brute force approach, the number of possible times is fixed (720), so it is constant time.
 * Space Complexity: O(1) - The space used to store the result is also constant, as there can be at most 720 valid times.
 */
function readBinaryWatch(turnedOn) {
  const result = [];

  // Backtracking function to generate all combinations of LEDs
  let backtrack = (hour, minute, count, index) => {
    // If the count of LEDs on matches turnedOn, add the time to the result
    if (count === turnedOn) {
      // Validate that hour and minute are within valid ranges
      if (hour < 12 && minute < 60) {
        result.push(`${hour}:${minute.toString().padStart(2, "0")}`);
      }
      return;
    }
    // If the count exceeds turnedOn or index exceeds available LEDs, stop exploring
    if (count > turnedOn || index >= 10) {
      return;
    }
    // Try turning on each LED starting from index
    for (let i = index; i < 10; i++) {
      let newHour = hour;
      let newMinute = minute;
      if (i < 4) {
        // If the LED is in the hour section
        // newHour |= 1 << i;
        let bitValue = 1 << i; // Calculate the value of the LED at position i
        newHour |= bitValue; // Turn on the LED for the hour
      } else {
        // If the LED is in the minute section
        // newMinute |= 1 << (i - 4);
        // i - 4 to adjust the index for minutes (since the first 4 LEDs are for hours)
        let bitValue = 1 << (i - 4);
        newMinute |= bitValue; // Turn on the LED for the minute
      }
      backtrack(newHour, newMinute, count + 1, i + 1);
    }
  };
  backtrack(0, 0, 0, 0);
  return result;
}

/**
 * 1 << 1 means “shift the bits of 1 one position to the left.”
 * Binary 1 is 0001; shifting left by one gives 0010, which is decimal 2.
 *
 * 1 << 2 means “shift the bits of 1 two positions to the left.”
 * Binary 1 is 0001; shifting left by two gives 0100, which is decimal 4.
 *
 * result = []
 * turnedOn = 1
 * backtrack(hour=0, minute=0, count=0, index=0)
 *  - count (0) !== turnedOn (1) and index (0) < 10, so we continue
 *
 * - for i = 0 to 9:
 *   - i = 0: newHour = 0 | (1 << 0) = 1, newMinute = 0, count = 1, index = 1
 *     backtrack(hour=1, minute=0, count=1, index=1)
 *     - count (1) === turnedOn (1), so we add "1:00" to result
 *     - result = ["1:00"]
 *   - i = 1: newHour = 0 | (1 << 1) = 2, newMinute = 0, count = 2, index = 2
 *     backtrack(hour=2, minute=0, count=2, index=2)
 *     - count (2) !== turnedOn (1), so we return without adding to result
 *   - i = 2: newHour = 0 | (1 << 2) = 4, newMinute = 0, count = 1, index = 3
 *     backtrack(hour=4, minute=0, count=1, index=3)
 *     - count (1) === turnedOn (1), so we add "4:00" to result
 *     - result = ["1:00", "2:00", "4:00"]
 *   - i = 3: newHour = 0 | (1 << 3) = 8, newMinute = 0, count = 1, index = 4
 *     backtrack(hour=8, minute=0, count=1, index=4)
 *     - count (1) === turnedOn (1), so we add "8:00" to result
 *     - result = ["1:00", "2:00", "4:00", "8:00"]
 *   - i = 4: newHour = 0, newMinute = 0 | (1 << (4 - 4)) = 1, count = 1, index = 5
 *     backtrack(hour=0, minute=1, count=1, index=5)
 *     - count (1) === turnedOn (1), so we add "0:01" to result
 *     - result = ["1:00", "2:00", "4:00", "8:00", "0:01"]
 *
 */
