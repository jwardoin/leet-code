// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
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

// Original Solution

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let onlyChars = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
    let reverse = []
    for(let i = 0; i <= onlyChars.length; i++) {
        reverse.push(onlyChars[onlyChars.length - 1 - i])
    }
    return reverse.join("") === onlyChars
}

// Details

// Runtime: 82 ms, faster than 86.14% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 47.6 MB, less than 29.16% of JavaScript online submissions for Valid Palindrome.
