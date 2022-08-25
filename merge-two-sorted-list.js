// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {

    let curr = new ListNode()
    let holder = curr
    while(list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next;
        } else {
            curr.next = list2
            list2 = list2.next;
        }
        curr = curr.next
    }
    if (list1) {
        curr.next = list1
    } else {
        curr.next = list2
    }
    return holder.next
};

// let list1 = [1,2,4]
// let list2 =[1,3,4]
// console.log(mergeTwoLists(list1, list2)) //[1,1,2,3,4,4]
// let list3 = []
// let list4 = []
// console.log(mergeTwoLists(list3, list4)) //[]


// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
