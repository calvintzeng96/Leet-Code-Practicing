// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    // return s.split("").sort().join("") == t.split("").sort().join("")

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

let input1 = "anagram"
let input2 = "nagaram"
let input3 = "rat"
let input4 = "car"
console.log(isAnagram(input1, input2)) //true
console.log(isAnagram(input3, input4)) //false

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
