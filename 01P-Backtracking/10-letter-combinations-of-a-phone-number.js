/** Letter Combinations of a Phone Number [medium]
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 *
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 *
 *            1        2abc     3def
 *            4ghi     5jkl     6mno
 *            7pqrs    8tuv     9wxyz
 *            *+       0_       ^#
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Definition for mapping digits to letters
 * @param {string} digits
 * @return {string[]}
 */

/**
 * Backtracking
 * Time O(3^m * 4^n) | Space O(m + n)
 * m: number of digits that map to 3 letters
 * n: number of digits that map to 4 letters
 *
 * Time complexity explanation: O(N * 4^N)
 * where N is the length of the input digits string.
 * This is because in the worst case, each digit can map to 4 letters (like digit '7' or '9').
 * Thus, for each digit, we have up to 4 choices, leading to 4^N combinations.
 * Additionally, we need to construct each combination which takes O(N) time.
 *
 * Space complexity explanation: O(N)
 * The space complexity is determined by the recursion stack and the path array used to build combinations.
 * The maximum depth of the recursion stack is N (the length of the input digits string),
 * and the path array also holds up to N characters.
 * Thus, the overall space complexity is O(N).
 */

function letterCombinations(digits) {
  let digitToChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let ans = [];
  let backtrack = (path, index) => {
    if (path.length === digits.length) {
      ans.push(path.join(""));
      return;
    }
    let choices = digitToChar[digits[index]];
    for (let i = 0; i < choices.length; i++) {
      path.push(choices[i]);
      // if (path.length === digits.length) {
      backtrack(path, index + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return ans;
}
