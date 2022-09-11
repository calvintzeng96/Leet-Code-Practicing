// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    let string = x.toString()
    let front = string[0]
    let back = string[string.length - 1]
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (front !== back) {
            return false
        }
        front = string[i + 1]
        back = string[string.length - 2 - i]
    }
    return true
};

// let input = 121
// console.log(isPalindrome(input))

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?
