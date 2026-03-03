/** Design Excel Sum Formula
 * https://leetcode.com/problems/design-excel-sum-formula/
 *
 * Design the basic function of Excel and
 * implement the function of sum formula in Excel.
 *
 * Implement the Excel class:
 * - Excel(int height, char width): Initializes the object with the height and width of the Excel sheet.
 *   The height is represented by an integer and the width is represented by a character from 'A' to 'Z'.
 *   The sheet is an integer matrix mat of size height x width with the row index in the range [1, height] and
 *   the column index in the range ['A', width]. All the values in mat are initialized to 0.
 * - void set(int row, char column, int val): Changes the value at the given cell (row, column) mat[row][column] to be val.
 * - int get(int row, char column): Returns the value at the given cell (row, column) mat[row][column].
 * - int sum(int row, char column, List<String> numbers): Sets the value at the given cell (row, column) mat[row][column] to be the sum of the values represented by numbers and returns the value at mat[row][column].
 *   This sum formula should exist until this cell is overlapped by another set or sum operation.
 *   Numbers is a list of strings that represent the cells or ranges that should be considered in the sum formula.
 *   Each string in numbers can be in one of the following two formats:
 *   - A single cell represented as "ColRow" where Col is a character from 'A' to 'Z' and Row is an integer from 1 to height.
 *    For example, "A1" represents the cell at row 1 and column 'A' mat[1]['A'].
 *  - A range of cells represented as "ColRow1:ColRow2" where ColRow1 and ColRow2 are in the same format as described above.
 *    The range will always be rectangle where ColRow1 represents the top-left cell and ColRow2 represents the bottom-right cell.
 *    For example, "A1:B2" represents the cells mat[1]['A'], mat[1]['B'], mat[2]['A'], and mat[2]['B'] for
 *    1 <= i <= 2 and 'A' <= j <= 'B'.
 *
 * Note: could assume that there will not be any circular sum reference.
 *       For example, if A1 is the sum of A2 and A3, then A2 and A3 will not be the sum of A1.
 *       mat[1]['A'] == sum(1, 'B) AND mat[1]['B'] == sum(1, 'A') is not allowed.
 *
 * Example 1:
 * Input
 * ["Excel", "set", "sum", "set", "get"]
 * [[3, "C"], [1, "A", 2], [3, "C", ["A1", "A1:B2"]], [2, "B", 2], [3, "C"]]
 * Output
 * [null, null, 4, null, 6]
 * Explanation
 * Excel excel = new Excel(3, "C"); // Initialize the Excel sheet with 3 rows and 3 columns: A, B, C.
 * * construct a 3 x 3 matrix mat with all values initialized to 0.
 *     A   B   C
 *   1 [0,  0,  0]
 *   2 [0,  0,  0]
 *   3 [0,  0,  0]
 * excel.set(1, "A", 2);
 * * Update the value at cell (1, 'A') to be 2.
 *     A   B   C
 *   1 [2,  0,  0]
 *   2 [0,  0,  0]
 *   3 [0,  0,  0]
 * excel.sum(3, "C", ["A1", "A1:B2"]);
 * * The value at cell (3, 'C') will be the sum of the values represented by "A1" and "A1:B2".
 * * "A1" represents the value at cell (1, 'A'), which is 2.
 * * "A1:B2" represents the values at cells (1, 'A'), (1, 'B'), (2, 'A'), and (2, 'B').
 *   The sum is 2 + 0 + 0 + 0 = 2.
 *   So the value at cell (3, 'C') is 2 + 2 = 4.
 *     A   B   C
 *  1 [2,  0,  0]
 *  2 [0,  0,  0]
 *  3 [0,  0,  4]
 * excel.set(2, "B", 2);
 * * Update the value at cell (2, 'B') to be 2.
 * * The value at cell (3, 'C') will be updated to be the sum of the values represented by "A1" and "A1:B2".
 * * "A1" represents the value at cell (1, 'A'), which is 2.
 * * * "A1:B2" represents the values at cells (1, 'A'), (1, 'B'), (2, 'A'), and (2, 'B').
 *   The sum is 2 + 0 + 0 + 2 = 4.
 *   So the value at cell (3, 'C') is 2 + 4 = 6.
 *    A   B   C
 * 1 [2,  0,  0]
 * 2 [0,  2,  0]
 * 3 [0,  0,  6]
 * excel.get(3, "C");
 * * * Return the value at cell (3, 'C'), which is 6.
 *
 * Constraints:
 * 1 <= height <= 26
 * 'A' <= width <= 'Z'
 * 1 <= row <= height
 * 'A' <= column <= width
 * -100 <= val <= 100
 * 1 <= numbers.length <= 5
 * numbers[i] has the format "ColRow" or "ColRow1:ColRow2" as described above.
 * At most 100 calls will be made to set, get, and sum.
 *
 * @param {number} height
 * @param {character} width
 */

/** Algorithm: DFS (Depth-First Search) with Memoization
 * - problem: compute the value of a cell that may depend on other cells
 *            through sum formulas, and those cells may also depend on other cells,
 *            creating a dependency graph.
 */

class Excel {
  constructor(height, width) {
    // Initialize the Excel sheet with the given height and width.
    // Construct a matrix mat of size height x width with all values initialized to 0.
    this.height = height;
    // this.width = width;
    this.width = width.charCodeAt(0) - "A".charCodeAt(0) + 1;
    this.mat = Array.from({ length: height }, () =>
      //   Array(width.charCodeAt(0) - "A".charCodeAt(0) + 1).fill(0),
      new Array(this.width).fill(0),
    );
    /**
     * mat = [
     *   [0, 0, 0], // Row 1: A, B, C
     *   [0, 0, 0], // Row 2: A, B, C
     *   [0, 0, 0], // Row 3: A, B, C
     * ]
     */
    // Map to store the sum formulas for each cell.
    // key: "row,column" (e.g., "3,C") --: Map(dependencyCell, count)
    // dependencyCell is the cell that the sum formula depends on (e.g., "1,A", "1,B", "2,A", "2,B")
    // count is the number of times the dependencyCell is included in the sum formula.
    this.formula = new Map();
  }

  // helper function to get the value of a cell (row, column)
  key(row, column) {
    return `${row},${column}`;
  }

  // parse a cell string (e.g., "A1") and return the row and column indices
  parseCell(cell) {
    let colIndex = cell.charCodeAt(0) - "A".charCodeAt(0);
    let rowIndex = parseInt(cell.slice(1), 10) - 1;
    return [rowIndex, colIndex];
  }

  // add
  addDeps(map, token) {
    if (!token.includes(":")) {
      // token is a single cell (e.g., "A1")
      let [rowIndex, colIndex] = this.parseCell(token);
      let k = this.key(rowIndex, colIndex);
      map.set(k, (map.get(k) || 0) + 1);
      return;
    }
    // token is a range of cells (e.g., "A1:B2")
    let [start, end] = token.split(":");
    let [startRow, startCol] = this.parseCell(start);
    let [endRow, endCol] = this.parseCell(end);
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        let k = this.key(i, j);
        map.set(k, (map.get(k) || 0) + 1);
      }
    }
  }

  /** Set the value at the given cell (row, column) mat[row][column] to be val. */
  set(row, column, val) {
    // Update the value at the given cell (row, column) to be val.
    // If there is a sum formula for this cell, we need to update the values of the dependent cells.
    let colIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    let rowIndex = row - 1;
    // overwrite any existing sum formula for this cell
    this.formula.delete(this.key(rowIndex, colIndex));
    // Update the value at the cell (row, column) to be val.
    this.mat[rowIndex][colIndex] = val;
  }

  /** Returns the value at the given cell (row, column) mat[row][column]. */
  get(row, column) {
    // Return the value at the given cell (row, column).
    let colIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    let rowIndex = row - 1;
    let memo = new Map();
    let dfs = (rowRow, colColumn) => {
      let k = this.key(rowRow, colColumn);
      if (memo.has(k)) {
        return memo.get(k);
      }
      if (!this.formula.has(k)) {
        memo.set(k, this.mat[rowRow][colColumn]);
        return this.mat[rowRow][colColumn];
      }
      let deps = this.formula.get(k);
      let sum = 0;
      for (let [dep, count] of deps.entries()) {
        let [depRow, depCol] = dep.split(",").map(Number);
        sum += dfs(depRow, depCol) * count;
      }
      memo.set(k, sum);
      return sum;
    };
    return dfs(rowIndex, colIndex);
  }

  sum(row, column, numbers) {
    // Set the value at the given cell (row, column) to be the sum of the values represented by numbers and return the value at mat[row][column].
    let colIndex = column.charCodeAt(0) - "A".charCodeAt(0);
    let rowIndex = row - 1;
    let cellKey = this.key(rowIndex, colIndex);
    // Create a map to store the dependencies for the sum formula.
    let deps = new Map();
    for (let token of numbers) {
      this.addDeps(deps, token);
    }
    // overwrite any existing sum formula for this cell
    this.formula.set(cellKey, deps);
    // return the computed sum value
    return this.get(row, column);
  }
}
