/** Min Stack
 * https://leetcode.com/problems/min-stack/
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 *  - MinStack() initializes the stack object.
 *  - void push(int val) pushes the element val onto the stack.
 *  - void pop() removes the element on the top of the stack.
 *  - int top() gets the top element of the stack.
 *  - int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 *
 * Example 1:
 *
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * Output
 * [null,null,null,null,-3,null,0,-2]
 *
 * push(8), stack = [8], min-[8]
 * push(10), stack = [8,10], min-[8]
 * push(4), stack = [8,10,4], min-[4]
 * push(7), stack = [8,10,4,7], min-[4]
 * - while pushing, we also maintain another stack to keep track of minimums
 * - pop() -> removes 7, stack = [8,10,4], min-[4]
 * - top() -> returns 4
 *
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n) for stack storage
 */

var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  //   this.stack.push(val);
  if (this.stack.length === 0) {
    // this.stack.push({ val: val, min: val });
    this.stack.push([val, val]);
  } else {
    // min will be the minimum of current val and previous min
    let minVal = Math.min(val, this.stack[this.stack.length - 1][1]);
    this.stack.push([val, minVal]);
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};
