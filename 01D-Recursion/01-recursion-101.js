/**
 * Recursion 101
 * - function that calls itself to solve smaller problems of the same type (problems)
 *
 * Parts of Recursion:
 * 1. Base Case: The condition under which the recursion stops.
 * 2. Recursive Case: The part of the function that calls itself with a smaller or simpler input.
 *
 * Real life example:
 * - queue of people
 * - comment thread
 * - organization hierarchy
 *
 * If the base case if not defined properly,
 * it can lead to infinite recursion and
 * eventually a stack overflow error.
 */

function recursion(num) {
  // Base case: if num is 0, return 1
  if (num === 0) {
    return 1;
  }
  // Recursive case: multiply num by the result of recursion with num - 1
  return num * recursion(num - 1);
}

recursion(5); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

// print n to 1 using recursion
function print(n) {
  if (n < 1) {
    return; // Base case: if n is less than 1, stop recursion
  }
  // print(--n); // Recursive call with n decremented by 1
  n = n - 1; // Decrement n
  print(n); // Recursive call with the decremented value of n
}

// print 1 to n using recursion
let n = 10;
function print1toN(x) {
  if (x > n) {
    return; // Base case: if x is greater than n, stop recursion
  }
  //   print1toN(++x); // Recursive call with x incremented by 1
  x = x + 1; // Increment x
  print1toN(x); // Recursive call with the incremented value of x
}

// 1 to 20 using for loop
function print1toNForLoop() {
  for (let i = 1; i <= 20; i++) {
    console.log(i); // Print numbers from 1 to 20
  }
}

/**
 * Common Mistakes in Recursion:
 * 1. Forgetting the base case: Always ensure you have a base case to stop recursion.
 * 2. Not modifying the input: Ensure that the input to the recursive function is modified in each call to eventually reach the base case.
 * 3. Infinite recursion: If the base case is never reached, it can lead to infinite recursion and a stack overflow error.
 * 4. Using the wrong data type: Ensure that the data type of the input is appropriate for the recursive function.
 * 5. Not returning a value: If the recursive function is expected to return a value, ensure that you return it in the base case and recursive case.
 * 6. Overcomplicating the problem: Sometimes, recursion can be avoided for simpler problems, leading to unnecessary complexity.
 * 7. Not understanding the problem: Ensure you fully understand the problem before implementing recursion.
 * 8. time complexity: Be aware of the time complexity of your recursive solution, as it can lead to performance issues for large inputs.
 *
 * When to use recursion:
 * - When the problem can be broken down into smaller subproblems of the same type.
 * - When the problem has a natural recursive structure, such as tree traversal or factorial calculation.
 * - When the problem can be solved more easily with recursion than with iteration.
 * - When the problem requires backtracking, such as in combinatorial problems or puzzles.
 * - trees and graphs: Recursion is often used for traversing trees and graphs, such as depth-first search (DFS).
 * - divide and conquer algorithms: Many algorithms, such as merge sort and quicksort, use recursion to divide the problem into smaller subproblems.
 * - backtracking algorithms: Recursion is commonly used in backtracking algorithms, such as solving mazes or generating permutations.
 * - dynamic programming: Some dynamic programming problems can be solved using recursion with memoization to avoid redundant calculations.
 * - mathematical problems: Recursion is often used to solve mathematical problems, such as calculating Fibonacci
 */
