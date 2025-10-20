/** Why Stacks and Queues?
 *
 * Stacks and Queues are fundamental data structures that provide specific ways to organize and manage data.
 * They are essential for various applications due to their unique properties and behaviors.
 *
 * - to organize data logically based on access patterns (LIFO for stacks, FIFO for queues or based on problems needs)
 * - order of operations matters (e.g., function calls, task scheduling)
 * - optimize time and space complexity for specific operations (e.g., O(1) time complexity for push/pop in stacks)
 * - manage resources efficiently (e.g., memory management, undo/redo functionality)
 * - solve specific algorithmic problems (e.g., expression evaluation, graph traversal)
 * - provide abstraction for complex data manipulations (e.g., managing state in applications)
 *
 * Use Cases:
 * - Stacks:
 *   - Function call management (call stack)
 *   - Undo/redo functionality in text editors
 *   - Browser history management
 *   - Expression evaluation (infix, postfix, prefix)
 *   - Syntax parsing (compilers)
 *   - Balancing symbols (parentheses, brackets)
 *   - Recursive algorithms (backtracking)
 *   - Depth-first search (DFS) in graphs and trees
 * - Queues:
 *   - Ticket counter (tickets served in order)
 *   - OS task scheduling (processes scheduled based on arrival time)
 *   - Printers (print jobs processed in order)
 *   - Call center systems (calls answered in order)
 *   - Breadth-first search (BFS) in graphs and trees
 *   - Any queue management system
 *   - Level-order traversal in trees
 *
 * both stacks and queues are implemented using arrays or linked lists in code.
 * Since we have arrays and linked lists available, why do we need stacks and queues?
 * - Stacks and Queues provide a more restricted (top only for stacks, front and back for queues) and controlled way to access and manipulate data.
 * - They enforce specific access patterns (LIFO for stacks, FIFO for queues) that are essential for certain algorithms and applications.
 * - They provide a higher level of abstraction, making it easier to reason about data management in specific scenarios.
 * - They cannot modify data in the middle or provide random access, which helps maintain order and integrity of data based on the required access pattern.
 * - Stack == Array with restricted access (only top)
 * - Queue == Array with restricted access (only front and back)
 * - Arrays do not enforce discipline (general purpose data storage). Stacks and Queues enforce discipline based on specific access patterns.
 *
 * | Feature          | Stack                  | Queue                  | Array                 | Linked List          | HashMap               |
 * |------------------|------------------------|------------------------|-----------------------|----------------------|-----------------------|
 * | Order            | LIFO                   | FIFO                   | Indexed               | Sequential           | Key-based             |
 * | Random Access    | No                     | No                     | Yes                   | No                   | Yes                   |
 * | Access Pattern   | Top only               | Front and Back only    | Random access         | Sequential access    | Key-based access      |
 * | Insert/Delete    | O(1) (push/pop)        | O(1) (enqueue/dequeue) | O(n) (shift/unshift)  | O(1) (head/tail)     | O(1) (average case)   |
 * | Time Complexity  | O(1) for push/pop      | O(1) enqueue/dequeue   | O(1) for access       | O(n) for access      | O(1) for access       |
 * | Use Cases        | Function calls, Undo   | Task scheduling, BFS   | General purpose       | Dynamic data storage | Key-value storage     |
 * | Implementation   | Array/Linked List      | Array/Linked List      | Array                 | Linked List          | Hash Table            |
 *
 * In summary, stacks and queues are essential data structures that provide specific ways to manage and manipulate data based on access patterns.
 * They are widely used in various applications and algorithms due to their unique properties and behaviors.
 */
