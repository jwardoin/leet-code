// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Original Solution

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = []
    const hashMap = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    // Empty String Returns False
    if(!s) return false
    
    for(let i = 0; i < s.length; i++) {
        let current = s.charAt(i)
        
        // Check if current bracket is a closing 
        if(hashMap[current]) {
            // pop top element from the stack if stack has length - if stack has no length, parentheses are invalid as there is no matching opening bracket for this closing bracket
            let topElement = stack.length === 0 ? 'ya done, son' : stack.pop()

            // check to see that closing bracket matches top element on the stack - if not, parentheses are invalid
            if(topElement !== hashMap[current]) {
                return false                        
            }
        } else {
            // push opening brackets to stack
            stack.push(current)
        }
    }
    
    // if all elements have been popped from the stack, parentheses are valid
    return stack.length === 0   
}

// Details

// Runtime: 102 ms, faster than 33.91% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 43.2 MB, less than 15.56% of JavaScript online submissions for Valid Parentheses.