/** Trim Trailing Vowels
 * https://leetcode.com/contest/weekly-contest-491/problems/trim-trailing-vowels/description/
 * https://leetcode.com/problems/trim-trailing-vowels/description/
 *
 * You are given a string s consisting of lowercase English letters.
 * Return the string s after removing all the trailing vowels from it.
 * (trailing vowels are the vowels that appear at the end of the string
 * after removing all the non-vowel characters from the end).
 * Vowels are the letters 'a', 'e', 'i', 'o', and 'u'.
 *
 * Example 1:
 * Input: s = "idea"
 * Output: "id"
 * Explanation: The vowels 'e' and 'a' are removed from the end of the string.
 *
 * Example 2:
 * Input: s = "day"
 * Output: "day"
 * Explanation: There are no trailing vowels in the string.
 *
 * Example 3:
 * Input: s = "aeiou"
 * Output: ""
 * Explanation: All characters in the string are vowels, so the resulting string is empty.
 *
 * Constraints:
 * * 1 <= s.length <= 100
 * * s consists of lowercase English letters.
 */

/** Algorithm: Two Pointers
 * - Steps:
 *   1. Initialize a pointer `lastNonVowel` to the last index of the string.
 *   2. Define a set of vowels for quick lookup.
 *   3. Iterate from the end of the string towards the beginning:
 *      - If the current character is a vowel, move the `lastNonVowel` pointer one step left.
 *      - If the current character is not a vowel, break the loop as we have found the last non-vowel character.
 *   4. Return the substring of `s` from the start to the index of `lastNonVowel` (inclusive).
 *
 * time complexity: O(n), where n is the length of the string. We may need to check each character once in the worst case.
 * space complexity: O(1), as we are using a constant amount of extra space for the set of vowels and pointers.
 *
 * @param {string} s
 * @return {string}
 */
function trimTrailingVowels(s) {
  let lastNonVowel = s.length - 1;
  // Define a set of vowels for quick lookup
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  // Iterate from the end of the string to find the last non-vowel character
  while (lastNonVowel >= 0 && vowels.has(s[lastNonVowel])) {
    lastNonVowel--;
  }
  // Return the substring from the start to the last non-vowel character
  return s.substring(0, lastNonVowel + 1);
}

```c++
class Solution {
public:
    string trimTrailingVowels(string s) {
        int lastNonVowel = s.length() - 1;
        // Define a set of vowels for quick lookup
        unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
        // Iterate from the end of the string to find the last non-vowel character
        while (lastNonVowel >= 0 && vowels.count(s[lastNonVowel])) {
            lastNonVowel--;
        } 
        // Return the substring from the start to the last non-vowel character
        return s.substr(0, lastNonVowel + 1);
    }
};
```;
