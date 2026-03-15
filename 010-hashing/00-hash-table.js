/** Hash Table (Set)
 * Hash tables are a data structure that store key-value pairs.
 * They use a hash function to compute an index into an array of buckets or slots,
 * from which the desired value can be found.
 * In JavaScript, we can use the built-in Set object to implement a hash table for storing unique values.
 *
 * A Set is a collection of values where each value must be unique.
 * It provides methods to add, delete, and check for the presence of values.
 * The Set object lets you store unique values of any type,
 * whether primitive values or object references.
 *
 * Example usage of Set:
 * const mySet = new Set();
 * mySet.add(1);
 * mySet.add(5);
 * mySet.add(5); // This will not be added as 5 is already in the set
 *
 * console.log(mySet.has(1)); // true
 * console.log(mySet.has(3)); // false
 * console.log(mySet.size); // 2
 *
 * | operations    | time complexity | space complexity  |
 * |---------------|-----------------| ------------------|
 * | insert/put    | O(1)            | O(n)              |
 * | delete/remove | O(1)            | O(n)              |
 * | search/get    | O(1)            | O(n)              |
 *
 * In a hash table, the average time complexity for insert, delete, and search operations is O(1).
 *
 * In the context of linked list cycle detection, we can use a Set to store visited nodes.
 * If we encounter a node that is already in the Set, it means we have a cycle.
 *
 * Time Complexity: O(n) - where n is the number of nodes in the linked list.
 * Space Complexity: O(n) - in the worst case, we may store all nodes in the Set if there is no cycle.
 */
