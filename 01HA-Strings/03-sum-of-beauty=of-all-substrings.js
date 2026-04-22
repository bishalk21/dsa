/** Sum of Beauty of All Substrings
 * https://leetcode.com/problems/sum-of-beauty-of-all-substrings/
 *
 * The beauty of a string is defined as the difference in frequencies
 * between the most frequent and least frequent characters.
 * For example, the beauty of "abaacc" is 3 - 1 = 2.
 * Given a string s, return the sum of beauty of all of its substrings.
 *
 * Example 1:
 * Input: s = "aabcb"
 * Output: 5
 * Explanation: The substrings with non-zero beauty are:
 * - "aab" with beauty 1 (most frequent: 'a' appears 2 times, least frequent: 'b' appears 1 time)
 * - "aabc" with beauty 1 (most frequent: 'a' appears 2 times, least frequent: 'b' and 'c' appear 1 time)
 * - "aabcb" with beauty 2 (most frequent: 'a' appears 2 times, least frequent: 'c' appears 1 time)
 * - "abcb" with beauty 1 (most frequent: 'b' appears 2 times, least frequent: 'a' and 'c' appear 1 time)
 * - "bcb" with beauty 1 (most frequent: 'b' appears 2 times, least frequent: 'c' appears 1 time)
 *
 * Example 2:
 * Input: s = "abc"
 * Output: 0
 * Explanation: No substring of "abc" has non-zero beauty.
 *
 * Constraints:
 * - 1 <= s.length <= 500
 * - s consists of only lowercase English letters.
 *
 * Algorithm 1: Brute Force
 * 1. Generate all possible substrings of the input string s.
 * 2. For each substring, calculate the frequency of each character.
 * 3. Determine the most frequent and least frequent characters in the substring.
 * 4. Calculate the beauty of the substring as the difference between the frequency of the most frequent character and the least frequent character.
 * 5. Sum the beauty values of all substrings and return the result.
 * Time Complexity: O(n^3), where n is the length of the string (O(n^2) for generating substrings and O(n) for calculating frequencies).
 * Space Complexity: O(1), as we are using a fixed-size array of size 26 to count character frequencies.
 *
 * Algorithm 2: Optimized Brute Force
 * 1. Generate all possible substrings of the input string s.
 * 2. For each starting index of the substring,
 *    maintain a frequency array of size 26 to count the occurrences of each character as you expand the end index.
 * 3. As you expand the end index,
 *    update the frequency array and calculate the beauty of the current substring in O(1) time by keeping track of the maximum and minimum frequencies.
 * 4. Sum the beauty values of all substrings and return the result.
 * Time Complexity: O(n^2), where n is the length of the string (O(n^2) for generating substrings and O(1) for calculating beauty).
 * Space Complexity: O(1), as we are using a fixed-size array of size 26 to count character frequencies.
 * Note: The optimized brute force approach significantly reduces the time complexity from O(n^3) to O(n^2) by avoiding the need to recalculate frequencies for each substring from scratch.
 * This is achieved by maintaining a running count of character frequencies as we expand the end index of the substring, allowing us to calculate the beauty in constant time for each new substring.
 * Initial:
   beautySum = 0

Outer Loop i = 0:
   freq = [0...0] (size 26)

   j = 0 → substring = "a"
      freq['a'] = 1
      max = 1, min = 1
      beauty = max - min = 0
      beautySum = 0

   j = 1 → substring = "aa"
      freq['a'] = 2
      max = 2, min = 2
      beauty = 0
      beautySum = 0

   j = 2 → substring = "aab"
      freq['a'] = 2, freq['b'] = 1
      max = 2, min = 1
      beauty = 1
      beautySum = 1

Outer Loop i = 1:
   freq = [0...0]

   j = 1 → substring = "a"
      freq['a'] = 1
      max = 1, min = 1
      beauty = 0
      beautySum = 1

   j = 2 → substring = "ab"
      freq['a'] = 1, freq['b'] = 1
      max = 1, min = 1
      beauty = 0
      beautySum = 1

Outer Loop i = 2:
   freq = [0...0]

   j = 2 → substring = "b"
      freq['b'] = 1
      max = 1, min = 1
      beauty = 0
      beautySum = 1

Final:
   beautySum = 1
 */

function beautySum(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let freq = new Array(26).fill(0);
    for (let j = i; j < s.length; j++) {
      let index = s.charCodeAt(j) - "a".charCodeAt(0);
      freq[index]++;
      let maxFreq = 0;
      let minFreq = Infinity;
      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          maxFreq = Math.max(maxFreq, freq[k]);
          minFreq = Math.min(minFreq, freq[k]);
        }
      }
      sum += maxFreq - minFreq;
    }
  }
  return sum;
}
