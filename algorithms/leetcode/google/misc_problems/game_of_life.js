const board = [
[0,1,0],
[0,0,1],
[1,1,1],
[0,0,0]
];


// non in-place version

// function nextValue(board, i, j) {
//     const m = board.length;
//     const n = board[0].length;
//     const maxA = i + 1 < m ? i + 2 : m;
//     const maxB = j + 1 < n ? j + 2 : n;
    
//     let numNeighbors = 0;
    
//     for (let a = i > 0 ? i - 1 : 0; a < maxA; a++) {
//         for (let b = j > 0 ? j - 1 : 0; b < maxB; b++) {
//             if (a === i && b === j) {
//                 continue;
//             }
//             if (board[a][b] === 1) {
//                 numNeighbors++;
//             }
//         }
//     }
    
//     let newValue = board[i][j];
    
//     if (board[i][j] === 0) {
//         if (numNeighbors === 3) {
//             newValue = 1;
//         }
//     } else {
//         if (numNeighbors > 3 || numNeighbors < 2) {
//             newValue = 0;
//         }
//     }
    
//     return newValue;
// }

// var gameOfLife = function(board) {
//     const nextBoard = [];
//     for (let i = 0; i < board.length; i++) {
//         nextBoard.push(new Array(board[0].length));
//     }
    
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             const newValue = nextValue(board, i, j);
//             nextBoard[i][j] = newValue;
//         }
//     }
//     console.log(nextBoard);
//     return nextBoard;
// };


// in-place version
function nextValue(board, i, j) {
    const m = board.length;
    const n = board[0].length;
    const maxA = i + 1 < m ? i + 2 : m;
    const maxB = j + 1 < n ? j + 2 : n;
    
    let numNeighbors = 0;
    
    for (let a = i > 0 ? i - 1 : 0; a < maxA; a++) {
        for (let b = j > 0 ? j - 1 : 0; b < maxB; b++) {
            if (a === i && b === j) {
                continue;
            }
            if (board[a][b] === 1 || board[a][b] === 3) {
                numNeighbors++;
            }
        }
    }
    
    let newValue = board[i][j];
    
    if (board[i][j] === 0) {
        if (numNeighbors === 3) {
            newValue = 2;
        }
    } else {
        if (numNeighbors > 3 || numNeighbors < 2) {
            newValue = 3;
        }
    }
    
    return newValue;
}

function translateValues(board) {
    const valueMap = {
        0: 0,
        1: 1,
        2: 1,
        3: 0
    };
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = valueMap[board[i][j]];
        }
    }
}

var gameOfLife = function(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const newValue = nextValue(board, i, j);
            board[i][j] = newValue;
        }
    }
    
    translateValues(board);

    return board;
};

gameOfLife(board);
