/** Implement Stack using One Queue
 * https://leetcode.com/problems/implement-stack-using-queues/
 *
 *  * Implement a last-in-first-out (LIFO) stack using only two queues.
 * The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
 *
 * Implement the MyStack class:
 *   - void push(int x) Pushes element x to the top of the stack.
 *   - int pop() Removes the element on the top of the stack and returns it.
 *   - int top() Returns the element on the top of the stack.
 *   - boolean empty() Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 * You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
 * Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 *
 * Example 1:
 * Input
 * ["MyStack", "push", "push", "top", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 2, 2, false]
 *
 * Explanation
 * MyStack myStack = new MyStack();
 * myStack.push(1);
 * myStack.push(2);
 * myStack.top(); // return 2
 * myStack.pop(); // return 2
 * myStack.empty(); // return False
 */

/** Algorithm:
 * 1. For push operation, simply add the element to the queue.
 * 2. For pop operation, move all elements except the last one to the back of the queue,
 *    then remove and return the last element.
 * 3. For top operation, move all elements except the last one to the back of the queue,
 *    then return the last element without removing it.
 * 4. For empty operation, check if the queue is empty.
 * Time complexity:
 * - push: O(n) since we need to move all elements to the back of the queue after adding the new element.
 * - pop: O(1) since we are just removing the last element from the queue.
 * - top: O(1) since we are just peeking at the last element from the queue.
 * - empty: O(1) since we are just checking if the queue is empty.
 * Space complexity: O(n) since we are using a queue to store the elements of the stack.
 * Note: We can optimize the push operation to O(1) by adding the new element to the back of the queue and then moving all elements except the new element to the back of the queue. This way, the last element in the queue will always be the top of the stack.
 */

var MyStack = function () {
  this.q = [];
};

// Time complexity for pushing an element is O(1)
MyStack.prototype.push = function (x) {
  this.q.push(x);
};

// Time complexity for popping an element is O(n), because we need to move n-1 elements to the back of the queue or we are running a loop n-1 timess
MyStack.prototype.pop = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    let frontElem = this.q.shift();
    this.q.push(frontElem);
  }
  return this.q.shift();
};

// Time complexity for retrieving the top element is O(n), because we need to move n-1 elements to the back of the queue or we are running a loop n-1 times
MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    let frontElem = this.q.shift();
    this.q.push(frontElem);
  }
  //   return this.q.front();
  let topElem = this.q.shift();
  this.q.push(topElem);
  return topElem;
};

// Time complexity for checking if the stack is empty is O(1)
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};
