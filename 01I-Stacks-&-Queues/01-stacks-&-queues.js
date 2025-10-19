/** Stacks and Queues
 *
 * 1. Queue: FIFO (First In First Out)
 *    - Enqueue: Add an element to the end of the queue
 *    - Dequeue: Remove an element from the front of the queue
 *
 * In Queue, elements are added at the back and removed from the front.
 *    OUT <--- (front) ---[1 | 2 | 3 | 4] --- (back) <--- IN
 *   - here 1 is the first element to be added and the first to be removed (dequeued)
 *   - can not directly access or remove elements from the middle or back of the queue i.e., 2, 3, or 4
 *   - if we want to remove 3, we have to dequeue 1 and 2 first
 *
 * 2. Stack: LIFO (Last In First Out)
 *    - Push: Add an element to the top of the stack
 *    - Pop: Remove an element from the top of the stack
 *    - Peek/Top: View the top element without removing it
 *    - isEmpty: Check if the stack is empty
 *
 * In Stack, elements are added and removed from the top.
 *    - IN can happen only from the top and OUT can happen only from the top
 *    - if we push 1, 2, 3, 4 in that order,
 *        - 4 will be at the top and will be the first to be popped out
 *    - to access or remove elements below the top, we have to pop the top elements first
 *    - e.g., to access 2, we have to pop 4 and 3 first
 *
 * Example Use Cases:
 * - Stacks: function call stack, undo/redo operations, expression
 */
