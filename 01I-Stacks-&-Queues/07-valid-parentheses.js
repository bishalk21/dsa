/** Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 * Input: s = "(]"
 * Output: false
 */

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let lastOrTop = stack.pop();
      if (
        !lastOrTop ||
        (lastOrTop === "[" && s[i] !== "]") ||
        (lastOrTop === "{" && s[i] !== "}") ||
        (lastOrTop === "(" && s[i] !== ")")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// using map for better readability
// time: O(n), we are iterating through length of string
// space: O(n), we are using stack to store opening brackets
var isValidP = function (s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let lastOrTop = stack.pop();
      if (!lastOrTop || s[i] !== map[lastOrTop]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
