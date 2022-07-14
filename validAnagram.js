// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 
// Original Solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')    
}

// Details

// Runtime: 161 ms, faster than 17.87% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 48.3 MB, less than 19.05% of JavaScript online submissions for Valid Anagram.

// Notes
// Running the .sort() method for each inputted value is likely the cause for the subpar performance of this solution - in the future, I will find a better solution and refactor