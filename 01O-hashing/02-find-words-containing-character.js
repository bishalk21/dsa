/** Find Words Containing Character
 * https://leetcode.com/problems/find-words-containing-character/description/
 *
 * You are given a 0-indexed array of strings words and a character x.
 * Return an array of indices representing the words that contain the character x.
 * Note that the returned array may be in any order.
 *
 * Example 1:
 * Input: words = ["leet","code"], x = "e"
 * Output: [0,1]
 * Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
 *
 * Example 2:
 * Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
 * Output: [0,2]
 * Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
 */

// using built-in functions
// time complexity: O(n*m) where n is the number of words and m is the average length of the words, due to the includes method
// space complexity: O(k) where k is the number of words that contain the character x, since we are storing their indices in the result array
function findWordsContainingCharacter(words, x) {
  let result = [];
  // loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // if the word contains the character x,
    if (words[i].includes(x)) {
      //  add the index of the word to the result array
      result.push(i);
    }
  }
  return result;
}

/**
 * - loop through each word in the array
 * - for each word, loop through each character in the word
 * - if the character matches x, add the index of the word to the result array and break out of the inner loop to avoid unnecessary checks
 * - return the result array
 * - Time complexity: O(n*m) where n is the number of words and m is the average length of the words
 * - Space complexity: O(k) where k is the number of words that contain the character x, since we are storing their indices in the result array
 *   since we are not using result in logic, we can say space complexity is O(1) as we are not using any extra space to store the result, we are just returning the indices of the words that contain the character x
 */
// without using built-in functions - nested loops
function findWords(words, x) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i);
        break; // No need to check further in this word
      }
    }
  }
  return result;
}

// hashing approach
// time limit exceeded for large inputs because of the overhead of creating a set for each word and checking for the character
function findWordsUsingHashing(words, x) {
  let result = [];
  let charSet = new Set();

  for (let i = 0; i < words.length; i++) {
    charSet.clear(); // Clear the set for the new word
    for (let j = 0; j < words[i].length; j++) {
      charSet.add(words[i][j]);
    }
    if (charSet.has(x)) {
      result.push(i);
    }
  }
  return result;
}
