/** Assign Cookies [Easy]
 * https://leetcode.com/problems/assign-cookies/description/
 *
 * Assume you are an awesome parent and want to give your children some cookies.
 * But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with;
 * and each cookie j has a size s[j].
 * If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.
 * Your goal is to maximize the number of your content children and output the maximum number.
 *
 * Example 1:
 * Input: g = [1,2,3], s = [1,1]
 * Output: 1
 * Explanation: You have 3 children and 2 cookies.
 *              The greed factors of 3 children are 1, 2, 3.
 *              You have 2 cookies and both cookies have size 1.
 *              You can assign only 1 cookie to the child whose greed factor is 1.
 *              So you output 1.
 *
 * Example 2:
 * Input: g = [1,2], s = [1,2,3]
 * Output: 2
 * Explanation: You have 2 children and 3 cookies.
 *              The greed factors of 2 children are 1, 2.
 *              You have 3 cookies and their sizes are big enough to gratify all of the children.
 *              You can assign cookies of size 1 and 2 to the children.
 *              So you output 2.
 *
 * Constraints:
 * 1 <= g.length <= 3 * 10^4
 * 0 <= s.length <= 3 * 10^4
 * 1 <= g[i], s[j] <= 2^31 - 1
 *
 * @param {number[]} g - greed factors
 * @param {number[]} s - cookie sizes
 * @return {number} - maximum number of content children
 */

/**
 * Greedy Algorithm - Assign Cookies
 * Time Complexity: O(N log N + M log M), N = number of children, M = number of cookies
 * Space Complexity: O(1)
 *
 * Time Complexity Explanation:
 * The time complexity is dominated by the sorting steps for both the greed factors and cookie sizes,
 * which take O(N log N) and O(M log M) time respectively.
 * After sorting, we make a single pass through both arrays to assign cookies,
 * which takes O(N + M) time. Therefore, the overall time complexity is O(N log N + M log M).
 *
 * Space Complexity Explanation:
 * The space complexity is O(1) if we consider the input arrays can be modified in place.
 * If we need to maintain the original arrays, the space complexity would be O(N + M)
 * due to the space required for the sorted arrays.
 */

function findContentChildren(g, s) {
  // Sort greed factors and cookie sizes in ascending order
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let contentChildren = 0;
  let cookieIndex = 0;
  // Iterate through each child's greed factor
  //   for (let i = 0; i < g.length; i++) {
  //     // Find a cookie that can satisfy the child's greed factor
  //     while (cookieIndex < s.length && s[cookieIndex] < g[i]) {
  //       cookieIndex++;
  //     }
  //     // If a suitable cookie is found, assign it to the child
  //     if (cookieIndex < s.length) {
  //       contentChildren++;
  //       cookieIndex++; // Move to the next cookie for the next child
  //     } else {
  //       break; // No more cookies available
  //     }
  //   }

  // while loop version
  while (cookieIndex < s.length) {
    // If the current cookie can satisfy the current child's greed factor
    if (s[cookieIndex] >= g[contentChildren]) {
      contentChildren++; // Assign cookie to child
    }
    cookieIndex++; // Move to the next cookie
    // If all children are content, break the loop
    if (contentChildren >= g.length) {
      break;
    }
  }

  return contentChildren;
}
