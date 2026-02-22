/** Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/
 * https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages
 *
 * You are given an array of integers stones
 * where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones.
 * On each turn, we choose the heaviest two stones and smash them together.
 * Suppose the heaviest two stones have weights x and y with x <= y.
 * The result of this smash is:
 * - If x == y, both stones are totally destroyed, and
 * - If x != y, the stone of weight x is totally destroyed, and
 *   the stone of weight y has new weight y - x.
 * At the end of the game, there is at most one stone left.
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 *
 * Example 1:
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
 * Explanation:
 * We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
 * we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
 * we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
 *
 * Example 2:
 * Input: stones = [1]
 * Output: 1
 *
 * Constraints:
 * 1 <= stones.length <= 30
 * 1 <= stones[i] <= 1000
 *
 * @param {number[]} stones
 * @return {number}
 */

/** Algorithm - Bruteforce
 * - traverse the array and find the two heaviest stones
 * - if they are equal, remove both stones from the array
 * - if they are not equal, remove the lighter stone and
 *   update the heavier stone with the difference
 * - repeat the process until there is at most one stone left
 *
 * Time Complexity: O(n^2) in the worst case, where n is the number of stones, because we may need to find the two heaviest stones multiple times.
 * Space Complexity: O(1) if we modify the input array in place, otherwise O(n) if we create a new array to store the remaining stones.
 *
 * Time Limit Exceeded for large inputs, hence we can optimize using a Max Heap to always get the two heaviest stones in O(log n) time.
 */

function lastStoneWeight(stones) {
  let n = stones.length;
  while (n > 1) {
    // find the two heaviest stones
    let max1 = -1,
      max2 = -1,
      idx1 = -1,
      idx2 = -1;
    for (let i = 0; i < n; i++) {
      if (stones[i] > max1) {
        max2 = max1;
        idx2 = idx1;
        max1 = stones[i];
        idx1 = i;
      } else if (stones[i] > max2) {
        max2 = stones[i];
        idx2 = i;
      }
    }
    // smash the two heaviest stones
    if (max1 === max2) {
      // both stones are destroyed
      stones.splice(idx1, 1);
      stones.splice(idx2, 1);
    } else {
      // the lighter stone is destroyed and the heavier stone is updated
      stones[idx1] = max1 - max2;
      stones.splice(idx2, 1);
    }
  }
  return n === 1 ? stones[0] : 0;
}

/** Algorithm - Max Heap
 * - add all stones to a Max Heap
 * - while there are more than one stone in the heap:
 *   - extract the two heaviest stones from the heap
 *   - if they are equal, do nothing (both stones are destroyed)
 *   - if they are not equal, insert the difference back into the heap
 * - return the weight of the last remaining stone, or 0 if there are no stones left
 *
 * Time Complexity: O(n log n) for building the Max Heap and O(log n) for each of the n-1 iterations, resulting in O(n log n) overall.
 * Space Complexity: O(n) for the Max Heap, as it will hold all the stones at most.
 */

class MyMaxHeap {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.parent(index);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }
  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);
      let largest = index;
      if (leftIndex < length && this.heap[leftIndex] > this.heap[largest]) {
        largest = leftIndex;
      }
      if (rightIndex < length && this.heap[rightIndex] > this.heap[largest]) {
        largest = rightIndex;
      }
      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
}

function lastStoneWeight(stones) {
  let pq = new MyMaxHeap();
  for (let i = 0; i < stones.length; i++) {
    pq.insert(stones[i]);
  }
  while (pq.size() > 1) {
    let max1 = pq.remove();
    let max2 = pq.remove();
    if (max1 !== max2) {
      pq.insert(max1 - max2);
    }
  }
  //   return pq.size() === 1 ? pq.peek() : 0;
  return pq.remove() || 0;
}
