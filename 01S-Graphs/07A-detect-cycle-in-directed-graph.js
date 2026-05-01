/** Detect Cycle in Directed Graph
 * https://www.leetcode.com/problems/course-schedule/
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * Return true if you can finish all courses. Otherwise, return
 * false.
 *
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
 *
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * Constraints:
 * - 1 <= numCourses <= 10^5
 * - 0 <= prerequisites.length <= 5000
 * - prerequisites[i].length == 2
 */

/** Algorithm: DFS for Cycle Detection in Directed Graphs
 * 1. Build an adjacency list representation of the graph from the given prerequisites.
 * 2. Perform a depth-first search (DFS) starting from each unvisited node.
 * 3. During DFS, track visited nodes and the recursion stack (the path of nodes currently being explored).
 * 4. If a neighbor is already visited and is in the recursion stack, a cycle is detected.
 * 5. Return true if a cycle is found, otherwise return false after checking all nodes.
 * The time complexity of this algorithm is O(V + E), where V is the number of vertices (courses) and E is the number of edges (prerequisites),
 * due to the need to visit each vertex and edge once during the DFS traversal.
 * The space complexity is O(V + E) for the adjacency list and the visited and recursion stack sets.
 */

function canFinish(numCourses, prerequisites) {
  // 1. Build the adjacency list from the prerequisites
  const graph = {};
  for (const [course, prereq] of prerequisites) {
    if (!graph[course]) graph[course] = [];
    graph[course].push(prereq);
  }

  const visited = new Set();
  const recStack = new Set();

  // 2. Perform DFS for each unvisited node
  for (let course = 0; course < numCourses; course++) {
    if (!visited.has(course)) {
      if (dfs(course, graph, visited, recStack)) {
        return false; // Cycle detected
      }
    }
  }

  return true; // No cycles detected
}

function dfs(course, graph, visited, recStack) {
  visited.add(course);
  recStack.add(course);

  // Check all neighbors
  for (const neighbor of graph[course] || []) {
    if (!visited.has(neighbor)) {
      if (dfs(neighbor, graph, visited, recStack)) {
        return true; // Cycle detected
      }
    } else if (recStack.has(neighbor)) {
      return true; // Cycle detected
    }
  }

  // Remove the current node from the recursion stack
  recStack.delete(course);
  return false; // No cycle detected
}
