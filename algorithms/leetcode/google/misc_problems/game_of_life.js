const board = [
[0,1,0],
[0,0,1],
[1,1,1],
[0,0,0]
];

function nextValue(board, i, j) {
    const m = board.length;
    const n = board[0].length;
    const maxA = i + 1 < m ? i + 2 : m;
    const maxB = j + 1 < n ? j + 2 : n;
    
    for (let a = i > 0 ? i - 1 : 0; a < maxA; a++) {
        for (let b = j > 0 ? j - 1 : 0; b < maxB; b++) {
            if (a === i && b === j) {
                continue;
            }
            
            
        }
    }
}

var gameOfLife = function(board) {
    const nextBoard = [];
    for (let i = 0; i < board.length; i++) {
        nextBoard.push(new Array(board[0].length));
    }
    console.log(nextBoard);
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            nextBoard[i][j] = nextValue(board, i, j);
        }
    }
    
    return nextBoard;
};

gameOfLife(board);
