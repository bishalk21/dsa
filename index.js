// first program in JavaScript
console.log(
  "Welcome to the JavaScript Data Structures and Algorithms repository!"
);

/***
 * DATA TYPES
 * JavaScript has several built-in data types, including:
 * 1. Primitive Types:
 *  - Number: Represents both integer and floating-point numbers.
 *  - String: Represents a sequence of characters.
 *  - Boolean: Represents a true or false value.
 *  - Undefined: Represents a variable that has been declared but not assigned a value.
 * * - Null: Represents an intentional absence of any object value.
 * * 2. Reference Types:
 *  - Object: A collection of key-value pairs.
 *  - Array: An ordered list of values.
 * *  - Function: A callable object that can be executed.
 *  - Date: Represents a specific point in time.
 * *  - RegExp: Represents a regular expression for pattern matching in strings.
 * * 3. Special Types:
 * - Symbol: Represents a unique and immutable value, often used as object property keys.
 * * - BigInt: Represents integers with arbitrary precision, useful for very large numbers.
 *
 */

// String
let str = "Hello, World!";
console.log(str); // Output: Hello, World!

// Number
let num = 42;
console.log(num); // Output: 42

// Boolean
let isTrue = true;
console.log(isTrue); // Output: true

/***
 * VARIABLES
 * In JavaScript, variables can be declared using three keywords:
 * 1. var: Function-scoped or globally scoped, can be re-declared and updated.
 * 2. let: Block-scoped, can be updated but not re-declared in the same scope.
 * 3. const: Block-scoped, cannot be updated or re-declared, must be initialized at declaration.
 * Variables can hold any data type, including primitive and reference types.
 * Variables can also be reassigned to different data types, but it's a good practice to keep the type consistent for clarity and maintainability.
 */

let variable1 = "Hello"; // Using let
const variable2 = 100; // Using const
var variable3 = true; // Using var
variable1 = "World"; // Reassigning let variable
variable3 = false; // Reassigning var variable
console.log(variable1); // Output: World
console.log(variable2); // Output: 100
console.log(variable3); // Output: false
// Attempting to reassign const variable will result in an error
// variable2 = 200; // Uncommenting this line will throw an error: "Assignment to constant variable."

/**
 * OPERATORS
 * JavaScript supports various operators, including:
 * 1. Arithmetic Operators: +, -, *, /, %, ** (exponentiation)
 * 2. Assignment Operators: =, +=, -=, *=, /=, %=, **=
 * 3. Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
 * 4. Logical Operators: && (AND), || (OR), ! (NOT)
 * 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
 * 6. Ternary Operator: condition ? expr1 : expr2
 * 7. Typeof Operator: typeof variable
 * 8. Instanceof Operator: object instanceof constructor
 * 9. Spread Operator: ... (used to expand iterable objects into individual elements)
 * 10. Destructuring Assignment: Allows unpacking values from arrays or properties from objects into distinct variables.
 * 11. Template Literals: Allows embedding expressions within string literals using backticks (`) and ${expression} syntax.
 * 12. Nullish Coalescing Operator: ?? (returns the right-hand operand when the left-hand operand is null or undefined)
 * 13. Optional Chaining Operator: ?. (allows safe access to deeply nested properties without throwing an error if a property is undefined or null)
 */

// Concatenation
let greeting = "Hello, " + "World!";
console.log(greeting); // Output: Hello, World!
