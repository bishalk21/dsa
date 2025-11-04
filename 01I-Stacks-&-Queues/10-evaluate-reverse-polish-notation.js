/** Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * You are given an array of strings tokens that
 * represents an arithmetic expression in a Reverse Polish Notation.
 *
 * Evaluate the expression.
 * Return an integer that represents the value of the expression.
 *
 * Note that:
 * The valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * The division between two integers always truncates toward zero.
 * There will not be any division by zero.
 * The input represents a valid arithmetic expression in a reverse polish notation.
 * The answer and all the intermediate calculations can be represented in a 32-bit integer.
 *
 * Example 1:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Example 2:
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 * Example 3:
 * Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * Output: 22
 * Explanation:
 * "10","6", (9 + 3), "-11", "*", "/", "*", "17", "+", "5", "+"
 * "10","6", ((9 + 3) * -11), "/", "*", "17", "+", "5", "+"
 * "10", (6 / ((9 + 3) * -11)), "*", "17", "+", "5", "+"
 * "(10 * (6 / ((9 + 3) * -11)))", "17", "+", "5", "+"
 * "((10 * (6 / ((9 + 3) * -11))) + 17)", "5", "+"
 * "((10 * (6 / ((9 + 3) * -11))) + 17) + 5"
 *  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5) = 22
 *
 * Algorithm using Stack:
 * - Initialize an empty stack
 * - Iterate through each token in the input array
 *  - If the token is a number, push it onto the stack
 * - If the token is an operator (+, -, *, /):
 *   - Pop the top two elements from the stack
 *   - Apply the operator to these elements
 *   - Push the result back onto the stack
 * - The final result will be the only element left in the stack
 * - Return the top element of the stack as the result
 *
 * Time Complexity: O(n), where n is the number of tokens in the input array.
 * Space Complexity: O(n), in the worst case, the stack can hold all the numbers.
 */

function evalRPN(tokens) {
  let stack = [];

  let map = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a), // truncate toward zero
  };

  for (let i = 0; i < tokens.length; i++) {
    // if (["+", "-", "*", "/"].includes(tokens[i])) {
    // if (
    //   tokens[i] === "+" ||
    //   tokens[i] === "-" ||
    //   tokens[i] === "*" ||
    //   tokens[i] === "/"
    // ) {
    if (map(tokens[i])) {
      // before operator, if pushed two numbers, whatever is pushed first is b, second is a
      const a = stack.pop();
      const b = stack.pop();
      //   let result;
      //   let result = eval(`${b} ${tokens[i]} ${a}`);
      let result = map[tokens[i]](+a, +b);
      //   stack.push(result);
      // handle truncation toward zero for division
      stack.push(Math.trunc(result));
    } else {
      // it's a number, push to stack
      // stack.push(parseInt(tokens[i], 10));
      stack.push(tokens[i]);
    }
  }
  //   return stack.pop();
  //   return +stack.pop();
  return Number(stack.pop());
}

function evalRPNotation(tokens) {
  let stack = [];
  const operators = new Set(["+", "-", "*", "/"]);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!operators.has(token)) {
      // token is a number, push to stack
      stack.push(parseInt(token, 10));
    } else {
      // token is an operator, pop two elements from stack
      const b = stack.pop();
      const a = stack.pop();
      let result;

      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = Math.trunc(a / b);
          break;
      }

      // push the result back to stack
      stack.push(result);
    }
  }

  // the final result will be the only element left in the stack
  return stack.pop();
}
