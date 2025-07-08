# Stack 

- Linear Data Structure where data elements are arranged sequentially in an array.
- adding item on the top, remove item from the top
- Last in First Out (LIFO)
- `Usage`: Suitable for problems like expression evaluation, depth-first search, and reversible data manipulation.

```js
// Stack
class Stack {
  constructor () {
    this.storage = [];
  };
  // Add Element
  addElement(element) {
    this.storage.push(element);
  };
  // Remove Element
  removeElement() {
    // Check If Stack Is Not Empty
    if (!this.isEmpty()) {
      // Remove Last Element
      this.storage.pop();
    }
    else {
      console.log('Stack is empty');
    }
  };
  // View Last Element At Top Of The Stack or peek
  viewLastElement() {
    // Check If Stack Is Not Empty
    if (!this.isEmpty()) {
      return this.storage[this.storage.length - 1];
    }
    else {
      console.log('Stack is empty');
    }
  };
  // Is Empty
  isEmpty() {
    // Check If Array Is Empty
    if (this.storage.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };
  // View Stack
  viewStack() {
    return this.storage;
  };
};

// peek()
// size()
// clear()

const stack = new Stack();
stack.addElement(1);

```

📌 Expression Evaluation
Stacks are used to evaluate expressions, often seen in programming languages.

📌 Function Call Tracking
Stacks record the order of function calls and their parameters.

📌 Reversible Data Manipulation
Stacks enable data to be reversed while preserving its original order.

📌 Undo/Redo Operations
Stacks are used to implement undo and redo functionality in software.

📌 Depth-First Search
Stacks facilitate exploration of graph branches in a depth-first manner.