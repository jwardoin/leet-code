// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Original Solution

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// Details
// Runtime: 94 ms, faster than 65.54% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 44.9 MB, less than 81.66% of JavaScript online submissions for Maximum Depth of Binary Tree.