// 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

var reorderList = function(head) {

    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next
    slow.next = null
    //head 1st half of ll
    //mid 2nd half of ll

    let prev = null
    let temp;

    while (mid) {
        temp = mid.next
        mid.next = prev
        prev = mid
        mid = temp
    }
    //prev is the reversed 2nd half(mid)

    let left = head
    let right = prev
    while (right) {
        temp = left.next
        left.next = right
        left = temp

        temp = right.next
        right.next = left
        right = temp
    }
    return left
};


// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Constraints:
// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000
