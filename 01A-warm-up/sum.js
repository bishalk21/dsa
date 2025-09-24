/** sum()
 * https://namastedev.com/practice/sum
 *
 * Design a function sum that takes any number of arguments and
 * returns their total.
 * The function should work for both fixed and
 * variable number of arguments using JavaScript features.
 * Only numerical arguments will be provided.
 * Must not use built-in functions like eval() or Function() constructor.
 * Negative numbers should be handled correctly.
 *
 * sum(1, 2, 3); // returns 6
 * sum(5, 10, 15, 20); // returns 50
 * sum(7); // returns 7
 * sum(); // returns 0
 *
 * Algorithm Approach:
 * - Use the rest parameter syntax to accept a variable number of arguments.
 * - Initialize a total sum variable to 0.
 * - Iterate through all the arguments and add each to the total sum.
 * - Return the total sum.
 * - Handle edge cases such as no arguments being passed.
 * - Ensure that negative numbers are correctly added to the total.
 * - This approach leverages JavaScript's ability to handle variable arguments and ensures accurate summation.
 *
 * - Time Complexity: O(n) where n is the number of arguments.
 * - Space Complexity: O(1)
 */

function sum(...args) {
  // intialize total sum variable
  let total = 0;
  // iterate through all arguments
  //   for (let num of args) {
  for (let i = 0; i < args.length; i++) {
    let num = args[i];
    // add each argument to total sum
    total = total + num;
  }
  return total; // return the total sum
}

// if no arguments are passed, the total remains 0
// negative numbers are correctly added to the total
