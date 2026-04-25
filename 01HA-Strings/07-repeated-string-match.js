/** Repeated String Match
 * https://leetcode.com/problems/repeated-string-match/
 * Given two strings a and b,
 * return the minimum number of times you should repeat string a
 * so that string b is a substring of it.
 * If it is impossible for b​​​​​​ to be a substring of a after repeating it,
 * return -1.
 *
 * Note: string "abc" repeated 0 times is "", repeated 1 time is "abc",
 * repeated 2 times is "abcabc", and so on.
 *
 * Example 1:
 * Input: a = "abcd", b = "cdabcdab"
 * Output: 3
 * Explanation: We can repeat a three times "abcdabcdabcd", and b is a substring of it.
 *
 * Example 2:
 * Input: a = "a", b = "aa"
 * Output: 2
 * Explanation: We can repeat a two times "aa", and b is a substring of it.
 *
 * Example 3:
 * Input: a = "abc", b = "wxyz"
 * Output: -1
 * Explanation: We can't get b as a substring of a no matter how many times we repeat a.
 *
 * Constraints:
 * - 1 <= a.length, b.length <= 10^4
 * - a and b consist of lowercase English letters.
 *
 * Algorithm: String Repetition and Substring Check
 * 1. Initialize a count variable to keep track of the number of repetitions and a variable to hold the repeated string.
 * 2. Repeat string a until its length is at least the length of b, incrementing the count each time.
 * 3. Check if b is a substring of the repeated string. If it is, return the count.
 * 4. If b is not a substring, repeat string a one more time and check again. If it is now a substring, return the count.
 * 5. If b is still not a substring, return -1.
 * Time Complexity: O(n * m), where n is the length of a and m is the length of b, because in the worst case we may need to repeat a multiple times and check for substring each time.
 * Space Complexity: O(n * k), where k is the number of repetitions, because we are creating a new string each time we repeat a.
 *
 * Algorithm: Rabin-Karp Algorithm for Substring Search
 * 1. Use the Rabin-Karp algorithm to check if b is a substring of a repeated multiple times.
 * 2. Repeat string a until its length is at least the length of b, and use Rabin-Karp to check for substring each time.
 * 3. If b is found as a substring, return the count of repetitions.
 * 4. If b is not found after one additional repetition, return -1.
 * Time Complexity: O(n + m) on average for each substring check, where n is the length of the repeated string and m is the length of b. The number of repetitions can be at most O(m/n) in the worst case, leading to an overall time complexity of O((n + m) * (m/n)) = O(m^2/n + m).
 * Space Complexity: O(1) for the hash values used in Rabin-Karp, but O(m) for the pattern string b.
 */

function repeatedStringMatch(a, b) {
  let count = 1;
  let repeatedA = a;
  while (repeatedA.length < b.length) {
    repeatedA += a;
    count++;
  }
  if (repeatedA.includes(b)) {
    return count;
  }
  repeatedA += a;
  count++;
  if (repeatedA.includes(b)) {
    return count;
  }

  return -1;
}

/** Rabin-Karp Algorithm for string matching
 * - a string searching algorithm
 * - uses hashing to find patterns in a text.
 * - It works by calculating a hash value for the pattern and
 *   then sliding a window over the text to calculate hash values
 *   for each substring of the same length as the pattern.
 *   If the hash values match, it performs a direct comparison
 *   to confirm the match.
 * - Time Complexity: O(n + m) on average, where n is the length of the text and m is the length of the pattern.
 * - Space Complexity: O(1) for the hash values, but O(m) for the pattern string.
 *
 * Example:
 * Text: "ababcab"
 * Pattern: "abc"
 * 1. Calculate hash for pattern "abc".
 * 2. Create a sliding window of length 3 and calculate hash for each substring:
 *    - "aba" → hash1
 *    - "bab" → hash2
 *    - "abc" → hash3 (matches pattern hash)
 * 3. When a hash match is found, compare the actual strings to confirm the match.
 *    - hash3 -> "abc" (matches pattern) → confirm match by comparing "abc" with "abc"
 * 4. If a match is confirmed, return the starting index of the match in the text.
 * 5. If no match is found after sliding through the entire text, return -1.
 * Note: The choice of the hash function and the base can affect the performance of the algorithm, and there is a possibility of hash collisions, which is why a direct string comparison is necessary when a hash match is found.
 *
 * Spurious hits or hash collisions
 * Spurious hits (hash collisions) can occur when different substrings
 * produce the same hash value. To handle this, the algorithm performs a
 * direct string comparison when a hash match is found to confirm
 * that the actual strings are identical.
 *
 * To minimize the chances of hash collisions,
 * a good hash function and a large base can be used.
 * However, even with a good hash function,
 * collisions can still occur, so the direct string comparison step
 * is essential to ensure the correctness of the algorithm.
 *
 * What Rabin-Karp does to handle spurious hits:
 * 1. When a hash match is found, it does not immediately assume that
 *    the pattern matches the substring in the text.
 * 2. Instead, it performs a direct comparison of the actual strings
 *    (the pattern and the current substring in the text) to confirm
 *    whether they are identical.
 * 3. If the strings match, it returns the starting index of the match in the text.
 * 4. If the strings do not match (indicating a spurious hit),
 *    it continues sliding through the text and calculating hash values
 *    for the next substrings until it finds a match or
 *    reaches the end of the text.
 *
 * Base and Modulus for Hashing:
 * - The choice of base and modulus can affect the performance of the algorithm.
 * - A common choice for the base is a prime number (e.g., 31 or 53)
 *   to reduce the chances of collisions.
 * - A large prime number is often used as the modulus to further reduce
 *   the chances of collisions and to keep the hash values
 *   within a manageable range.
 * - Rabin-Karp suggests to use 256 as the base and
 *   a large prime number 10^9 + 7 (e.g., 101) as the modulus for hashing.
 * - modulus is used to prevent integer overflow and to keep the hash values
 *   within a manageable range, while the base is used to create a unique
 *   hash value for different strings.
 * - Rabin-Karp typically uses a rolling hash technique to efficiently calculate
 *   hash values for the substrings as the window slides through the text.
 *
 * Rolling Hash Technique:
 * - The rolling hash technique allows for efficient calculation of hash values
 *   for substrings by reusing the hash value of the previous substring and
 *   updating it based on the characters that are added and removed from the sliding window.
 * - This technique helps to achieve an average time complexity of O(n + m)
 *   for the Rabin-Karp algorithm.
 */

var repeatedStringMatch = function (a, b) {
  let count = 1;
  let repeatA = a;
  while (repeatA.length < b.length) {
    repeatA += a;
    count++;
  }
  if (rabinKarp(repeatA, b)) {
    return count;
  }
  repeatA += a;
  count++;
  if (rabinKarp(repeatA, b)) {
    return count;
  }
  return -1;
};

function rabinKarp(text, pattern) {
  let base = 256;
  let mod = 1e9 + 7;
  let patternHash = 0;
  let windowHash = 0;
  let m = pattern.length;
  let n = text.length;
  if (m > n) return false;
  // initial hash
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    windowHash = (windowHash * base + text.charCodeAt(i)) % mod;
  }
  let power = 1;
  for (let i = 0; i < m - 1; i++) {
    power = (power * base) % mod;
  }
  for (let i = 0; i <= n - m; i++) {
    if (patternHash === windowHash) {
      // if (pattern.includes(text.substring(i, i + m))) {
      if (pattern === text.substring(i, i + m)) {
        return true;
      }
    }
    if (i < n - m) {
      // rolling hash
      windowHash = (windowHash - power * text.charCodeAt(i)) % mod;
      if (windowHash < 0) windowHash += mod;
      windowHash = (windowHash * base + text.charCodeAt(i + m)) % mod;
    }
  }
  return false;
}
