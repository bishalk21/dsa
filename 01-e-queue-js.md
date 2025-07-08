# Queue 
- `FIFO (First-In-First-Out)`: The first element added to the queue is the first to be removed.
- Operations: Enqueue (adding to the back) and dequeue (removing from the front).
- Usage: Reflects real-world scenarios like task scheduling, print spooling, and breadth-first search.

```js
// enqueue
// dequeue
// front
// empty
// size
// clear

class Queue {
    constructor () {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
       return this.items.shift();
    }

    front() {
        if (this.isEmpty()){
            return "Queue is empty"
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        return this.items.length = 0;
    }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log("Front", queue.front());
console.log("Size", queue.size());

queue.dequeue()
console.log("Front", queue.front());
console.log("Size", queue.size());
    
```

📌 Task Scheduling
Queues are used to manage tasks in a first-come-first-served manner.

📌 Print Spooling
Print jobs are queued and processed in the order they are received.

📌 Breadth-First Search
Queues aid in exploring layers of a graph level by level.

📌 Buffering
Queues help manage data transfer between processes with varying speeds.

📌 Call Center Systems
Queues manage incoming calls for efficient distribution to agents.

