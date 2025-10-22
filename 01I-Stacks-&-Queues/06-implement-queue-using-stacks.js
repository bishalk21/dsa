/** Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 *
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 *  - void push(int x) Pushes element x to the back of the queue.
 *  - int pop() Removes the element from the front of the queue and returns it.
 *  - int peek() Returns the element at the front of the queue.
 *  - boolean empty() Returns true if the queue is empty, false otherwise.
 *
 * Notes:
 * You must use only standard operations of a stack, which means that only push to top, peek/pop from top, size, and is empty operations are valid.
 * Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 *
 * Example 1:
 * Input
 * ["MyQueue", "push", "push", "peek", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 1, 1, false]
 *
 * push(1); // stack1 is: [1] (top of the stack is the rightmost element)
 * push(2); // stack1 is: [1, 2] (top of the stack is the rightmost element)
 * push(3); // stack1 is: [1, 2, 3] (top of the stack is the rightmost element
 * push(4); // stack1 is: [1, 2, 3, 4] (top of the stack is the rightmost element
 * pop();  // should return 1
 *   - but 1 us at the bottom of stack1
 *  - so we need to move elements from stack1 to stack2
 *  - pop from stack2
 * pop();  // should return 2
 * push(5); // stack1 is: [3, 4, 5] (top of the stack is the rightmost element
 * push(6); // stack1 is: [3, 4, 5, 6] (top of the stack is the rightmost element
 * peek(); // should return 3
 * pop();  // should return 3
 * pop();  // should return 4
 * pop();  // should return 5
 * pop();  // should return 6
 * empty(); // should return true
 */

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

// Time complexity for pushing an element is O(1)
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

// Time complexity for popping an element is O(1) amortized because each element is moved between the two stacks at most once
// worst case O(n) when we need to move elements from s1 to s2
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      let topElem = this.s1.pop();
      this.s2.push(topElem);
    }
  }
  return this.s2.pop();
};

// Time complexity for retrieving the front element is O(1) amortized because each element is moved between the two stacks at most once
// worst case O(n) when we need to move elements from s1 to s2
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      let topElem = this.s1.pop();
      this.s2.push(topElem);
    }
  }
  return this.s2[this.s2.length - 1];
};

// Time complexity for checking if the queue is empty is O(1)
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};
