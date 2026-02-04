/** Trionic Array I
 * https://leetcode.com/problems/trionic-array-i/
 *
 * You are given an interger array nums of length n
 * An array is trionic if there exists indices 0 < p < q < n - 1 such that:
 * - nums[0...p] is strictly increasing
 * - nums[p...q] is strictly decreasing
 * - nums[q...n - 1] is strictly increasing
 *
 * Return true if the given array is trionic, otherwise return false.
 *
 * Example 1:
 * Input: nums = [1,3,5,4,2,6]
 * Output: true
 * Explanation: The array is trionic with p = 2 and q = 4.
 *              - nums[0...2] = [1,3,5] is strictly increasing (1 < 3 < 5).
 *              - nums[2...4] = [5,4,2] is strictly decreasing (5 > 4 > 2).
 *              - nums[4...5] = [2,6] is strictly increasing (2 < 6).
 *
 * Example 2:
 * Input: nums = [2,1,3]
 * Output: false
 * Explanation: There is no way to make the array trionic.
 *
 * Constraints:
 * 3 <= n <= 100
 * -1000 <= nums[i] <= 1000
 *
 * @param {number[]} nums
 * @return {boolean}
 */
// for input/output operations
#include <iostream> 
// for using vector container where we can store dynamic array 
#include <vector> 
// namespace means a declarative region that provides a scope to the identifiers
// std means standard library functions
using namespace std;  

class Solution {
    public:
    // function to check if the array is trionic 
    // vector<int>& nums: reference to the input array
    bool isTrionic(vector<int>& nums) {
        int n=nums.size(); // size is used in c++ to get the number of elements in the vector
        if (n < 3) return false; // if size is less than 3 return false
            for (int p = 1; p < n - 2; p++) {
            for (int q = p + 1; q < n - 1; q++) {
                if (isStrictlyIncreasing(nums, 0, p) &&
                    isStrictlyDecreasing(nums, p, q) &&
                    isStrictlyIncreasing(nums, q, n - 1)) {
                    return true;
                }
            }
        }
        
        return false;
    }
};

// helper function to check if the subarray is strictly increasing
private:
bool isStrictlyIncreasing(const vector<int>& nums, int start, int end) {
    for (int i = start; i < end; i++) {
        if (nums[i] >= nums[i + 1]) {
            return false;
        }
    }
    return true;
}

// helper function to check if the subarray is strictly decreasing
private:
bool isStrictlyDecreasing(const vector<int>& nums, int start, int end) {
    for (int i = start; i < end; i++) {
        if (nums[i] <= nums[i + 1]) {
            return false;
        }
    }
    return true;
}



// using System;

// public class Solution {
//     public bool IsTrionic(int[] nums) {
//         int n = nums.Length;
        
//         // We need at least 3 elements for three segments
//         if (n < 3) return false;
        
//         // Try all possible combinations of p and q
//         // p must be at least 1 (since 0 < p)
//         // q must be at least p+1 (since p < q)
//         // q must be at most n-2 (since q < n-1)
        
//         for (int p = 1; p < n - 2; p++) {
//             for (int q = p + 1; q < n - 1; q++) {
//                 if (IsStrictlyIncreasing(nums, 0, p) &&
//                     IsStrictlyDecreasing(nums, p, q) &&
//                     IsStrictlyIncreasing(nums, q, n - 1)) {
//                     return true;
//                 }
//             }
//         }
        
//         return false;
//     }
    
//     // Check if nums[start...end] is strictly increasing
//     private bool IsStrictlyIncreasing(int[] nums, int start, int end) {
//         for (int i = start; i < end; i++) {
//             if (nums[i] >= nums[i + 1]) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     // Check if nums[start...end] is strictly decreasing
//     private bool IsStrictlyDecreasing(int[] nums, int start, int end) {
//         for (int i = start; i < end; i++) {
//             if (nums[i] <= nums[i + 1]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }