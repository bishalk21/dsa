/** Count and Say
 * https://leetcode.com/problems/count-and-say/
 *
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1),
 * which is then converted into a different digit string.
 *
 * Run-length encoding (RLE) is a string compression method that works
 * by replacing consecutive identical characters (repeated 2 or more times)
 * with the concatenation of the character and
 * the number marking the count of the characters (length of the run).
 * To determine how you "say" a digit string, split it into the minimal number of groups
 * such that each group is a contiguous section all of the same character. Then for each group,
 * say the number of characters, then say the character. To convert the saying into a digit string,
 * replace the counts with a number and concatenate every saying.
 * For example, the saying and conversion for digit string "3322251":
 * - We have "3322251", which can be split into "33", "222", "5", "1".
 * - Each group has "33" (two 3's), "222" (three 2's), "5" (one 5), and "1" (one 1).
 * - This gives us "23" + "32" + "15" + "11", which concatenates to "23321511".
 * Given a positive integer n, return the nth term of the count-and-say sequence.
 *
 * Example 1:
 * Input: n = 1
 * Output: "1"
 * Explanation: This is the base case.
 *
 * Example 2:
 * Input: n = 4
 * Output: "1211"
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 *
 * Constraints:
 * - 1 <= n <= 30
 *
 * Follow up: Could you solve it iteratively?
 *
 * Algorithm: Iterative
 * 1. Start with the base case "1" for n = 1.
 * 2. For each term from 2 to n, generate the next term by counting the occurrences of each character in the current term and building the next term accordingly.
 * 3. Use a loop to iterate through the current term and count consecutive characters.
 * 4. Append the count and the character to build the next term.
 * 5. Return the nth term after the loop completes.
 * Time Complexity: O(n * m), where n is the input number and m is the length of the longest term generated. The length of the terms grows exponentially, so this can be approximated as O(2^n) in the worst case.
 * Space Complexity: O(m), where m is the length of the longest term generated, due to the space used for the current and next terms.
 * Note: The iterative approach is more efficient in terms of call stack usage compared to the recursive approach, especially for larger values of n, as it avoids deep recursion and potential stack overflow issues.
 * Initial:
   curr = "1"

i = 2:
   curr = "1"
   rle = ""
   count = 1

   j = 1:
      curr[1] != curr[0]  (undefined != '1')
      rle = "" + "1" + "1" = "11"
      count = 1

   curr = "11"

i = 3:
   curr = "11"
   rle = ""
   count = 1

   j = 1:
      curr[1] == curr[0] ('1' == '1')
      count = 2

   j = 2:
      curr[2] != curr[1] (undefined != '1')
      rle = "" + "2" + "1" = "21"
      count = 1

   curr = "21"

i = 4:
   curr = "21"
   rle = ""
   count = 1

   j = 1:
      curr[1] != curr[0] ('1' != '2')
      rle = "" + "1" + "2" = "12"
      count = 1

   j = 2:
      curr[2] != curr[1] (undefined != '1')
      rle = "12" + "1" + "1" = "1211"
      count = 1

   curr = "1211"

Final:
   return "1211"
  
 * 
 * Algorithm: Recursive
 * 1. Define a recursive function that takes n as an argument.
 * 2. If n is 1, return "1" as the base case.
 * 3. For n greater than 1, call the function recursively to get the (n-1)th term.
 * 4. Count the occurrences of each character in the (n-1)th term and build the nth term by appending the count and the character.
 * 5. Return the nth term.
 * Time Complexity: O(n * m), where n is the input number and m is the length of the longest term generated.
 * Space Complexity: O(n + m), where n is the depth of the recursion and m is the length of the longest term generated, due to the call stack and space used for the current term.
 * */

function countAndSay(n) {
  if (n === 1) return "1"; // Base case
  let curr = "1"; // Start with the first term
  for (let i = 2; i <= n; i++) {
    let next = ""; // Initialize the next term
    let count = 1;
    for (let j = 1; j <= curr.length; j++) {
      if (curr[j] === curr[j - 1]) {
        count++;
      } else {
        // Append count and character to next term
        // next += count.toString() + curr[j - 1];
        next += count + curr[j - 1];
        count = 1; // Reset count for the new character
      }
    }
    curr = next; // Update curr for the next iteration
  }
  return curr;
}

// Recursive approach
function countAndSayRecursive(n) {
  if (n === 1) return "1"; // Base case
  let prev = countAndSayRecursive(n - 1); // Get the (n-1)th term
  let next = "";
  let count = 1;
  for (let i = 1; i <= prev.length; i++) {
    if (prev[i] === prev[i - 1]) {
      count++;
    } else {
      next += count + prev[i - 1]; // Append count and character
      count = 1; // Reset count for the new character
    }
  }
  return next; // Return the nth term
}
