/** Decode Ways
 * https://leetcode.com/problems/decode-ways/
 *
 * You have intercepted a secret message encoded as a string of numbers.
 * The message is decoded using the following mapping:
 * - "1" -> 'A'
 * - "2" -> 'B'
 * - ...
 * "25" -> 'Y'
 * - "26" -> 'Z'
 *
 * However,  while decoding the message, you realize that there are different ways
 * you can decode the message because some codes are contained in other codes ("2",
 *  "5" vs "25").
 *
 * For example, "11106" can be decoded into:
 * - "AAJF" with the grouping (1 1 10 6)
 * - "KJF" with the grouping (11 10 6)
 * - The grouping (1 11 06) is invalid because "06" is not a valid code (only "6" is valid).
 *
 * Note: There may be strings that are inpossible to decode (e.g., "1001" cannot be decoded
 * because "00" is not a valid code).
 *
 * Given a string s containing only digits, return the number of ways to decode it.
 * If the entire string cannot be decoded in any valid way, return 0.
 * The test cases are generated so that the answer fits in a 32-bit integer.
 *
 * Example 1:
 * Input: s = "12"
 * Output: 2
 * Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
 *
 * Example 2:
 * Input: s = "226"
 * Output: 3
 * Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 *
 * Example 3:
 * Input: s = "06"
 * Output: 0
 * Explanation: "06" cannot be mapped to "F" because of the leading zero
 *              ("6" is a valid code, but "06" is not). In this case, the string
 *              is not a valid encoding, so return 0.
 *
 * Constraints:
 * 1 <= s.length <= 100
 * s contains only digits and may contain leading zero(s).
 *
 * @param {string} s
 * @return {number}
 */

function numDecodings(s) {
  // dp or memoization can be added to optimize the recursive solution
  let dp = {};

  // recursive function to count the number of ways to decode the remaining string
  let fn = (remS) => {
    let n = remS.length;
    // base cases
    if (remS === "") return 1; // successfully decoded the entire string
    // if (remS[0] === "0") return 0; // cannot decode a string starting with '0'
    if (remS === "0") return 0; // cannot decode '0'

    // check if result is already computed
    if (remS in dp) return dp[remS];

    // count the number of ways to decode
    let count = 0;
    // single digit decode
    let oneDigit = remS.substring(n - 1);
    // double digit decode
    let twoDigit = remS.substring(n - 2);

    // single digit decode is valid
    if (oneDigit != 0) {
      count += fn(remS.substring(0, n - 1));
    }
    // double digit decode is valid
    if (twoDigit >= "10" && twoDigit <= "26") {
      count += fn(remS.substring(0, n - 2));
    }

    dp[remS] = count; // store the computed result
    return count;
    // fn(remS) = fn(remS.substring(0, n - 1) + fn(remS.substring(0, n-2))); // single digit decode + double digit decode
  };
  return fn(s);
}
