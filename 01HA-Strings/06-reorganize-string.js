/** Reorganize String
 * https://leetcode.com/problems/reorganize-string/
 *
 * Given a string s, rearrange the characters of s
 * so that any two adjacent characters are not the same.
 * Return any possible rearrangement of s or return "" if not possible.
 *
 * Example 1:
 * Input: s = "aab"
 * Output: "aba"
 *
 * Example 2:
 * Input: s = "aaab"
 * Output: ""
 *
 * Constraints:
 * - 1 <= s.length <= 500
 * - s consists of lowercase English letters.
 *
 * Algorithm: Even Odd Placement
 * 1. Count the frequency of each character in the string.
 * 2. Find the character with the maximum frequency.
 * 3. If the maximum frequency is greater than (s.length + 1) / 2,
 *    return "" because it's not possible to rearrange.
 * 4. Create an array to hold the rearranged characters.
 * 5. Place the most frequent character at even indices (0, 2, 4, ...) in the array.
 * 6. Place the remaining characters in the array,
 *    filling even indices first and then odd indices (1, 3, 5, ...).
 * 7. Join the array into a string and return it.
 * Time Complexity: O(n log k), where n is the length of the string (for counting frequencies and rearranging)
 *                 and k is the number of unique characters (for sorting).
 * Space Complexity: O(n), for the output array and frequency map.
 * Note: This algorithm ensures that no two adjacent characters are the same by placing the most frequent character first and then filling in the remaining characters in a way that avoids adjacency.
 * 
 * Initial:
   freq = {}
   maxFreq = 0

Counting frequency:
   c = 'a' → freq['a'] = 1, maxFreq = 1
   c = 'a' → freq['a'] = 2, maxFreq = 2
   c = 'b' → freq['b'] = 1, maxFreq = 2

   freq = { a: 2, b: 1 }
   n = 3

Check impossible case:
   maxFreq = 2, ceil(3/2) = 2 → valid

Sort characters:
   chars = ['a', 'b']  (sorted by frequency desc)

Initialize:
   result = [ , , ]
   i = 0

Fill characters:

   ch = 'a', count = 2

      count = 2:
         i = 0 → result[0] = 'a'
         i = 2
         count = 1

      count = 1:
         i = 2 → result[2] = 'a'
         i = 4
         count = 0

   result = ['a', , 'a']

   ch = 'b', count = 1

      count = 1:
         i = 4 >= n → i = 1
         result[1] = 'b'
         i = 3
         count = 0

   result = ['a', 'b', 'a']

Final:
   return "aba"
 * 
 * Follow up: Can you solve it using a priority queue (max heap) to always place the most frequent character next?
 * Algorithm: Priority Queue (Max Heap)
 * 1. Count the frequency of each character in the string.
 * 2. Use a max heap to store characters based on their frequency.
 * 3. While the heap is not empty:
 *    - Pop the most frequent character from the heap.
 *    - Append it to the result string.
 *    - Decrease its frequency and if it still has a positive frequency, store it temporarily.
 *    - If there is a previously stored character from the last iteration, push it back into the heap.
 *    - Store the current character as the previously stored character for the next iteration.
 * 4. If the result string's length is equal to the input string's length, return the result; otherwise, return "".
 * Time Complexity: O(n log k), where n is the length of the string and k is the number of unique characters (for heap operations).
 * Space Complexity: O(n), for the output string and frequency map.
 * Note: The priority queue approach is more efficient for cases with a large number of unique characters, as it always ensures that the most frequent character is placed next, thus avoiding adjacency issues.
 */

function reorganizeString(s) {
  let freq = {};
  let maxFreq = 0;
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, freq[char]);
  }
  if (maxFreq > Math.ceil(s.length / 2)) {
    return "";
  }
  let sortedChars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  let result = new Array(s.length);
  let index = 0;
  for (let char of sortedChars) {
    let count = freq[char];
    while (count > 0) {
      if (index >= s.length) {
        index = 1; // Start filling odd indices after even indices are filled
      }
      result[index] = char;
      count--;
      index += 2;
    }
  }
  return result.join("");
}

// Using Priority Queue (Max Heap)
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(char, freq) {
    this.heap.push({ char, freq });
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      if (this.heap[i].freq <= this.heap[parentIndex].freq) break;
      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let max = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return max;
  }

  heapifyDown() {
    let i = 0;
    let length = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let largest = i;
      if (left < length && this.heap[left].freq > this.heap[largest].freq) {
        largest = left;
      }
      if (right < length && this.heap[right].freq > this.heap[largest].freq) {
        largest = right;
      }
      if (largest === i) break;
      this.swap(i, largest);
      i = largest;
    }
  }

  peak() {
    return this.heap[0] || null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  front() {
    return this.peak();
  }
}

function reorganizeStringHeap(s) {
  let freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let maxHeap = new MaxHeap();
  for (let char in freq) {
    maxHeap.enqueue(char, freq[char]);
  }
  let result = "";
  let prev = null;
  while (!maxHeap.isEmpty()) {
    let { char, freq } = maxHeap.dequeue();
    result += char;
    if (prev) {
      maxHeap.enqueue(prev.char, prev.freq);
      prev = null;
    }
    if (freq - 1 > 0) {
      prev = { char, freq: freq - 1 };
    }
  }
  return result.length === s.length ? result : "";
}
