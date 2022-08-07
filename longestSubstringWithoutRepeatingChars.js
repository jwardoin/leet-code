// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Original Solution

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0
    l = 0, r = 1
    let longest = 1
    while(r <= s.length) {
        longest = Math.max(longest, r - l)
        if(s.slice(l, r).includes(s[r])) {
            l++
            r = l
        }
        r++
    }
    return longest
}

// Details
// Runtime: 226 ms, faster than 30.05% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 49 MB, less than 29.57% of JavaScript online submissions for Longest Substring Without Repeating Characters.