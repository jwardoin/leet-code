// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Refactor with hash map

function twoSum(nums, target) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(diff in hash) {
            return [[hash[diff]],i]
        }
        hash[nums[i]] = i
    }
}

// Original Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j <= nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}

// Details

// Runtime: 159 ms, faster than 34.17% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.9 MB, less than 95.31% of JavaScript online submissions for Two Sum.

// Notes
// This is a brute force method of finding the two numbers that equal the target - will refactor when I find a better solution