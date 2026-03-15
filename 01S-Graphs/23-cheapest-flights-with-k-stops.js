/** Cheapest Flights with K Stops
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 *
 * There are n cities connected by some number of flights.
 * You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that
 * there is a flight from city fromi to city toi with cost pricei.
 *
 * You are also given three integers src, dst, and k,
 * return the cheapest price from src to dst with at most k stops.
 * If there is no such route, return -1.
 *
 * Example 1:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation: The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 3 is marked in red and
 * has cost 100 + 600 = 700.
 * Note that the path through cities [0,1,2,3] is cheaper but
 * is invalid because it uses 2 stops.
 *
 * Example 2:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation: The graph is shown above.
 * The cheapest price from city 0 to city 2 with at most 1 stop costs 200,
 * as marked red in the picture.
 * Note that the route from city 0 to city 2 with 0 stops costs 500,
 * which is more expensive.
 *
 * Example 3:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
 * Output: 500
 * Explanation: The graph is shown above.
 * The cheapest price from city 0 to city 2 with at most 0 stops costs 500,
 * as marked blue in the picture. Note that the route from city 0 to city 2 with 1 stop costs 200,
 * which is cheaper.
 *
 * Constraints:
 * - 2 <= n <= 100
 * - 0 <= flights.length <= (n * (n - 1) / 2)
 * - flights[i].length == 3
 * - 0 <= fromi, toi < n
 * - fromi != toi
 * - 1 <= pricei <= 10^4
 * - There will not be any multiple flights between two cities.
 * - 0 <= src, dst, k < n
 * - src != dst
 *
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

/** Algorithm: BFS
 * 1. Build the graph as an adjacency list
 *    where each city points to its neighbors and the cost to reach them.
 * 2. Use a queue to perform BFS starting from the src city.
 *    - Each element in the queue will be a tuple of (currentCity, currentPrice, stops).
 *    - For each neighbor of the current city, calculate the new price to reach that neighbor.
 *    - If the new price is cheaper than the previously recorded price for that neighbor
 *      and the number of stops is within the limit k,
 *      update the price and add the neighbor to the queue.
 * 3. Continue until the queue is empty.
 *
 * Time Complexity: O(n + m) where n is the number of cities and m is the number of flights.
 * Space Complexity: O(n + m) for the graph and the queue.
 */
function findCheapestPrice(n, flights, src, dst, k) {
  let graph = Array.from({ length: n }, () => []);
  for (let [from, to, price] of flights) {
    graph[from].push([to, price]);
  }
  let minPrice = new Array(n).fill(Infinity);
  minPrice[src] = 0;
  let q = [[src, 0, 0]];
  while (q.length > 0) {
    let [currCity, Price, stops] = q.shift();
    // if (stops > k) continue;
    for (let [neighbor, neighborPrice] of graph[currCity]) {
      let newPrice = Price + neighborPrice;
      if (newPrice < minPrice[neighbor] && stops <= k) {
        minPrice[neighbor] = newPrice;
        q.push([neighbor, newPrice, stops + 1]);
      }
    }
  }
  return minPrice[dst] === Infinity ? -1 : minPrice[dst];
}
