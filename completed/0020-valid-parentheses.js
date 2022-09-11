// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let lastElement = stack[stack.length - 1]
        if (obj[s[i]]) {
            stack.push(s[i])
        } else {
            if (obj[lastElement] === s[i]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};





let input1 = "()[]{}"
let input2 = "(]"
console.log(isValid(input1)) //true
console.log(isValid(input2)) //false

// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
