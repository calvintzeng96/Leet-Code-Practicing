// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
    let obj = {}
    let sorted = strs.map(ele => {
        return ele.split("").sort().join("")
    })

    for (let i = 0; i < strs.length; i++) {
        if (!obj[sorted[i]]) {
            obj[sorted[i]] = [strs[i]]
        } else {
            obj[sorted[i]].push(strs[i])
        }
    }

    return Object.values(obj)
};


let input1 = ["eat","tea","tan","ate","nat","bat"]
// let input2 = [""]
console.log(groupAnagrams(input1)) //[["bat"],["nat","tan"],["ate","eat","tea"]]
// console.log(groupAnagrams(input2)) //[[""]]


// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
