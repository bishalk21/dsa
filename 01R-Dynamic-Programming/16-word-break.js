/** Word Break
 * https://leetcode.com/problems/word-break/
 *
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 * Example 1:
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 *
 * Example 2:
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 * Note that you are allowed to reuse a dictionary word.
 *
 * Example 3:
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: false
 * Explanation: Return false because "catsandog" cannot be segmented into a sequence of dictionary words.
 *
 * Constraints:
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s and wordDict[i] consist of only lowercase English letters.
 * All the strings of wordDict are unique.
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/**
 * @time O(n^3) where n is length of string s
 * @space O(n) where n is length of string s
 * @description Dynamic Programming with Memoization
 */

function wordBreak(s, wordDict) {
  let dp = {};
  let fn = (remS) => {
    let res = false;
    if (remS.length === 0) return true;
    if (remS in dp) return dp[remS];
    for (let i = 0; i < remS.length; i++) {
      let subStr = remS.substring(0, i + 1);
      if (wordDict.includes(subStr) && fn(remS.substring(i + 1))) {
        return (res = true);
      }
    }
    return (dp[remS] = res);
  };
  return fn(s);
}
