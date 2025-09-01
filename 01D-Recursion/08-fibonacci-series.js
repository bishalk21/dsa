/** Generate Fibonacci Sequence
 * Given an integer n, return an array containing the first n Fibonacci numbers, starting from 0.
 * Constraints
 * 1. 0 <= n <= 50
 * 2. if n <= 0, return []
 * 3. if n = 1, return [0]
 */

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fibArr = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
}
