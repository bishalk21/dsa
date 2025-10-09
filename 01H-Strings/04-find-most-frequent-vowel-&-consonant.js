/** Find the most frequent vowel and consonant in a string
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
 *
 * You are given a string s consisting of lowercase English letters ('a' to 'z').
 * Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 * Find the consonant (all other letters excluding vowels) with the maximum frequency.
 * Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency,
 * you may choose any one of them.
 * If there are no vowels or no consonants in the string,
 * consider their frequency as 0.
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 *
 * Example 1:
 * Input: s = "successes"
 * Output: 6
 * Explanation:
 * The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
 * The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
 * The output is 2 + 4 = 6.
 *
 * Logic:
 * - use a hash map to store the frequency of each character
 * - search the hash map to find the maximum frequency of vowels and consonants
 *
 * Algorithm:
 * - Create a hash map to store the frequency of each character
 * - Iterate through each character in the string
 * - If the character is already in the hash map, increment its frequency
 * - If the character is not in the hash map, add it with a frequency of 1
 * - Initialize two variables to store the maximum frequency of vowels and consonants
 * - Iterate through the hash map
 * - If the character is a vowel, update the maximum vowel frequency if necessary
 * - If the character is a consonant, update the maximum consonant frequency if necessary
 * - Return the sum of the maximum vowel and consonant frequencies
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(1) as we are using a constant amount of space for the hash map (at most 26 characters)
 * as we are only dealing with lowercase English letters
 */

function maxFreq(s) {
  let strSet = {}; // { } is way to create a hash map in JS

  // Time complexity: O(n)
  for (let i = 0; i < s.length; i++) {
    if (!strSet[s[i]]) {
      strSet[s[i]] = 1;
    } else {
      ++strSet[s[i]];
    }
  }

  let maxVowelFreq = 0;
  let maxConsonantFreq = 0;
  //   let vowels = ["a", "e", "i", "o", "u"];
  // optimized using set
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  // Time complexity: O(n)
  for (let i = 0; i < s.length; i++) {
    // if (vowels.includes(s[i])) {
    if (vowels.has(s[i])) {
      //   maxVowelFreq = Math.max(maxVowelFreq, strSet[s[i]]);
      if (strSet[s[i]] > maxVowelFreq) {
        maxVowelFreq = strSet[s[i]];
      }
    } else {
      //   maxConsonantFreq = Math.max(maxConsonantFreq, strSet[s[i]]);
      if (strSet[s[i]] > maxConsonantFreq) {
        maxConsonantFreq = strSet[s[i]];
      }
    }
  }
  return maxVowelFreq + maxConsonantFreq;
}

// Optimized approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxFreqSol(s) {
  let strSet = {}; // { } is way to create a hash map in JS

  // Time complexity: O(n)
  for (let i = 0; i < s.length; i++) {
    // if (!strSet[s[i]]) {
    //   strSet[s[i]] = 1;
    // } else {
    //   ++strSet[s[i]];
    // }

    // optimized using ternary operator
    strSet[s[i]] = strSet[s[i]] ? strSet[s[i]] + 1 : 1;
  }

  let maxVowelFreq = 0;
  let maxConsonantFreq = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  // Iterate through the keys of the hash map instead of the string
  // Object.keys() method returns an array of a given object's own enumerable property names
  let mapKeys = Object.keys(strSet);
  // Time complexity: O(1), as we are iterating through at most 26 characters
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.has(mapKeys[i])) {
      //   if (strSet[mapKeys[i]] > maxVowelFreq) {
      //     maxVowelFreq = strSet[mapKeys[i]];
      //   }

      // optimized using Math.max()
      maxVowelFreq = Math.max(maxVowelFreq, strSet[mapKeys[i]]);
    } else {
      //   if (strSet[mapKeys[i]] > maxConsonantFreq) {
      //     maxConsonantFreq = strSet[mapKeys[i]];
      //   }
      maxConsonantFreq = Math.max(maxConsonantFreq, strSet[mapKeys[i]]);
    }
  }
  return maxVowelFreq + maxConsonantFreq;
}
