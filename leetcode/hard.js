// (stacks) postorder binary tree traversal
var postorderTraversal = function(root) {
  const returnArr = [];
  
  if (root) {
      if (root.left) {
          const left = postorderTraversal(root.left);
          left.forEach(function(el) {
              returnArr.push(el); 
          });
      }


      if (root.right) {
          const right = postorderTraversal(root.right);
          right.forEach(function(el) {
              returnArr.push(el); 
          });
      }
      
      returnArr.push(root.val);
  }

  return returnArr;
};

// n queens

var solveNQueens = function(n) {
  // const testBoard = [ 
  //   [ 'Q', '.', '.', '.' ],
  //   [ '.', '.', '.', 'Q' ],
  //   [ '.', '.', '.', '.' ],
  //   [ '.', '.', '.', '.' ] ];

  const board = [];
  for (let i = 0; i < n; i++) {
    let emptyRow = [];
    for (let j = 0; j < n; j ++) {
      emptyRow.push('.');
    }
    board.push(emptyRow);
  }
  console.log("initialized board: ", board);
  
  // create this function inside n queens function so it has access to the 2d chess board
  function queenSafe(row, col) {
    for (let i = 0; i < n; i++) {
      let horizontal = board[row][i];
      let vertical = board[i][col];
      if (horizontal === "Q" || vertical === "Q") {
        // console.log("horizontal: ", [row, i]);
        // console.o
        return false;
      }
    }

    const reset = Math.min(row,col);

    for (let i = row - reset, j = col - reset; i < n && j < n; i++, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    for (let i = row - reset, j = col + reset; i < n && j >= 0; i++, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  }

  console.log(queenSafe(2,0));
  console.log(queenSafe(2,1));
  console.log(queenSafe(2,2));
  console.log(queenSafe(2,3));

  function nQueensBacktrack(row) {
    console.log("row: ", row);
    for (let i = 0; i < n; i++) {
      console.log("col: ", i);
      console.log();
      if (queenSafe(row, i)) {
        board[row][i] = "Q";
        console.log("queen is safe");
        console.log(board);
        console.log();

        if (row === (n - 1)) {
          console.log("final row");
          console.log(board);
          console.log();

        } else {
          console.log("next row");
          nQueensBacktrack(row + 1);
          board[row][i] = ".";
        }
      }
    }
  }


  nQueensBacktrack(0);
  console.log(board);
};

solveNQueens(4);

