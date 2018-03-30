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
  const board = new Array(n);
  board.forEach(function(arr) {
    arr = new Array(n);
  });
  console.log(board);
  
  // create this function inside n queens function so it has access to the 2d chess board
  function queenSafe(row, col) {
    for (let i = 0; i < n; i++) {
      let horizontal = board[row[i]];
      let vertical = board[col[i]];
      if (horizontal || vertical) {
        return false;
      }
    }

    const reset = Math.min(row,col);

    for (let i = row - reset, j = col - reset; i < n && j < n; i++, j++) {
      if (board[i][j]) {
        return false;
      }
    }
    for (let i = row - reset, j = col + reset; i < n && j >= 0; i++, j--) {
      if (board[i][j]) {
        return false;
      }
    }

    return true;
  }

  function nQueensBacktrack(row) {
    for (let i = 0; i < n; i++) {
      if (queenSafe(row, i)) {
        board[row[i]] = "Q";
        if (row === n - 1) {
          console.log(board);
        } else {
          nQueensBacktrack(row + 1);
        }
      }
    }
  }
  
  
};