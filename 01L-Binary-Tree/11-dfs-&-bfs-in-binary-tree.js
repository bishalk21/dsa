/** DFS (Depth-First Search) in Binary Tree: first explore depth-wise --------------------------------
 * - explores a tree by going as deep as possible (along a branch) down one path before backtracking
 * - can be implemented using recursion or an explicit stack
 *
 *       A
 *      / \
 *     B   C
 *    / \   \
 *   D   E   F
 *
 * DFS Traversal Orders:
 * - Pre-order: A -> B -> D -> E -> C -> F
 * - In-order: D -> B -> E -> A -> C -> F
 * - Post-order: D -> E -> B -> F -> C -> A
 *
 * There are three common ways to perform DFS traversal:
 * - Pre-order (root -> left -> right)
 * - In-order (left -> root -> right)
 * - Post-order (left -> right -> root)
 *
 * Why DFS use stack?
 * - DFS can be implemented using recursion, which utilizes the call stack to keep track of nodes.
 * - Alternatively, an explicit stack data structure can be used to simulate the call stack,
 *   allowing for iterative implementations of DFS.
 */

/** BFS (Breadth-First Search) in Binary Tree: level-wise exploration -----------------------------------------
 * - explores a tree level by level,
 *   visiting all nodes at the present depth before moving on to nodes at the next depth level
 * - typically implemented using a queue
 *
 *       A
 *      / \
 *     B   C
 *    / \   \
 *   D   E   F
 *
 * BFS Traversal Order:
 * - Level-order: A -> B -> C -> D -> E -> F
 * - Zigzag level-order: A -> C -> B -> D -> E -> F
 *
 * There are two common ways to perform BFS traversal:
 * - Level-order traversal
 * - Zigzag level-order traversal
 */
