# Time and Space Complexity

## Time Complexity

`used to measure the efficiency of an algorithm in terms of the time it takes to complete (speed) as a function of the input size.`
Time complexity is a computational complexity that describes the amount of time it takes to run an algorithm as a function of the length of the input. It is usually expressed using Big O notation.

`time complexity != time taken by the algorithm`
`speed, efficiency, performance ~ as input size increases`

| linear search                                                    | binary search                                                  |
| ---------------------------------------------------------------- | -------------------------------------------------------------- |
| O(n)                                                             | O(log n)                                                       |
| for an array of size 100, linear search takes 100 steps (slower) | for an array of size 100, binary search takes 7 steps (faster) |

## Big O Notation

Big O notation is a mathematical notation used to describe the upper bound of an algorithm's time complexity. It provides a high-level understanding of the algorithm's performance by focusing on the most significant factors that affect its execution time, particularly as the input size grows.

```js
const array = [1, 2, 3, 4, 5];
target = 3;
```

|              | linear search | binary search |
| ------------ | ------------- | ------------- |
| best case    | O(1)          | O(1)          |
| average case | O(n)          | O(log n)      |
| worst case   | O(n)          | O(log n)      |

### Common Time Complexities

- **O(1)**: Constant time - the algorithm takes the same amount of time regardless of input size.
- **O(log n)**: Logarithmic time - the algorithm's time grows logarithmically as the input size increases.
- **O(n)**: Linear time - the algorithm's time grows linearly with the input size.
- **O(n log n)**: Linearithmic time - the algorithm's time grows in proportion to n log n.
- **O(n^2)**: Quadratic time - the algorithm's time grows quadratically with the input size.
- **O(2^n)**: Exponential time - the algorithm's time doubles with each additional element in the input.

## Space Complexity

Space complexity is a computational complexity that describes the amount of memory space required by an algorithm as a function of the length of the input. Like time complexity, it is also expressed using Big O notation.

### Common Space Complexities

- **O(1)**: Constant space - the algorithm uses a fixed amount of space regardless of input size.
- **O(n)**: Linear space - the algorithm's space requirement grows linearly with the input size.
- **O(n^2)**: Quadratic space - the algorithm's space requirement grows quadratically with the input size.

Understanding time and space complexity is crucial for writing efficient algorithms and for optimizing code performance.

### Efficiency

Efficiency in algorithms refers to how well an algorithm performs in terms of time and space complexity. An efficient algorithm minimizes the time it takes to complete and the amount of memory it uses, especially as the input size increases.

When analyzing an algorithm's efficiency, consider both time and space complexity. An algorithm that is fast but uses excessive memory may not be suitable for large inputs, while an algorithm that is memory-efficient but slow may not provide a good user experience.

> `O(1) > O(log n) > O(n) > O(n log n) > O(n^2) > O(2^n) > O(n!) > O(∞)`

> if there is O(n^2) or for loops with nested for loops, it is likely O(n^2) or worse time complexity
> if there is O(3n) or three independent for loops, it is likely O(n) or worse time complexity
> if there is O(n^2) with independent for loops (O(n^2 + n)), it is likely O(n^2) or worse time complexity
> if there is O(n^3) with linear for loop O(n) and nested for loop O(n^2), it is likely O(n^3) or worse time complexity

Ever wondered why some code is lightning fast while other code crawls like a snail? 💡 Time & Space Complexity
Time complexity measures how the speed of your algorithm grows as your input gets bigger. We use Big O notation to describe this.
