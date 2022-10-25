// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.


function isAlphaNumeric(ele) {
    if (ele.charCodeAt(0) >= 48 &&
        ele.charCodeAt(0) <= 57) {
        return true
    }
    if (ele.charCodeAt(0) >= 65 &&
        ele.charCodeAt(0) <= 90) {
        return true
    }
    if (ele.charCodeAt(0) >= 97 &&
        ele.charCodeAt(0) <= 122) {
        return true
    }
    return false
}


var isPalindrome = function(s) {
    let array = []
    for (let i = 0; i < s.length; i++) {
        if (isAlphaNumeric(s[i])) {
            let pushed = s[i].toLowerCase()
            array.push(pushed)
        }
    }

    let i = 0
    let j = array.length - 1
    while (i < Math.floor(array.length / 2)) {
        if (array[i] !== array[j]) {
            return false
        }
        i++
        j--
    }
    return true
};

let input1 = "A man, a plan, a canal: Panama"
let input2 = "race a car"
console.log(isPalindrome(input1)) //true
console.log(isPalindrome(input2)) //false

// Example 1:
// Input: s = A man, a plan, a canal: Panama
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
