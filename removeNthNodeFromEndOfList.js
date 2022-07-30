// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Original Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let counter = 0
    let pointer = head
    while(pointer.next) {
        pointer = pointer.next
        counter++
    }

    let prev = null
    let current = head
    
    for(let i = 0; i <= counter - n; i++){
        prev = current
        current = current.next
    }

    if(prev) {
        prev.next = current.next
    } else {
        head = current.next
    }
        
    return head
};

// Details
// Runtime: 87 ms, faster than 62.59% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 43 MB, less than 40.79% of JavaScript online submissions for Remove Nth Node From End of List.