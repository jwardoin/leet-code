// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Original Solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let listNode = { val: 0, next: null }
    let prev = listNode
    
    while(list1 && list2){
        if(list1.val > list2.val) {
            prev.next = list2
            list2 = list2.next
        } else {
            prev.next = list1
            list1 = list1.next
        }
        prev = prev.next
    }
    
    prev.next = list1 || list2
    
    return listNode.next
}

// Details
// Runtime: 107 ms, faster than 41.39% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 44.1 MB, less than 59.74% of JavaScript online submissions for Merge Two Sorted Lists.