// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

var topKFrequent = function(nums, k) {

};


let input1 = [1,1,1,2,2,3]
let input2 = 2
let input3 = [1]
let input4 = 1
console.log(topKFrequent(input1, input2)) //[1,2]
console.log(topKFrequent(input3, input4)) //[1]

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
