/**
 * Sum of all numbers in an array
 */

let arr = [1, 2, 3, 4, 5];
function sumOfArr(n) {
  // Base condition: if the array is empty, return 0
  if (n === 0) {
    return 0;
  }
  // Recursive case: add the last element of the array to the sum of the rest of the array
  return arr[n] + sumOfArr(n - 1);
}

console.log(sumOfArr(arr.length - 1)); // Output: 15 (1 + 2 + 3 + 4 + 5)

/**
 * arr = [1, 2, 3, 4, 5], arr.length = 5
 * sumOfArr(5 - 1) = sumOfArr(4) = 5 + sumOfArr(3)
 * sumOfArr(4) = 4 + sumOfArr(3)
 * sumOfArr(3) = 3 + sumOfArr(2)
 * sumOfArr(2) = 2 + sumOfArr(1)
 * sumOfArr(1) = 1 + sumOfArr(0)
 * sumOfArr(0) = 0 (base case)
 * Final result: 5 + 4 + 3 + 2 + 1 = 15
 */

// using for loop
function sumOfArrForLoop() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // Add each element to the sum
  }
  return sum; // Return the total sum
}
