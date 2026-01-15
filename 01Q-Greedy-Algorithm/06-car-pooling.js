/** Car Pooling
 * https://leetcode.com/problems/car-pooling/
 *
 * There is a car with capacity empty seats.
 * The vehicle only drives east (i.e., it cannot turn around and drive west).
 * You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi]
 * indicates that the ith trip has numPassengersi passengers and the locations to pick them up
 * and drop them off are fromi and toi respectively.
 * Return true if it is possible to pick up and drop off all passengers for all the given trips,
 * or false otherwise.
 *
 * Example 1:
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 4
 * Output: false
 * Explanation: From location 3 to 5 there would be 5 passengers in the car, exceeding the capacity.
 *
 * Example 2:
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 5
 * Output: true
 * Explanation: We can pick up all the passengers.
 */

/** Greedy Approach - Car Pooling
 * Time Complexity: O(n + m), where n is the number of trips and m is the range of locations (1000 in this case)
 * Space Complexity: O(m), where m is the range of locations (1000 in this case)
 *
 * Time Complexity Explanation:
 * The algorithm iterates through the trips array once to update the location array,
 * which takes O(n) time. Then, it iterates through the location array of fixed size (1001)
 * to check the used capacity, which takes O(m) time. Since m is a constant (1001),
 * the overall time complexity is O(n).
 *
 * Space Complexity Explanation:
 * The algorithm uses an additional array of size 1001 to track passenger changes at each location.
 * Therefore, the space complexity is O(m), where m is the range of locations (1001).
 */

function carPooling(trips, capacity) {
  // Create an array to track passenger changes at each location
  const location = new Array(1001).fill(0);
  // Update the passenger changes for each trip
  for (let i = 0; i < trips.length; i++) {
    let [numPassengers, from, to] = trips[i];
    location[from] += numPassengers; // Pick up passengers
    location[to] -= numPassengers; // Drop off passengers
  }
  // Track the current number of passengers in the car (used capacity)
  let usedCapacity = 0;
  for (let i = 0; i < 1001; i++) {
    usedCapacity += location[i];
    // If at any point the used capacity exceeds the car's capacity, return false
    if (usedCapacity > capacity) {
      return false;
    }
  }
  return true; // All trips can be accommodated within the capacity
}
