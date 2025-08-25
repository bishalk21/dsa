/**
 * Introduction to Linked Lists
 * A linked list is a linear data structure where elements are stored in nodes.
 * Each node contains a value and a reference (or pointer) to the next node in the sequence.
 * Linked lists are dynamic in size and can easily grow or shrink as needed.
 * They are commonly used for implementing data structures like stacks, queues, and graphs.
 *
 * There are two types of Linked Lists:
 * 1. Singly Linked List: Each node points to the next node and the last node points to null.
 * 2. Doubly Linked List: Each node points to both the next and previous nodes.
 *
 * Single Node: A node in a linked list contains a value and a reference to the next node.
 * Head: The first node in a linked list is called the head.
 * Tail: The last node in a linked list is called the tail.
 *
 * Structure of a Node:
 * A typical node in a linked list contains the following components:
 * 1. Data: The value stored in the node.
 * 2. Next: A pointer/reference to the next node in the sequence.
 * 3. Prev: A pointer/reference to the previous node in the sequence (only for doubly linked lists).
 *
 * [head] -> [data|next] <-> [data|next] <-> [data|next] -> null
 *
 * Difference between Linked List and Arrays:
 * |                       | Linked List                    | Array                            |
 * |-----------------------|--------------------------------|----------------------------------|
 * | 1. Size               | Dynamic size                   | Fixed size                       |
 * | 2. Memory             | Non-contiguous memory          | Contiguous memory                |
 * | 3. Insertion/Deletion | Better for insertions/deletions| Better for random access         |
 * | 4. Space Complexity   | O(n)                           | O(1)                             |
 * | 5. Fetching Element   | Hard (sequential access)       | Easy (direct access by index)    |
 * | 6. Cache Performance  | Poorer cache performance       | Better cache performance         |
 * | 7. Type               | Linear                         | Linear                           |
 * | 8. Memory Allocation  | Dynamic (node by node)         | Static (contiguous block)        |
 * | 9. Extra Memory       | Extra memory for pointers      | No extra memory needed           |
 * | 10. Node Structure    | Node = value + next pointer    | Array[index] = value             |
 *
 * Array vs Linked List — Comparison Table:
1. Type	
Arrays: Linear data structure where elements are arranged in a sequence using indexes.	
Linked List: Linear data structure where each element (node) points to the next, forming a chain.

2. Memory Layout	
Arrays: Elements are stored in a contiguous (adjacent) block of memory.	
Linked List: Each node is stored separately and connected via pointers, allowing scattered memory locations.

3. Size	
Arrays: Size must be known or defined initially. Resizing is expensive if needed later.	
Linked List: Size is dynamic. Nodes can be added or removed without knowing the size in advance.

4. Data Stored	
Arrays: Only values are stored (e.g., integers, strings, etc.)	
Linked List: Each node stores a value along with one or more pointers (to next and/or previous nodes).

5. Access Time (Indexing)	
Arrays: Direct access using index (e.g., arr[3]) is fast with time complexity O(1).	
Linked List: Sequential access only. To get a value, you must start at the head and traverse node by node. Time complexity O(n).

6. Insertion/Deletion	
Arrays: Inserting or deleting in the middle requires shifting elements. Can be time-consuming.	
Linked List: Insertion and deletion are faster, especially at the beginning or end, as it only involves pointer changes.

7. Memory Efficiency	
Arrays: Efficient memory usage as no extra space is needed for pointers.	
Linked List: Extra memory is used to store pointers (next/prev), making it less memory efficient.

 * 
 * Use cases comparison:
 * 1. When to use Linked Lists:
 *    - When you need dynamic memory allocation.
 *    - When you expect frequent insertions and deletions (O(1) time complexity - insert/delete at head/tail frequently).
 *    - When you want to avoid resizing overhead or unknown size upfront.
 *    - When you do lots of traversal/manipulation of the data.
 *    - When you want to implement data structures like stacks and queues.
 *
 * 2. When to use Arrays:
 *    - When you need fast random access (O(1) time complexity - access elements by index fast).
 *    - When the size of the data is known and fixed (O(1) time complexity - memory-efficient storage for static data size).
 *    - When you want better cache performance.
 */
