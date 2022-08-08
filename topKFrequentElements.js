// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Original Solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const result = []
    let hash = {}
    let bucket = Array.from({ length: nums.length + 1 }, () => [])
    
    for(const n of nums) {
        hash[n] = (n in hash) ? 1 + hash[n] : 1
    }
    
    for(const c in hash) {
        bucket[hash[c]].push(c)
    }
        
    for(let i = bucket.length - 1; i >= 0; i--) {
        if(bucket[i].length > 0) {
            bucket[i].forEach(e => result.push(e))
            if(result.length === k) return result
        }
    }
    
};

// Details
// Runtime: 233 ms, faster than 7.20% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 50.7 MB, less than 9.90% of JavaScript online submissions for Top K Frequent Elements.