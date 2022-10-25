// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
    let total = 0
    let array = s.split("")
    while (array.length !== 0) {
        let lastIndex = array[array.length - 1]
        let secondToLast = array[array.length - 2]
        if (lastIndex === "I") {
            total += 1
        } else if (lastIndex === "V" && secondToLast === "I") {
            total += 4
            array.pop()
        } else if (lastIndex === "V") {
            total += 5
        } else if (lastIndex === "X" && secondToLast === "I") {
            total += 9
            array.pop()
        } else if (lastIndex === "X") {
            total += 10
        } else if (lastIndex === "L" && secondToLast === "X") {
            total += 40
            array.pop()
        } else if (lastIndex === "L") {
            total += 50
        } else if (lastIndex === "C" && secondToLast === "X") {
            total += 90
            array.pop()
        } else if (lastIndex === "C") {
            total += 100
        } else if (lastIndex === "D" && secondToLast === "C") {
            total += 400
            array.pop()
        } else if (lastIndex === "D") {
            total += 500
        } else if (lastIndex === "M" && secondToLast === "C") {
            total += 900
            array.pop()
        } else if (lastIndex === "M") {
            total += 1000
        }
        array.pop()
    }
    return total
};

// input1 = "III" //3
// input2 = "MCMXCIV" //1994
// console.log(romanToInt(input1))
// console.log(romanToInt(input2))






// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].
