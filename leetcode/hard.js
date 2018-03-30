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
      let vertical = board[col][i];
      if (horizontal === "Q" || vertical === "Q") {
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

  function nQueensBacktrack(row) {
    console.log("row: ", row);
    for (let i = 0; i < n; i++) {
      console.log("col: ", i);
      console.log();
      if (queenSafe(row, i)) {
        console.log("puttin in this row: ", board[row]);
        board[row][i] = "Q";
        console.log("queen is safe");
        console.log(board);
        console.log();

        if (row === (n - 1)) {
          console.log("final row");
          console.log(board);
          console.log();

        } else {
          console.log("backtracking...");
          nQueensBacktrack(row + 1);
        }
      }
    }
  }
  console.log("asdf");
  nQueensBacktrack(0);
  console.log(board);
};

solveNQueens(4);