# Data Structures and Algorithms

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Warm Up](#warm-up)

# Warm Up

- Fundamental programming concepts like variables, data types, control structures, functions, syntax and basic algorithms are essential for understanding data structures and algorithms.

- Data Structures and Algorithms are the building blocks of software development.
- They help in solving complex problems efficiently.

- `time complexity`: the amount of time taken by an algorithm to run as a function of the length of the input.
- `space complexity`: the amount of memory space taken by an algorithm to run as a function of the length of the input.
- `Data Structures`: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, etc.
- `Big O Notation`: a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.

  - O(1): constant time complexity.
  - O(log n): logarithmic time complexity.
  - O(n): linear time complexity.
  - O(n log n): linearithmic time complexity.
  - O(n^2): quadratic time complexity.
  - O(2^n): exponential time complexity.
  - O(n!): factorial time complexity.
    <img src="/src/assets/big-o-face.png" alt="Big O Face" width="200" height="200" />

#### Big O Notation

- way to categorize the efficiency of an algorithm (time or memory requirements based on the input size).
- not meant to be exact measurement
- does not tells how many cpu cycles it takes but meant to generalize the performance (growth) of an algorithm.
- helps to make decisions about what data structures to use and how to implement them.

  - `growth is with respect to the input size`
  - `constants are dropped`

    - O(2N) -> O(N) and this makes sense. That is because Big O is meant to describe the upper bound of the algorithm (the growth of the algorithm). The constant eventually becomes irrelevant.

      ```bash
       N = 1, O(10N) = 10, O(N^2) = 1
       N = 5, O(10N) = 50, O(N^2) = 25
       N = 100, O(10N) = 1,000, O(N^2) = 10,000 // 10x bigger
       N = 1000, O(10N) = 10,000, O(N^2) = 1,000,000 // 100x bigger
       N = 10000, O(10N) = 100,000, O(N^2) = 100,000,000 // 1000x bigger
      ```

- `worst case is usually the way we measure`

- [Big o Cheatsheet - Data structures and Algorithms with thier complexities](https://www.hackerearth.com/practice/notes/big-o-cheatsheet-series-data-structures-and-algorithms-with-thier-complexities-1/)

##### `O(1)`

- constant time complexity.
- the time taken by the algorithm is constant, regardless of the input size.

  ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

##### `O(N)`

- linear time complexity.
- the time taken by the algorithm is proportional to the input size.

  ```typescript
  function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  ```

##### `O(N^2)`

- quadratic time complexity.
- the time taken by the algorithm is proportional to the square of the input size.

  ```typescript
  function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  ```

##### O(N^3)

- cubic time complexity.
- the time taken by the algorithm is proportional to the cube of the input size.

      ```typescript
      function matrixMultiplication(a: number[][], b: number[][]): number[][] {
        const result: number[][] = [];
        for (let i = 0; i < a.length; i++) {
          result[i] = [];
          for (let j = 0; j < b[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < a[0].length; k++) {
              result[i][j] += a[i][k] * b[k][j];
            }
          }
        }
        return result;
      }
      ```

##### `O(log N)`

- logarithmic time complexity.
- the time taken by the algorithm is proportional to the logarithm of the input size.

  ```typescript
  function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  ```

##### `O(N log N)`

- linearithmic time complexity.
- the time taken by the algorithm is proportional to the product of the input size and the logarithm of the input size.

  ```typescript
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  ```

##### `O(2^N)`

- exponential time complexity.
- the time taken by the algorithm is proportional to the exponential of the input size.

  ```typescript
  function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  ```

##### `O(N!)`

- factorial time complexity.
- the time taken by the algorithm is proportional to the factorial of the input size.

  ```typescript
  function permute(arr: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number) => {
      if (start === arr.length) {
        result.push([...arr]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        backtrack(start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]];
      }
    };
    backtrack(0);
    return result;
  }
  ```

[Back to Top](#table-of-contents)

#### Data Structures

##### Arrays

- a collection of elements stored in contiguous memory locations.
- insertion: overwriting the value at a specific index.
- `const a = [], is not an array`
  - array is a contiguous block of memory, and the size of the array is fixed.
    - contiguous block of memory: memory that is stored in a single block, without any gaps.
      ```bash
      [INT1][INT2][INT3][INT4] // array of integers in memory
      ```
  - this memory is divided into equal-sized units (like 8-bit, 16-bit, 32-bit, etc.), and each unit holds a value.
  - the way this memory is interpreted depends on how you choose to interpret it (e.g., as an array of integers, an array of characters, etc.).

> Arrays are simple structures that map directly to contiguous blocks of memory. They are efficient for accessing and modifying data at specific indices, which makes them fundamental in many programming tasks.

      ```js
      /** Arrays Data Structure
       * Memory is just a series of zeros and ones.

      - 1.  create an arrayBuffer (allocate raw memory)
      -
      - Typed Arrays (Uint8Array, Uint16Array, etc - interpret the raw memory as 8-bit, 16-bit, etc unsigned integers)
      - 2.  interpreting memory as 8-bit unsigned integers
      - 3.  interpreting memory as 16-bit unsigned integers

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
      console.log(buffer); // ArrayBuffer { [Uint8Contents]: <ff 00 00 00 00 00>, byteLength: 6 }

      // interpreting memory as 16-bit unsigned integers
      // means that each 2 bytes in the buffer is treated as an unsigned integer (16-bit) and can hold values from 0 to 65535
      const uint16View = new Uint16Array(buffer);
      // console.log(uint16View); // Uint16Array [ 255, 0, 0 ]
      uint16View[1] = 65535; // 65535 is the maximum value for an unsigned integer
      // console.log(uint16View); // Uint16Array [ 255, 65535, 0 ]
      console.log(buffer); // ArrayBuffer { [Uint8Contents]: <ff 00 ff ff 00 00>, byteLength: 6 }

      ```

- Big O Notation for Arrays

  - `Access`: O(1)

    - accessing an element at a specific index is a constant-time operation.
    - the computer can directly calculate the memory address of any element in the array using the formula:

      - `memory address = base address + (index * size of each element)`

      ```js
      let arr = [10, 20, 30, 40, 50];
      let value = arr[2]; // Accessing the element at index 2
      console.log(value); // Output: 30
      ```

  - `Search`in sorted array: O(log N)

    - searching for an element in a sorted array using binary search is a logarithmic time operation.

      ```js
      let arr = [10, 20, 30, 40, 50];
      let index = arr.indexOf(30); // Searching for the element 30
      console.log(index); // Output: 2
      ```

  - `Deletion`: O(N) - worst case

    - deleting an element at a specific index in an array is a linear time operation.

      ```js
      let arr = [10, 20, 30, 40, 50];
      arr.splice(2, 1); // Deleting the element at index 2
      console.log(arr); // Output: [10, 20, 40, 50]
      ```

  - Worst-case time complexity for searching, inserting, and deleting an element in an array is O(N).

    - Searching: O(N)
    - Insertion: O(N)

    ```js
    let arr = [10, 20, 30, 40];
    arr.splice(2, 0, 25); // Inserting 25 at index 2
    console.log(arr); // Output: [10, 20, 25, 30, 40]
    ```

    - Deletion: O(N)

    ```js
    let arr = [10, 20, 30, 40, 50];
    let index = arr.indexOf(30); // Searching for the element 30
    console.log(index); // Output: 2
    ```

    ```js
    let arr = [10, 20, 30, 40, 50];
    arr.push(60); // Inserting the element 60 at the end of the array
    console.log(arr); // Output: [10, 20, 30, 40, 50, 60]
    ```

    ```js
    let arr = [10, 20, 30, 40, 50];
    arr.splice(2, 1); // Deleting the element at index 2
    console.log(arr); // Output: [10, 20, 40, 50]
    ```
