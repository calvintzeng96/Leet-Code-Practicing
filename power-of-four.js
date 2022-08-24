// 342. Power of Four

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false
    }
    if (n === 1) {
        return true
    }
    if (!(n % 4 === 0)) {
        return false
    }
    return isPowerOfFour((n / 4))
};

// let input1 = 16
// let input2 = 5
// console.log(isPowerOfFour(input1)) //true
// console.log(isPowerOfFour(input2)) //false

// Example 1:
// Input: n = 16
// Output: true
// Example 2:
// Input: n = 5
// Output: false
// Example 3:
// Input: n = 1
// Output: true

// Constraints:
// -231 <= n <= 231 - 1
// Follow up: Could you solve it without loops/recursion?
