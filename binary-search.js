// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.


var search = function(nums, target) {
    let min = 0
    let max = nums.length - 1
    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        if (nums[middle] === target) return middle
        if (nums[middle] > target) {
            max = middle - 1
        } else {
            min = middle + 1
        }
    }
    return -1
};




let input1 = [-1,0,3,5,9,12]
let input2 = 9
let input3 = [-1,0,3,5,9,12]
let input4 = 2
console.log(search(input1, input2)) //4
console.log(search(input3, input4)) //-1


// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.
