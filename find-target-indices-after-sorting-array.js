// 2089. Find Target Indices After Sorting Array
// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

var targetIndices = function(nums, target) {
    let sorted = nums.sort((a, b) => a - b)

    let low = 0
    let high = sorted.length - 1
    let targetResult;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (sorted[mid] === target) {
            targetResult = mid
            break
        }
        if (target > sorted[mid]) {
            low = mid + 1
        }
        if (target < sorted[mid]) {
            high = mid - 1
        }
    }

    let upperIndex;
    let lowerIndex;
    let low2 = targetResult
    let high2 = targetResult
    //up
    while (low2 <= high) {
        let mid = Math.floor((low2 + high) / 2)

        if (sorted[mid] !== target) {
            high = mid - 1
        }
        if (sorted[mid] === target) {
            if (sorted[mid + 1] !== target) {
                upperIndex = mid
                break
            }
            low2 = mid + 1
        }
    }
    //down
    while (low <= high2) {
        let mid = Math.floor((low + high2) / 2)

        if (sorted[mid] !== target) {
            low = mid + 1
        }
        if (sorted[mid] === target) {
            if (sorted[mid - 1] !== target) {
                lowerIndex = mid
                break
            }
            high2 = mid - 1
        }
    }
    let answer = []
    for (let i = lowerIndex; i <= upperIndex; i++) {
        answer.push(i)
    }
    return answer
};

// let input1 = [1,2,5,2,3]
// let target1 = 2
// let input2 = [1,2,5,2,3]
// let target2 = 3
// console.log(targetIndices(input1, target1)) //[1,2]
// console.log(targetIndices(input2, target2)) //[3]


// Example 1:
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:
// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:
// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.

// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i], target <= 100
