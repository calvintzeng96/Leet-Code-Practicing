// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        current = s[i]
        if (obj[current]) {
            obj[current] = obj[current] + 1
        } else {
            obj[current] = 1
        }
    }
    for (let i = 0; i < t.length; i++) {
        current = t[i]
        if (obj[current]) {
            obj[current] = obj[current] - 1
        } else {
            return false
        }
    }
    for (let key in obj) {
        if (obj[key] !== 0) {
            return false
        }
    }
    return true
};

var groupAnagrams = function(strs) {
    // let answer = []
    // if (strs.length === 0) {
    //     return answer
    // }
    // let test = strs[0]
    // let group = []
    // for (let i = 0; i < strs.length - 1; i++) {
    //     if (isAnagram(test, strs[i])) {
    //         group.push(strs.splice(i, 1)) //[ele, ele]
    //     }
    // }
    // answer.push(group) //[[ele,ele]]
    // return answer.push(...groupAnagrams(strs))
};


let input1 = ["eat","tea","tan","ate","nat","bat"]
let input2 = [""]
console.log(groupAnagrams(input1)) //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(input2)) //[[""]]


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
