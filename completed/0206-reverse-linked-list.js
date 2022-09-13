// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// var reverseList = function(head) {
//     let c = head;
//     let prev = null;
//     let next;

//     while (c !== null) {
//         next = c.next
//         c.next = prev
//         prev = c
//         c = next
//     }
//     return prev
// };



// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
