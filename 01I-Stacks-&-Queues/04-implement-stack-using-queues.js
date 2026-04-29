/** Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues.
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
 *
 * push(1); // q1 is: [1]
 * push(2); // q1 is: [1, 2]
 * push(3); // q1 is: [1, 2, 3]
 * push(4); // q1 is: [1, 2, 3, 4]
 * pop();  // should return 4
 *   - but 4 is at the back of q1
 *   - so we need to move n-1 elements from q1 to q2
 *   - pop from q1 and return it
 * pop();  // should return 3
 * push(5); // q1 is: [1, 2, 5]
 * push(6); // q1 is: [1, 2, 5, 6]
 * top(); // should return 6
 * pop();  // should return 6
 * pop();  // should return 5
 * pop();  // should return 2
 * pop();  // should return 1
 * empty(); // should return true
 */

/** Algorithm:
 * 1. For push operation, simply enqueue the element to the first queue (q1).
 * 2. For pop operation, we need to remove the last element added to the stack, which is at the back of q1. To achieve this, we can move all elements except the last one from q1 to q2. Then, we can dequeue the last element from q1 and return it. Finally, we swap the names of q1 and q2 to prepare for the next operations.
 * 3. For top operation, we can follow the same process as pop, but instead of dequeuing the last element from q1, we can peek at it and return its value. We still need to move all elements except the last one from q1 to q2 and swap the names of q1 and q2 afterward.
 * 4. For empty operation, we can simply check if q1 is empty.
 *
 * Time Complexity:
 * - push: O(1) since we are just enqueuing an element to q1.
 * - pop: O(n) since we need to move n-1 elements from q1 to q2 and then dequeue the last element from q1.
 * - top: O(n) since we need to move n-1 elements from q1 to q2 and then peek at the last element from q1.
 * - empty: O(1) since we are just checking if q1 is empty.
 * Space Complexity: O(n) since we are using two queues to store the elements of the stack.
 * Note: The space complexity is O(n) because in the worst case, all elements of the stack could be in one of the queues (either q1 or q2) at any given time.
 */

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let frontElem = this.q1.shift();
    this.q2.push(frontElem);
  }
  let poppedElem = this.q1.shift();
  // swap q1 and q2
  //   [this.q1, this.q2] = [this.q2, this.q1];
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return poppedElem;
};

MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let frontElem = this.q1.shift();
    this.q2.push(frontElem);
  }
  //   let topElem = this.q1.shift();
  //   this.q2.push(topElem);
  let topElem = this.q1[0];
  this.q2.push(this.q1.shift());
  //   this.q2.push(topElem); // does not remove from q1

  // swap q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return topElem;
};

MyStack.prototype.empty = function () {
  //   this.q1.length > 0 ? false : true;
  return this.q1.length === 0;
};
