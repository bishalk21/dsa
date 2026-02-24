/** Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Given an integer array nums and an integer k,
 * return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Example 3:
 * Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
 * Output: [1,2]
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 * -10^4 <= nums[i] <= 10^4
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size.
 * Try to solve it in linear time complexity.
 */

/** Using min priority queue
 * 1. Create a map to count the frequency of each element in the array.
 * 2. Use a min priority queue (min heap) to keep track of the top k elements based on their frequency.
 * 3. Iterate through the map and add each element and its frequency to the min heap.
 *   If the size of the min heap exceeds k, remove the element with the lowest frequency.
 * 4. After processing all elements, the min heap will contain the top k frequent elements.
 * 5. Extract the elements from the min heap and return them as the result.
 * Time Complexity: O(n log k) because we are adding elements to the min heap and maintaining its size at k.
 * Space Complexity: O(n) for the map and O(k) for the min heap.
 */

class MyMinPriorityQueue {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
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
      if (this.heap[index][1] > this.heap[parentIndex][1]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  swap(i, j) {
    // let temp = this.heap[i];
    // this.heap[i] = this.heap[j];
    // this.heap[j] = temp;
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }
  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftIndex = this.left(index);
      let rightIndex = this.right(index);
      let smallest = index;
      if (
        leftIndex < length &&
        this.heap[leftIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < length &&
        this.heap[rightIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightIndex;
      }
      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  toArray() {
    return this.heap;
  }
}
function topKFrequent(nums, k) {
  // create map to count frequency of each element
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  // add element and frequency to min heap and maintain size at k
  let pq = new MyMinPriorityQueue((x) => x[1]);
  //   let pq = new MyMinPriorityQueue((x) => x.freq);
  for (let key in map) {
    pq.insert([parseInt(key), map[key]]);
    // pq.insert({val:key, freq: map[key]});
    // pq.insert({ val: parseInt(key), freq: map[key] });
    if (pq.size() > k) {
      pq.remove();
    }
  }
  // extract elements from min heap and return them as result
  // pq.toArray().map((x) => Number(x.val));
  let result = [];
  while (pq.size() > 0) {
    result.push(pq.remove()[0]);
    // result.push(pq.remove().val);
  }
  return result;
}

/** using map and sorting (O(n log n))
 * 1. Create a map to count the frequency of each element in the array.
 * 2. Convert the map into an array of [element, frequency] pairs.
 * 3. Sort the array based on frequency in descending order.
 * 4. Extract the top k elements from the sorted array and return them as the result.
 *
 * Time Complexity: O(n log n) due to sorting the array of frequency pairs.
 * Space Complexity: O(n) for the map and the array of frequency pairs.
 */

function topKFrequent(nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  let arr = [];
  // Convert the map into an array of [element, frequency] pairs
  for (let key in map) {
    arr.push([key, map[key]]);
  }
  // Sort the array based on frequency in descending order
  arr.sort((a, b) => b[1] - a[1]);
  let result = [];
  // Extract the top k elements from the sorted array
  for (let i = 0; i < k; i++) {
    result.push(parseInt(arr[i][0]));
  }
  return result;
}

/** using bucket sort (O(n))
 * 1. Create a map to count the frequency of each element in the array.
 * 2. Create an array of buckets, where the index represents the frequency and the value is a list of elements with that frequency.
 * 3. Iterate through the buckets in reverse order (from highest frequency to lowest) and collect the top k elements until we have collected k elements.
 *
 * Time Complexity: O(n) because we are counting frequencies and distributing elements into buckets, and then iterating through the buckets to collect the top k elements.
 * Space Complexity: O(n) for the map and the buckets.
 */

function topKFrequent(nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  let buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (let key in map) {
    let freq = map[key];
    buckets[freq].push(parseInt(key));
  }
  let result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      for (let j = 0; j < buckets[i].length; j++) {
        result.push(buckets[i][j]);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
}
