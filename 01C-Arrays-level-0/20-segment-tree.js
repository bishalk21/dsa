/** Longest Balanced Subarray II
 * https://www.leetcode.com/problems/longest-balanced-subarray-ii/
 *
 * You are given a 0-indexed binary array nums.
 *
 * A subarray is called balanced if the number of distinct even numbers
 * in the subarray is equal to the number of distinct odd numbers in the subarray.
 *
 * Return the length of the longest balanced subarray in nums.
 *
 * Example 1:
 * Input: nums = [2,5,4,3]
 * Output: 4
 * Explanation: The longest balanced subarray is the entire array [2,5,4,3].
 *              It has 2 distinct even numbers (2 and 4) and
 *              2 distinct odd numbers (5 and 3).
 * Example 2:
 * Input: nums = [3,2,2,5,4]
 * Output: 5
 * Explanation: The longest balanced subarray is the entire array [3,2,2,5,4].
 *              It has 2 distinct even numbers (2 and 4) and
 *              2 distinct odd numbers (3 and 5).
 * Example 3:
 * Input: nums = [1,2,3,2]
 * Output: 3
 * Explanation: The longest balanced subarray is [2,3,2].
 *              It has 1 distinct even number (2) and
 *              1 distinct odd number (3).
 *
 * Constraints:
 * - 1 <= nums.length <= 1500
 * - 1 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number}
 */

/** The problem with O(n^2) solution
 * - the O(n^2) solution is not efficient enough for large input sizes (up to 1500 elements).
 * - it checks every possible subarray, which leads to a time complexity of O(n^2).
 *
 * For array [2, 5, 4, 3]:
 * Check: [2], [2,5], [2,5,4], [2,5,4,3]
 * Check: [5], [5,4], [5,4,3]
 * Check: [4], [4,3]
 * Check: [3]
 * Total: n² subarrays to check
 * With n = 10000, that's 100 million subarrays to check, which is not feasible.
 *
 * Instead of checking every possible subarray to track distinct even and odd numbers,
 * (count distinct even and odd numbers for each subarray)
 * transform the problem into:
 * - treat each even number as +1 and each odd number as -1, and
 * - a balanced subarray will have a cumulative sum of 0.
 *
 * Array:  [2,  5,  4,  3]
 *          ↓   ↓   ↓   ↓
 * Values: +1  -1  +1  -1
 *
 * Subarray [2,5,4,3]:
 * Sum = +1 + (-1) + (+1) + (-1) = 0 ✓ Balanced!
 *
 * What if the number appears again (duplicate),
 * remove its old contribution to the sum and add its new contribution.
 * Array: [2, 5, 2, 3]
 *         ↓  ↓  ↓  ↓
 * Step 1: +1         (2 appears, add +1)
 * Step 2: +1 -1      (5 appears, add -1)
 * Step 3: +1 -1 ?    (2 appears AGAIN!)
 *
 * What to do with the second 2?
 * ❌ Can't just add +1 again (we only count DISTINCT)
 * ✅ Must remove the FIRST +1, then add new +1
 *
 * Prefix Sum at pos i = sum of all elements from start index to index i
 * Array:  [2,  5,  2,  3]
 * Values: +1, -1, +1, -1
 * Prefix: +1,  0, +1,  0
 *          ↑   ↑   ↑   ↑
 * pos ->   0   1   2   3
 * if prefix[1] = 0, it means the subarray from index 0 to index 1 is balanced (2,5)
 * if prefix[3] = 0, it means the subarray from index 0 to index 3 is balanced (2,5,2,3)
 *
 * To handle duplicates, we can maintain a map to track the last occurrence of each number and its contribution to the sum.
 *
 * When a duplicate appears, we need to update multiple positions at once:
 * When 2 appears again:
 * - Find where 2 appeared before (say position 0)
 * - Update ALL prefixes from position 0 onwards
 * - This is called a "range update"
 *
 * Before: [+1, 0, +1, 0]
 * When duplicate 2 appears at position 2:
 * - need to subtract the old contribution of 2 (which is +1)
 *   from all prefixes starting from position 0 to position 2
 * - add new contribution of 2 (which is +1) to all prefixes starting from position 0 to position 2
 * After: [0, -1, +1, 0]
 * Doing this naively would require O(n) time for each duplicate, leading to O(n^2) in the worst case.
 * This is where a segment tree comes in handy, as it allows us to perform efficient range updates and range queries on the prefix sums.
 */

/** Segment Tree
 * - a binary tree data structure that allows for efficient range queries and
 *   updates on an array.
 *   - Range update in O(log n): Update many positions at once (e.g., when a duplicate appears)
 *   - Range query in O(log n): Find the min/max/sum of a range of elements (e.g., check if prefix sum is 0 for a balanced subarray)
 *   - Point query in O(log n): Update or query a single position (e.g., when processing a new number)
 * - It is particularly useful for problems that involve querying the sum,
 *   minimum, maximum, or other associative operations over a range of elements in an array.
 *
 * Array indices: [0, 1, 2, 3]
 *                      ↓
 *                   /     \
 *                 /         \
 *              [0, 1]       [2, 3]
 *             /    \         /    \
 *           [0]    [1]     [2]    [3]
 * - Instead of updating 1000 positions one-by-one
 *   tree updates just ~10 nodes (log2(1000) ≈ 10)
 *
 * The segment tree is built from the input array,
 * where each leaf node represents a single element of the array,
 * and each internal node represents a segment (or range) of the array.
 * The value stored in each internal node is the result of applying the associative operation
 * (e.g., sum, min, max) to the values of its child nodes.
 *
 * How Segment Tree Works:
 * Think of it like a company hierarchy:
 *       CEO (tracks whole array)
 *     /                        \
 *  Manager A                  Manager B
 *  (left half)               (right half)
 *   /      \                  /        \
 * Team1  Team2            Team3      Team4
 *
 * - Instead of telling each employee individually
 * - you tell the manager → they propagate to their team
 * - Much faster!
 *
 * To make updates even faster, we use lazy propagation:
 * When updating a range:
 * - mark the node as "needs update" (lazy)
 * - don't immediately update all child nodes
 * - only push the update down when necessary (e.g., when querying that range)
 *
 * For each position r from 0 to n-1:
 * 1. get current number and convert:
 *    - if it's even, contribution = +1
 *    - if it's odd, contribution = -1
 *
 * 2. if the number has appeared before (duplicate) at position prev:
 *    - get old contribution of the number (oldContribution)
 *    - calculate new contribution of the number (newContribution)
 *    - calculate the difference (delta) = newContribution - oldContribution
 *    - perform a range update on the segment tree to add delta to all positions from prev to r
 *    updateRange(0 to prev, -contribution) to remove old contribution
 *
 * 3. add current contribution:
 *    updateRange(0 to r, +contribution) to add new contribution
 *
 * 4. find leftmost position l where prefix sum = 0:
 *    l = findLeftmost(0 to r, target = 0)
 *
 * 5. if found, update maxLength = max(maxLength, r - l + 1)
 *
 *  [2, 5, 4, 3]
 * r=0, num=2 (even, val=+1):
 *   No previous occurrence
 *   Update [0,0] with +1
 *   Prefix: [+1]
 *   Find leftmost 0: not found
 *   maxLen = 0
 *
 * r=1, num=5 (odd, val=-1):
 *   No previous occurrence
 *   Update [0,1] with -1
 *   Prefix: [+1-1, -1] = [0, -1]
 *   Find leftmost 0: position 0
 *   maxLen = max(0, 1-0+1) = 2  ✓ [2,5]
 *
 * r=2, num=4 (even, val=+1):
 *   No previous occurrence
 *   Update [0,2] with +1
 *   Prefix: [0+1, -1+1, +1] = [+1, 0, +1]
 *   Find leftmost 0: position 1
 *   maxLen = max(2, 2-1+1) = 2
 *
 * r=3, num=3 (odd, val=-1):
 *   No previous occurrence
 *   Update [0,3] with -1
 *   Prefix: [+1-1, 0-1, +1-1, -1] = [0, -1, 0, -1]
 *   Find leftmost 0: position 0
 *   maxLen = max(2, 3-0+1) = 4  ✓ [2,5,4,3]
 *
 * The segment tree tracks both minimum and maximum in each range:
 * If min > 0:  All values in range are positive → no zero exists
 * If max < 0:  All values in range are negative → no zero exists
 */

class SegmentTree {
  // 1. storage
  minTree = []; // minimum value in each segment
  maxTree = []; // maximum value in each segment
  lazy = []; // lazy propagation array for pending updates
  // 2. lazy propagation helper function
  push() {
    // apply pending updates to node
    // propagate updates to children if necessary
  }
  // 3. range update function
  updateRange(l, r, val) {
    // add val to all positions in range [l, r]
    // use lazy propagation to optimize updates
  }
  // 4. find leftmost zero
  findLeftmost(l, r) {
    // find first position where value is 0 in range [l, r]
    // use min/max to prune search space
  }
}

/** Brute force O(n^2) vs Segment Tree O(n log n)
 *
 * Brute force:
 * - Idea: Check every possible subarray and count distinct even and odd numbers.
 * - Data: Use a set to track distinct even and odd numbers for each subarray.
 * - Time Complexity: O(n^2) for checking all subarrays, and O(n) for counting distinct numbers in each subarray → O(n^3) in the worst case.
 * - Space Complexity: O(n) for the sets used to track distinct numbers.
 * - Pros: Simple and straightforward to implement.
 * - Cons: Not efficient for large input sizes (up to 1500 elements).
 * - Best for: n <= 5000 (depending on time limits).
 *
 * Segment Tree:
 * - Idea: Transform the problem into prefix sums and use a segment tree to efficiently handle range updates and queries.
 * - Transform: Even numbers contribute +1, odd numbers contribute -1. A balanced subarray has a prefix sum of 0.
 * - Data: Use a segment tree to track the prefix sums and support efficient range updates when duplicates are encountered.
 * - Time Complexity: O(n log n) for processing all elements and performing updates/queries on the segment tree.
 * - Space Complexity: O(n) for the segment tree and auxiliary data structures.
 * - Pros: Efficient for large input sizes, handles duplicates gracefully with range updates.
 * - Cons: More complex to implement compared to the brute force approach.
 * - Best for: n > 5000 (depending on time limits).
 */
