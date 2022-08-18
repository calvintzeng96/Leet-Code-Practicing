// 45. Jump Game II
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

var jump = function(nums) {
    let current = -1
    let answer = 0
    let jump = 0
    for (let i = 0; jump < nums.length - 1; i++) {
        if (i > current) {
            answer++;
            current = jump
        }
        if (nums[i] + i > jump) {
                jump = nums[i] + i
            }
    }
    return answer
};

// let input1 = [2,3,1,1,4]
// let input2 = [2,3,0,1,4]
// console.log(jump(input1)) //2
// console.log(jump(input2)) //2



// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
