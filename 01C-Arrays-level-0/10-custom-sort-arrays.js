/**
 * Write a function that takes an array containing a mix of characters and numbers,
 * and returns a sorted array.
 * The sorted array should have all characters (letters) in ascending order first,
 * followed by all numbers in ascending order.
 */

let unsortedArray = [5, "b", 3, "a", "c", 1, 2, "d"]; // output: ["a", "b", "c", "d", 1, 2, 3, 5]

/**
 * Algorithm method 1: Separate and Sort
 * 1. Separate the characters and numbers into two different arrays.
 * 2. Sort both arrays individually.
 * 3. Concatenate the sorted character array with the sorted number array.
 * 4. Return the final sorted array.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function customSeparateAndSortArray(arr) {
  // variables to hold separate arrays
  let charArray = [];
  let numArray = [];

  // separate characters and numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      charArray.push(arr[i]);
    } else if (typeof arr[i] === "number") {
      numArray.push(arr[i]);
    }
  }
  // sort the arrays
  charArray.sort();
  numArray.sort((a, b) => a - b);

  // concatenate the sorted arrays
  return charArray.concat(numArray);
}

let sortedArray = customSeparateAndSortArray(unsortedArray);
console.log(`Sorted Array (Separate and Sort): ${sortedArray}`);

/**
 * Algorithm method 2: Array.prototype.sort()
 * 1. Use the built-in sort function with a custom comparator.
 * 2. In the comparator, separate characters and numbers.
 * 3. Return the final sorted array.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function customArraySort(arr) {
  return arr.sort((a, b) => {
    if (typeof a === "string" && typeof b === "number") {
      return -1; // strings come first
    } else if (typeof a === "number" && typeof b === "string") {
      return 1; // numbers come last
    } else {
      return a < b ? -1 : 1; // natural order for same types
    }
  });
}

let sortedArray2 = customArraySort(unsortedArray);
console.log(`Sorted Array (Built-in Sort): ${sortedArray2}`);

/** Algorithm method 4: Custom Quick Sort
 * 1. Implement a quick sort function that sorts the array.
 * 2. In the partition function, separate characters and numbers while partitioning.
 * 3. Return the final sorted array.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function customQuickSort(arr) {
  if (arr.length <= 1) return arr; // base case

  let pivot = arr[Math.floor(arr.length / 2)]; // choose pivot or middle element
  let left = []; // elements less than pivot
  let right = []; // elements greater than pivot
  let equal = []; // elements equal to pivot

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else if (typeof arr[i] === "string" && typeof pivot === "number") {
      left.push(arr[i]); // strings come first
    } else if (typeof arr[i] === "number" && typeof pivot === "string") {
      right.push(arr[i]); // numbers come last
    } else if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return customQuickSort(left).concat(equal, customQuickSort(right));
}

let sortedArray3 = customQuickSort(unsortedArray);
console.log(`Sorted Array (Quick Sort): ${sortedArray3}`);

/** Best approach Algorithm method 5: Two-Pointer Technique
 * 1. Use two pointers to traverse the array.
 * 2. One pointer for characters and another for numbers.
 * 3. Compare and place elements in the correct order.
 * 4. Return the final sorted array.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

let unsortedArray1 = [5, "a", 10, "b", 2, "c"];

function customTwoPointerSort(arr) {
  let left = 0; // pointer for characters
  let right = arr.length - 1; // pointer for numbers

  while (left < right) {
    // move left pointer to the right until a number is found
    while (left < right && typeof arr[left] === "string") {
      left++;
    }
    // move right pointer to the left until a character is found
    while (left < right && typeof arr[right] === "number") {
      right--;
    }
    // swap elements if pointers have not crossed
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // Find the index where numbers start
  let splitIndex = 0;
  while (splitIndex < arr.length && typeof arr[splitIndex] === "string") {
    splitIndex++;
  }

  // Sort each group
  let chars = arr.slice(0, splitIndex).sort();
  let nums = arr.slice(splitIndex).sort((a, b) => a - b);

  return [...chars, ...nums];
}

let sortedArray4 = customTwoPointerSort(unsortedArray1);
console.log(`Sorted Array (Two-Pointer): ${sortedArray4}`);

/**
 *
 * why 5 as a number is less than "c" as a string?
 * because in the two-pointer approach, we are treating numbers and strings differently.
 *
 *
 * [5, "a", 10, "b", 2, "c"] ==> ["a", "b", "c", 10, 2, 5]
 * code explanation of how final array is sorted in ascending order:
 */
