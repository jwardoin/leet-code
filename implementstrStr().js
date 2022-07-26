// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Original Solution with Naive String Search

/**
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i+j] !== needle[j]) break;
            if(j === needle.length - 1) return i;
        }
    }
    return -1;
}

// Details

// Runtime: 81 ms, faster than 62.03% of JavaScript online submissions for Implement strStr().
// Memory Usage: 42.6 MB, less than 15.79% of JavaScript online submissions for Implement strStr().