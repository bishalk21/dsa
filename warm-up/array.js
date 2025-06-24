/** Arrays Data Structure
 * 1. create an arrayBuffer (allocate raw memory)
 *
 * Typed Arrays (Uint8Array, Uint16Array, etc - interpret the raw memory as 8-bit, 16-bit, etc unsigned integers)
 * 2. interpreting memory as 8-bit unsigned integers
 * 3. interpreting memory as 16-bit unsigned integers
 */

// create an arrayBuffer
const buffer = new ArrayBuffer(6);
// creates a contiguous memory block of 6 bytes
// console.log(buffer); // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

// interpreting memory as 8-bit unsigned integers
// means that each byte in the buffer is treated as an unsigned integer (8-bit) and can hold values from 0 to 255
const uint8View = new Uint8Array(buffer);
// console.log(uint8View); // Uint8Array [ 0, 0, 0, 0, 0, 0 ]
uint8View[0] = 255; // 255 is the maximum value for an unsigned integer
// console.log(uint8View); // Uint8Array [ 255, 0, 0, 0, 0, 0 ]
// console.log(buffer); // ArrayBuffer { [Uint8Contents]: <ff 00 00 00 00 00>, byteLength: 6 }

// interpreting memory as 16-bit unsigned integers
// means that each 2 bytes in the buffer is treated as an unsigned integer (16-bit) and can hold values from 0 to 65535
const uint16View = new Uint16Array(buffer);
// console.log(uint16View); // Uint16Array [ 255, 0, 0 ]
uint16View[1] = 65535; // 65535 is the maximum value for an unsigned integer
// console.log(uint16View); // Uint16Array [ 255, 65535, 0 ]
console.log(buffer); // ArrayBuffer { [Uint8Contents]: <ff ff 00 00 ff ff>, byteLength: 6 }

// write a function that searches for an element in an array and returns index,
// if not found, returns -1

const arr = [1, 2, 3, 4, 5];
function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

// console.log(searchElement(arr, 3)); // 2

// 1.  print all even numbers in an array
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
      console.log(arr2[i]);
    }
  }
}

printEvenNumbers(arr2); // 2 4 6 8 10

// 2. Count negative numbers in an array
const arr3 = [-1, -2, 3, 4, -5, 6, -7, 8, 9, 10];

function totalNegativeNumbers(arr3) {
  let initialNegativeCount = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < 0) {
      initialNegativeCount++;
    }
  }
  return initialNegativeCount;
}

console.log(totalNegativeNumbers(arr3)); // 4

// 3. find the smallest number in an array
const arr4 = [5, 3, 8, 1, 2];

function smallestNumber(arr4) {
  let smallest = arr4[0];

  for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] < smallest) {
      smallest = arr4[i];
    }
  }
  return smallest;
}

console.log(smallestNumber(arr4)); // 1

// 4. find the largest number in an array
const arr5 = [5, 3, 8, 1, 2];
function largestNumber(arr5) {
  let largest = arr5[0];

  for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > largest) {
      largest = arr5[i];
    }
  }

  // let largest = -Infinity;
  // for (let i = 0; i < arr5.length; i++) {
  //   if (arr5[i] > largest) {
  //     largest = arr5[i];
  //   }
  // }

  return largest;
}

console.log(largestNumber(arr5)); // 8

// 5. find the second largest number in an array
const arr6 = [5, 3, 8, 1, 2, 8];

function secondLargestNumber(arr6) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  // corner cases
  // 1. what if array is empty?
  // 2. what if array has only one element?
  if (arr6.length < 2) {
    return null; // or throw an error
  }

  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > largest) {
      secondLargest = largest;
      largest = arr6[i];
    } else if (arr6[i] > secondLargest && arr6[i] < largest) {
      secondLargest = arr6[i];
    } else if (arr6[i] === largest) {
      continue; // skip duplicates of the largest number
    }
  }
  return secondLargest;
}

console.log(secondLargestNumber(arr6)); // 5
