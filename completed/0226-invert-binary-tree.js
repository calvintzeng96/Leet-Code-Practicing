// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */

var invertTree = function(root) {
    let queue = [root];
    while (queue.length) {
        let current = queue.shift();
        if (current) {
            [current.left, current.right] = [current.right, current.left]
            queue.push(current.left, current.right)
        }
    }
    return root
};

var invertTree = function(root) {
    let stack = [root];
    while (queue.length) {
        let current = queue.pop();
        if (current) {
            [current.left, current.right] = [current.right, current.left]
            queue.push(current.left, current.right)
        }
    }
    return root
};

var invertTree = function(root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }
    return root
}


// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
