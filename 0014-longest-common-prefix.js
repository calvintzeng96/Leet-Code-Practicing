// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


var longestCommonPrefix = function(strs) {
   let test = strs[0]
   for (let i = 0; i < strs.length; i++) {
        while(strs[i].indexOf(test)) {
            test = test.substring(0, test.length - 1)
        }
   }
   return test
};

// let input1 = ["flower","flow","flight"] //fl
// let input2 = ["dog","racecar","car"] //""
// console.log(longestCommonPrefix(input1))
// console.log(longestCommonPrefix(input2))

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
