/**
 * Functions in JavaScript are blocks of code designed to perform a particular task.
 * They are executed when "called" or "invoked".
 * - can take inputs (parameters) and return outputs (values).
 * - can be defined using the `function` keyword, followed by a name, parentheses for parameters, and curly braces for the function body.
 * - can also be anonymous, meaning they do not have a name.
 * - can be assigned to variables, passed as arguments to other functions, or returned from other functions.
 * - can be used to encapsulate logic, making code more modular and reusable.
 * - can be defined in various ways, including function declarations, function expressions, and arrow functions.
 */

// 1.  Sum of Two Integers
// Functions are used to encapsulate logic that can be reused.
// named function declaration
function sum(a, b) {
  return a + b;
}
// Example usage
console.log(sum(5, 10)); // Output: 15

// Function expressions can also be used to define functions.
const add = function (x, y) {
  return x + y;
};
// Example usage
console.log(add(3, 7)); // Output: 10

// anonymous function can be assigned to a variable
const multiply = function (a, b) {
  return a * b;
};
// Example usage
console.log(multiply(4, 5)); // Output: 20

// difference between function expression and anonymous function expression
// Function expressions can be named or anonymous, but they are not hoisted like function declarations.
// Named function expressions can be useful for debugging, as they provide a name in stack traces.

// 2. Square of a Number
// Functions can also be used to perform mathematical operations.
function square(num) {
  return num * num;
}
// Example usage
console.log(square(4)); // Output: 16

// 3. Check voting eligibility
// Functions can be used to encapsulate logic for decision-making.
// Arrow function syntax
const isEligibleToVote = (age) => {
  //   if (age >= 18) {
  //     return "Eligible to vote";
  //   } else {
  //     return "Not eligible to vote";
  //   }
  // Ternary operator for concise conditional logic
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
};
// Example usage
console.log(isEligibleToVote(20)); // Output: Eligible to vote

// 4. even or odd number
// anonymous function expression
const isEven = function (num) {
  return num % 2 === 0 ? "Even" : "Odd";
};
// Example usage
console.log(isEven(7)); // Output: Odd

// 5. Factorial of a Number
// Functions can be used to perform recursive calculations.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Example usage
console.log(factorial(5)); // Output: 120
