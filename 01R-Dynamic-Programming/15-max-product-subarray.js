/** Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 *
 * Given an integer array nums,
 * find a contiguous non-empty subarray within the array
 * that has the largest product,
 * and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Note that the product of an array with a single element is the value of that element.
 *
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * Example 2:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -10 <= nums[i] <= 10
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * @param {number[]} nums
 * @return {number}
 */

/**
 * To handle negative numbers, we need to keep track of both the maximum and minimum products up to the current position.
 * This is because a negative number can turn a minimum product into a maximum product when multiplied.
 * At each step, we update the maximum and minimum products by considering the current number,
 * the product of the current number with the previous maximum product,
 * and the product of the current number with the previous minimum product.
 * We also keep track of the overall maximum product found so far.
 * This approach ensures that we account for the effects of negative numbers and find the maximum product subarray efficiently.
 * The time complexity of this algorithm is O(n), where n is the length of the input array nums.
 * The space complexity is O(1) since we are using a constant amount of extra space.
 */

function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let totalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let maxProdCopy = maxProd;
    maxProd = Math.max(nums[i], Math.max(maxProd * nums[i], minProd * nums[i]));
    minProd = Math.min(
      nums[i],
      Math.min(maxProdCopy * nums[i], minProd * nums[i]),
    );
    totalMax = Math.max(totalMax, maxProd);
  }
  return totalMax;
}
