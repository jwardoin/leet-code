// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.


// Example 1:

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:

// Input: root = [1,2]
// Output: 1

// Original Solution

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    var diameter = 0
    function dfs(node) {
        if(!node) return -1
        var left = dfs(node.left)
        var right = dfs(node.right)
        diameter = Math.max(diameter, 2 + left + right)
        return 1 + Math.max(left, right)
    }
    dfs(root)
    return diameter
};

// Details
// Runtime: 72 ms, faster than 95.02% of JavaScript online submissions for Diameter of Binary Tree.
// Memory Usage: 45.5 MB, less than 69.82% of JavaScript online submissions for Diameter of Binary Tree.