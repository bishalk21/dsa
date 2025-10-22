/** What is Stack and Queue in Code?-and manipulate collections of elements.
 * They provide a way to manage data based on specific access patterns.
 *
 * In Code:
 * - Stack:
 *   - Implemented using arrays or linked lists.
 *   - its restricted access nature means elements can only be added or removed from the top of the stack.
 *   - Common operations:
 *     - push(element): Add an element to the top of the stack.
 *     - pop(): Remove and return the top element of the stack.
 *     - peek(): View the top element without removing it.
 *     - isEmpty(): Check if the stack is empty.
 * - Queue:
 *   - Implemented using arrays or linked lists.
 *   - its restricted access nature means elements can only be added at the back and removed from the front of the queue.
 *   - Common operations:
 *     - enqueue(element): Add an element to the end of the queue.
 *     - dequeue(): Remove and return the front element of the queue.
 *     - front(): View the front element without removing it.
 *     - isEmpty(): Check if the queue is empty.
 */

let stack = []; // Using an array to implement a stack

stack.push(1); // Push 1 onto the stack
stack.push(2); // Push 2 onto the stack
console.log(`Stack after pushes: ${stack}`); // Output: Stack after pushes: 1,2

stack.pop(); // Pop the top element (2)
console.log(`Stack after pop: ${stack}`); // Output: Stack after pop: 1

stack.push(3); // Push 3 onto the stack
console.log(`Stack after pushing 3: ${stack}`); // Output: Stack after pushing 3: 1,3

// to find the top element
let topElement = stack[stack.length - 1];
console.log(`Top element of the stack: ${topElement}`); // Output: Top element of the stack: 3

stack[3]; // trying to access middle element (invalid operation for stack)

let queue = []; // Using an array to implement a queue
queue.push(1); // Enqueue 1
queue.push(2); // Enqueue 2
console.log(`Queue after enqueues: ${queue}`); // Output: Queue after enqueues: 1,2

queue.shift(); // Dequeue the front element (1)
console.log(`Queue after dequeue: ${queue}`); // Output: Queue after dequeue: 2

queue.push(3); // Enqueue 3
console.log(`Queue after enqueueing 3: ${queue}`); // Output: Queue after enqueueing 3: 2,3

// to find the front element
let frontElement = queue[0];
console.log(`Front element of the queue: ${frontElement}`); // Output: Front element of the queue: 2

queue[1]; // trying to access middle element (invalid operation for queue)
queue.pop(); // trying to remove from back (invalid operation for queue)
