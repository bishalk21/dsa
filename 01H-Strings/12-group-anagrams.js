/** Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Algorithm: Sorted string as key
 * 1. Create a map to hold sorted string as key and list of anagrams as value
 * 2. Iterate through each string in the input array
 *    a. Sort the string to create a key
 *    b. If the key doesn't exist in the map, create a new list
 *    c. Append the original string to the list corresponding to the key
 * 3. Return the values of the map as the result
 * Time Complexity: O(n k log k), where n is the number of strings and k is the maximum length of a string
 * Space Complexity: O(n k), for storing the grouped anagrams
 *
 * we can make it more efficient, where `m log m - time taken to sort each string of length m` is reduced.
 * we can use character count as the key instead of sorting (unique representation of character frequency)
 *
 * Algorithm: Character count as key (HASHING)
 * 1. Create a map to hold character count as key and list of anagrams as value
 * 2. Iterate through each string in the input array
 *    a. Create a frequency array of size 26 (for each letter in the alphabet)
 *    b. Iterate through the string and update the frequency array
 *    c. Create a key from the frequency array
 *    d. If the key doesn't exist in the map, create a new list
 *   e. Append the original string to the list corresponding to the key
 * 3. Return the values of the map as the result
 * Time Complexity: O(n k), where n is the number of strings and k is the maximum length of a string
 * Space Complexity: O(n k), for storing the grouped anagrams
 */

function groupAnagrams(strs) {
  // map to hold sorted string as key and list of anagrams as value
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    // Sort the string to create a key
    let sortedStr = strs[i].split("").sort().join("");
    // If the key doesn't exist in the map, create a new list
    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
    }
    // Append the original string to the list corresponding to the key
    else {
      map[sortedStr].push(strs[i]);
    }
  }
  // Return the values of the map as the result
  //   return Object.values(map);
  return [...Object.values(map)];
}

// using hashing - character count as key
function groupAnagramsHashing(strs) {
  let map = {};

  // time complexity: O(n), where n is the number of strings as we are iterating through each string
  for (let i = 0; i < strs.length; i++) {
    // create key using character count
    let frequencyArr = new Array(26).fill(0);
    // get the current string
    let str = strs[i];
    // time complexity: O(m), where m is the length of the string as we are iterating through each character
    for (let j = 0; j < str.length; j++) {
      //   frequencyArr[str.charCodeAt(j) - "a".charCodeAt(0)]++;
      // increment the count for the character
      let index = str.charCodeAt(j) - "a".charCodeAt(0);
      frequencyArr[index]++;
    }
    // create a key from frequency array
    let key = "";

    // time complexity: O(1), as the size of frequencyArr is fixed (26)
    for (let k = 0; k < 26; k++) {
      //   key = key + String.fromCharCode(k) + frequencyArr[k];
      //   key += String.fromCharCode(k + "a".charCodeAt(0)) + frequencyArr[k];
      key += "#" + frequencyArr[k];
    }
    // fill the map
    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }
  // Return the values of the map as the result
  return [...Object.values(map)];
}
