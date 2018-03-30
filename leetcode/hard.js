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
  const emptyRow = [];
  for (let i = 0; i < n; i ++) {
    emptyRow.push('.');
  }
  for (let i = 0; i < n; i++) {
      board.push(emptyRow);
  }
  
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
    for (let i = 0; i < n; i++) {
      if (queenSafe(row, i)) {
        board[row][i] = "Q";
        if (row === n - 1) {
          console.log(board);
        } else {
          nQueensBacktrack(row + 1);
        }
      }
    }
  }
  console.log("asdf");
  console.log(nQueensBacktrack(0));
  console.log(board);
};

solveNQueens(4);