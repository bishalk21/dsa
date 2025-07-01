// Count Digit
// write a function that returns the count of digits in a number

// algorithm
// 1. divide the number by 10 until it becomes 0
// 2. count the number of times you divide by 10

// to remove the last digit from a number, use the floor division operator (/) - Math.floor(n / 10)

let num = 12345;

function countDigits(n) {
  if (n === 0) return 1; // Special case for 0
  n = Math.abs(n); // Handle negative numbers
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(num)); // Output: 5
