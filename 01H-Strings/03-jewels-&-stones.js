/** Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones/
 *
 * You are given strings jewels representing the types of stones that are jewels,
 * and stones representing the stones you have.
 * Each character in stones is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 * logic: iterate through stones and check if each stone is in jewels
 * Algorithm: built-in functions
 * - Iterate through each character in stones
 * - If the character is found in jewels, increment the count
 * - Time Complexity: O(n*m) where n is the length of stones and m is the length of jewels
 * - Space Complexity: O(1) as we are using a constant amount of space
 *
 * always try to solve problem in language agnostic way, not using built-in functions
 *
 * Algorithm: without built-in functions
 * - Iterate through each character in stones
 * - For each character in stones, iterate through each character in jewels
 * - If a match is found, increment the count and break the inner loop
 * - Time Complexity: O(n*m) where n is the length of stones and m is the length of jewels
 * - Space Complexity: O(1) as we are using a constant amount of space
 *
 * whenever you have to find/search sth in strings/arrays, always think of hash map or set
 * to optimize the search time complexity to O(1)
 * Time complexity to find a target in string/array is O(n) as we have to iterate through each element
 * Set will ignore the duplicate values automatically
 *
 * Algorithm: using hash set
 * - Create a set to store the jewels
 * - Iterate through each character in jewels and add it to the set
 * - Iterate through each character in stones
 * - If the character is found in the set, increment the count
 * - Time Complexity: O(1) * O(n) = O(n) where n is the length of stones
 * - Space Complexity: O(1) as we are having at most 52 characters (a-z, A-Z) in the set
 */

// using built-in functions
function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) ++count; // includes() method checks if a string contains a specified value
  }
  return count;
}

// without using built-in functions
function numJewelInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        ++count;
        break; // No need to check further in jewels
      }
    }
  }
  return count;
}

// using hash set
function numJewelsInStone(jewels, stones) {
  let jewelSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      // has() method checks if a value exists in a Set
      ++count;
    }
  }
  return count;
}
