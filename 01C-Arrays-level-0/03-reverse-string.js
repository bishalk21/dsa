/**
 * Reverse string
 *
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1)extra memory.
 *
 */

// Algorithm:
// 1. initialize two pointers, one at the start for the first character and one at the end for the last character.
// 2. swap the characters at these two pointers.
// 3. move the pointers towards the center of the string until they meet or cross.

let str = ["h", "e", "l", "l", "o"];

function reverseString(s) {
  let strLength = s.length;
  let temp;

  for (let i = 0; i < strLength / 2; i++) {
    temp = s[i];
    s[i] = s[strLength - 1 - i];
    s[strLength - 1 - i] = temp;
  }
  return s;
}

console.log(reverseString(str)); // Output: ["o", "l", "l", "e", "h"]

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Where n is the length of the string.
 *
 * Input: s = ["h", "e", "l", "l", "o"]

    len = 5, halfLen = 2
                    
    i = 0 → swap s[0] and s[4] → ["o", "e", "l", "l", "h"]
    i = 1 → swap s[1] and s[3] → ["o", "l", "l", "e", "h"]
                      
    Output: Result: ["o", "l", "l", "e", "h"]
 */
