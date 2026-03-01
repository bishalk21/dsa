/** Minimum Bitwise OR from Grid
 * https://leetcode.com/problems/minimum-bitwise-or-from-grid/
 * https://leetcode.com/contest/weekly-contest-491/problems/minimum-bitwise-or-from-grid/description/
 *
 * You are given a 0-indexed m x n binary matrix grid (2D integer array).
 * You must select exactly one integer from each row of the grid.
 * Return an integer denoting the minimum possible bitwise OR of the selected integers from each row.
 *
 * Example 1:
 * Input: grid = [[1,5],[2,4]]
 * Output: 3
 * Explanation: The possible selections are:
 * - From the first row, select 1 and from the second row, select 2. The bitwise OR of 1 and 2 is 3.
 * - From the first row, select 1 and from the second row, select 4. The bitwise OR of 1 and 4 is 5.
 * - From the first row, select 5 and from the second row, select 2. The bitwise OR of 5 and 2 is 7.
 * - From the first row, select 5 and from the second row, select 4. The bitwise OR of 5 and 4 is 5.
 * The minimum possible bitwise OR of the selected integers from each row is 3.
 *
 * Example 2:
 * Input: grid = [[3,4],[6,4]]
 * Output: 5
 * Explanation: The possible selections are:
 * - Choose 5 from the first row and 4 from the second row.
 * - The bitwise OR of 5 | 4 = 5​​​​​​​, which is the minimum possible.
 *
 * Example 3:
 * Input: grid = [[7,9,8]]
 * Output: 7
 * Explanation: The only possible selection is to choose 7 from the first row.
 * The bitwise OR of 7 is 7, which is the minimum possible.
 *
 * Constraints:
 * 1 <= m == grid.length <=  10^5
 * 1 <= n == grid[i].length <= 10
 * m * n <= 10^5
 * 1 <= grid[i][j] <= 10^5
 *
 * @param {number[][]} grid
 * @return {number}
 */

/** Algorithm: Bit Manipulation and Greedy
 * - Steps:
 *   1. Define a constant `ALL` that represents all bits set to 1 for numbers up to 10^5 (which requires 17 bits).
 *   2. Create a helper function `canMake(mask)` that checks if it's possible to select one number from each row of the grid such that none of the selected numbers have any of the forbidden bits (bits that are not in the mask).
 *      - For each row, check if there is at least one number that does not have any of the forbidden bits. If any row cannot satisfy this condition, return false.
 *   3. Initialize a variable `mask` to `ALL`, which means initially we allow all bits.
 *   4. Iterate through the bits from the highest (16) to the lowest (0):
 *      - For each bit, create a `tryMask` by turning off the current bit in `mask`.
 *      - Use the `canMake(tryMask)` function to check if we can still select numbers from each row without the current bit. If we can, update `mask` to `tryMask` to keep that bit off.
 *   5. After iterating through all bits, return the final `mask`, which will be the minimum possible bitwise OR of the selected integers from each row.
 *
 * time complexity: O(m * n * log(maxValue)), where m is the number of rows, n is the number of columns, and maxValue is the maximum integer in the grid (up to 10^5, which requires 17 bits).
 * space complexity: O(1), as we are using a constant amount of extra space for the `mask` and `ALL` variables.
 */
function minimumBitwiseOR(grid) {
  // numbers <= 1e5, so only 17 bits are needed (0..16)
  const ALL = (1 << 17) - 1;

  // Can we pick one number from each row that doesn't contain forbidden bits?
  function canMake(mask) {
    const forbidden = ALL ^ mask; // bits that must be 0 in chosen numbers

    for (const row of grid) {
      let found = false;

      for (const x of row) {
        if ((x & forbidden) === 0) {
          // x has no forbidden bits
          found = true;
          break;
        }
      }

      if (!found) return false; // this row can't satisfy the restriction
    }

    return true;
  }

  let mask = ALL; // start allowing all bits

  // try to remove bits from high -> low
  for (let bit = 16; bit >= 0; bit--) {
    const tryMask = mask & ~(1 << bit); // try turning this bit OFF
    if (canMake(tryMask)) mask = tryMask; // keep it OFF if possible
  }

  return mask;
}
