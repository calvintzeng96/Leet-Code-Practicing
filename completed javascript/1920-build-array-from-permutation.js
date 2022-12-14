// 1920. Build Array from Permutation
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).


// var buildArray = function(nums) {
//     // let answer = []

//     // for (let i = 0; i < nums.length; i++) {
//     //     answer[i] = nums[nums[i]]
//     // }
//     // return answer

//     // return nums.map(ele => nums[ele])
//     let tracker = nums.length - 1
//     let jumper = 0
//     while (tracker != -1) {
//         nums[nums.length - tracker - 1] = nums[jumper]
//         jumper = nums[nums.length - tracker - 1]

//         tracker--
//     }
//     return nums
// };

let buildArray = function(nums) {
    for (let i=0 ; i<nums.length ; i++){
    let e=nums[i]
    if (typeof(e)==='string') e = e.substring(0, e.indexOf('/'));
    let bigE=(nums[e]);
    if (typeof(bigE)==='string') bigE = bigE.substring(0, bigE.indexOf('/'));
    nums[i]=(''+e)+'/'+bigE;
    }
    for (let i=0 ; i<nums.length ; i++){
    let test1= nums[i] ;
    let test2 = test1.substr(test1.indexOf('/') + 1);
    nums[i]=+test2;
    }
    return nums
    }



let input1 = [0,2,1,5,3,4]
let input2 = [5,0,1,2,3,4] //[4,5,0,1,2,3]
console.log(buildArray(input1)) //[0,1,2,4,5,3]
console.log(buildArray(input2)) //[4,5,0,1,2,3]



// Example 1:
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:
// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

// Constraints:
// 1 <= nums.length <= 1000
// 0 <= nums[i] < nums.length
// The elements in nums are distinct.

// Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?
