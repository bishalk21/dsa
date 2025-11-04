/** Remove Outermost Parentheses
 * https://leetcode.com/problems/remove-outermost-parentheses/
 *
 * A valid parentheses string is either empty (""), "(" + A + ")", or A + B,
 * where A and B are valid parentheses strings, and + represents string concatenation.
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 * A valid parentheses string S is primitive if it is nonempty, and there does not
 * exist a way to split it into S = A + B, with A and B nonempty valid parentheses strings.
 * Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k,
 * where P_i are primitive valid parentheses strings.
 * Return S after removing the outermost parentheses of every primitive string
 * in the primitive decomposition of S.
 *
 * Example 1:
 * Input: s = "(()())(())"
 * Output: "()()()"
 * Explanation:
 * The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
 * After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 *
 * Example 2:
 * Input: s = "(()())(())(()(()))"
 * Output: "()()()()(())"
 * Explanation:
 * The input string is "(()())(())(()(()))", with primitive decomposition
 * "(()())" + "(())" + "(()(()))".
 * After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
 *
 * Example 3:
 * Input: s = "()()"
 * Output: ""
 * Explanation:
 * The input string is "()()", with primitive decomposition "()" + "()".
 * After removing outer parentheses of each part, this is "" + "" = "".
 *
 * Using Stack
 * - if we encounter '(', we push it to stack
 *   - level = stack.length
 * - if we encounter ')', we pop from stack
 * - level == 1 means it's an outermost parenthesis, we skip adding it to result
 * - level > 1 means it's not outermost, we add it to result
 *
 * Time Complexity: O(n), we are iterating through the string once
 * Space Complexity: O(n), in worst case stack can grow to n/2 size\
 */

// using Stack
function removeOuterParentheses(s) {
  let stack = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      //   let level = stack.length;
      //   if (level > 1) {
      //     result += s[i];
      //   }
      result += stack.length > 1 ? s[i] : "";
    } else {
      //   let level = stack.length;
      //   if (level > 1) {
      //     result += s[i];
      //   }

      result += stack.length > 1 ? s[i] : "";
      stack.pop();
    }
  }
  return result;
}

// without using Stack
function removeOuterParenthesesWithoutStack(s) {
  let result = "";
  let level = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      if (level > 1) {
        result += s[i];
      }
    } else {
      if (level > 1) {
        result += s[i];
      }
      level--;
    }
  }
  return result;
}
