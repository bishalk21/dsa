/** Palindrome Partitioning [medium]
 * https://leetcode.com/problems/palindrome-partitioning/
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 * A palindrome string is a string that reads the same backward as forward.
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 *
 * Example 2:
 * Input: s = "a"
 * Output: [["a"]]
 *
 * @param {string} s
 * @return {string[][]}
 */

/**
 * Backtracking
 * Time O(N * 2^N) | Space O(N)
 * N: length of the input string s
 *
 * Time complexity explanation: O(N * 2^N)
 * In the worst case, we may have to explore all possible partitions of the string.
 * Each character can either be a part of a palindrome or not, leading to 2^N possible partitions.
 * Additionally, for each partition, we may need to check if the substring is a palindrome,
 * which takes O(N) time. Thus, the overall time complexity is O(N * 2^N).
 *
 * Space complexity explanation: O(N)
 * The space complexity is determined by the recursion stack and the path array used to build partitions.
 * The maximum depth of the recursion stack is N (the length of the input string s),
 * and the path array also holds up to N substrings in the worst case.
 * Thus, the overall space complexity is O(N).
 */

function partition(s) {
  let ans = [];
  let isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  };
  let backtrack = (path, remaining) => {
    // base case: if remaining is empty, we found a valid partition
    if (remaining.length === 0) {
      ans.push([...path]);
      return;
    }
    for (let i = 1; i <= remaining.length; i++) {
      let choices = remaining.substring(0, i);
      let rest = remaining.substring(i);
      // check if choices is a palindrome
      if (!isPalindrome(choices)) continue;
      // if rest is empty, we found a valid partition
      path.push(choices);
      backtrack(path, rest);
      path.pop();
    }
  };
  backtrack([], s);
  return ans;
}
