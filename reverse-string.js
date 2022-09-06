// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
    let i = 0
    let j = s.length - 1
    while (i !== Math.floor(s.length / 2)) {
        let placeHolder = s[i]
        s[i] = s[j]
        s[j] = placeHolder
        i++
        j--
    }
    return s
};

let input1 = ["h","e","l","l","o"]
let input2 = ["H","a","n","n","a","h"]
console.log(reverseString(input1)) //["o","l","l","e","h"]
console.log(reverseString(input2)) //["h","a","n","n","a","H"]

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.
