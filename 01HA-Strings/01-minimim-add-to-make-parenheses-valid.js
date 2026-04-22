/** Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 *
 * A parentheses string is valid if and only if:
 * - It is the empty string, or
 * - It can be written as AB (A concatenated with B),
 *   where A and B are valid strings, or
 * - It can be written as (A), where A is a valid string.
 * You are given a parentheses string s.
 * In one move, you can insert a parenthesis at any position of the string.
 * Return the minimum number of moves required to make s valid.
 *
 * Example 1:
 * Input: s = "())"
 * Output: 1
 *
 * Example 2:
 * Input: s = "((("
 * Output: 3
 *
 * Constraints:
 * - 1 <= s.length <= 1000
 * - s[i] is either '(' or ')'.
 *
 * Algorithm:
 * 1. Use a counter to track the balance of parentheses.
 * 2. Iterate through the string:
 *   - If '(', increment the counter.
 *   - If ')', decrement the counter.
 * 3. If the counter becomes negative, it means we have more ')' than '(', so we need to add a '('.
 * 4. After processing all characters, if the counter is positive, it means we have more '(' than ')', so we need to add that many ')'.
 * 5. Return the sum of additions (for unmatched ')') and the counter (for unmatched '(').

 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(1), as we are using only a few variables to keep track of the counts.
 *
 * we can also use a stack to solve this problem,
 * but the counter approach is more efficient in terms of space complexity.
 *
 * Algorithm using stack:
 * 1. Initialize an empty stack and a counter for additions needed.
 * 2. Iterate through the string:
 *    - If '(', push it onto the stack.
 *    - If ')', check if the stack is empty:
 *      - If empty, increment the additions counter.
 *      - Otherwise, pop an element from the stack.
 * 3. After processing all characters, if the stack is not empty, increment the additions counter by the size of the stack.
 * 4. Return the additions counter.
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(n), as we are using a stack to keep track of unmatched '('.
 */

function minAddToMakeValid(s) {
  let moves = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      counter++;
    } else {
      if (counter === 0) {
        moves++;
      } else {
        counter--;
      }
    }
  }
  return moves + counter;
}

// using stack
function minAddToMakeValidStack(s) {
  let moves = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        moves++;
      } else {
        stack.pop();
      }
    }
  }
  return moves + stack.length;
}
