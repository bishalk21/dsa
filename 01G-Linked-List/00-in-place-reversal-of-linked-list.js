/** In-place Reversal of a Linked List
 * - this technique is used to reverse the links between the nodes of a linked list without using any additional data structures.
 * - it involves iterating through the linked list and reversing the direction of the links between the nodes.
 * - This technique is often used to solve problems that require reversing a linked list or finding the middle element of a linked list.
 *
 * Data Structures involved: Linked Lists
 *
 * The basic idea is to use three pointers: previous, current, and next. The previous pointer starts at null, the current pointer starts at the head of the linked list, and the next pointer is used to temporarily store the next node in the linked list.
 * The algorithm iterates through the linked list, reversing the links between the nodes until it reaches the end of the linked list. At the end of the iteration, the previous pointer will be pointing to the new head of the reversed linked list.
 *
 * Example problems that can be solved using the in-place reversal of a linked list technique include:
 * - Reversing a linked list.
 * - Finding the middle element of a linked list.
 * - Checking if a linked list is a palindrome.
 */
