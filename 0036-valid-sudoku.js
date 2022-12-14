// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
 var isValidSudoku = function(board) {
    let hor = new Array(9).fill().map(a => new Array(9).fill(0))
    let ver = new Array(9).fill().map(a => new Array(9).fill(0))
    let box = new Array(9).fill().map(a => new Array(9).fill(0))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = parseInt(board[i][j])
            if (num) {
                //checks horizontal to see if num has already been in that row
                if (hor[i][num - 1]) return false
                hor[i][num - 1] = 1

                //checks vertical to see if num has already been in that column
                // if (ver[num - 1][j]) return false
                // ver[num - 1][j] = 1
                if (ver[j][num - 1]) return false
                ver[j][num - 1] = 1

                //"boxNumber" variable, classifies each box as 3x3 sections
                let boxNumber = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (box[boxNumber][num - 1]) return false
                box[boxNumber][num - 1] = 1



            }

        }
    }

};





// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:
// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.
