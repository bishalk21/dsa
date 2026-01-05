/** Combinations
 * https://leetcode.com/problems/combinations/
 * Given two integers n and k,
 * return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: n = 4, k = 2
 * Output: [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 *
 * Example 2:
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 *
 * Definition for the function combine
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**
 * Mathematical Explanation:
 * The number of ways to choose k elements from a set of n elements
 * is given by the binomial coefficient C(n, k),
 * which is calculated as:
 *                n!
 * C(n, k) =  -------------
 *            k! * (n - k)!
 *
 * Time Complexity: O(C(n, k) * k)
 * where C(n, k) is the binomial coefficient "n choose k",
 * representing the number of ways to choose k elements from a set of n elements.
 * The additional factor of k accounts for the time taken to copy each valid combination to the result list.
 *
 * Space Complexity: O(k)
 * The space complexity is determined by the maximum depth of the recursion tree,
 * which is k in this case. This space is used for the recursion stack and the temporary path array.
 */

function combine(n, k) {
  let ans = [];
  let backtrack = (start, path) => {
    if (path.length === k) {
      ans.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(1, []);
  return ans;
}
