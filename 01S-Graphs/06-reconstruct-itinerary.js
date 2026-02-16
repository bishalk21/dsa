/** Reconstruct Itinerary
 * https://leetcode.com/problems/reconstruct-itinerary/
 *
 * Itinerary means a planned route or journey, especially one that includes multiple stops or destinations.
 *
 * You are given a list of airline tickets where tickets[i] = [fromi, toi]
 * represent the departure and the arrival airports of one flight.
 * Reconstruct the itinerary in order and return it.
 * All of the tickets belong to a man who departs from "JFK". Thus, the itinerary must begin with "JFK".
 * If there are multiple valid itineraries, you should
 * return the itinerary that has the smallest lexical order when read as a single string.
 * For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
 * You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.
 *
 * Example 1:
 *
 *     [MUC] -> [LHR] -> [SFO]
 *       ^                 |
 *       |                 v
 *     [JFK]             [SJC]
 *
 * Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * Output: ["JFK","MUC","LHR","SFO","SJC"]
 *
 * Example 2:
 * Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 * Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
 *
 * Constraints:
 * 1 <= tickets.length <= 300
 * tickets[i].length == 2
 * fromi.length == 3
 * toi.length == 3
 * fromi and toi consist of uppercase English letters.
 * fromi != toi
 *
 * @param {string[][]} tickets
 * @return {string[]}
 */

/** Algorithm: Hierholzer's Algorithm for Directed Graphs + DFS + Backtracking
 * - We can represent the tickets as a directed graph,
 *   where each airport is a vertex and
 *   each ticket is a directed edge from the departure airport to the arrival airport.
 * - We can use Depth-First Search (DFS) to traverse the graph and find the itinerary.
 * - We need to sort the destinations for each departure airport in lexical order
 *   to ensure that we get the smallest lexical order itinerary.
 * - We can use backtracking to explore all possible itineraries and
 *   find the valid one that uses all the tickets.
 * - The time complexity of this algorithm is O(E log E), where E is the number of edges (tickets),
 *   due to the sorting step. The DFS traversal takes O(E) time.
 * - The space complexity is O(V + E), where V is the number of vertices (airports) and E is the number of edges (tickets),
 *   due to the graph representation and the recursion stack.
 */

function findItinerary(tickets) {
  // 1. Create a graph to represent the tickets
  const graph = {};
  // adjacency list representation of the graph
  for (const [from, to] of tickets) {
    // If the departure airport is not already in the graph, add it with an empty array
    if (!graph[from]) graph[from] = [];
    // Add the arrival airport to the list of destinations for the departure airport
    graph[from].push(to);
  }
  // 2. Sort the destinations for each departure airport in lexical order
  // for array, use of
  // for in loop to iterate over the keys of the graph object
  for (const nodes in graph) {
    graph[nodes].sort();
  }
  // 3. Use Depth-First Search (DFS) to find the itinerary
  let iPath = [];
  let dfs = (curr) => {
    // Get the list of destinations for the current departure airport
    let dests = graph[curr] || [];
    // While there are still destinations to visit
    while (dests && dests.length > 0) {
      // Get the next destination (the first one in the sorted list)
      let next = dests.shift();
      // Recursively call DFS on the next destination
      dfs(next);
    }
    // Add the current airport to the itinerary path after all destinations are visited
    /**
     * WHY?
     *      A -> B
     *     ^ |
     *     | v
     *      C
     */
    // iPath.push(curr);
    iPath.unshift(curr); // Add the current airport to the beginning of the itinerary path
  };
  dfs("JFK");
  //   return iPath.reverse();
  return iPath;
}
