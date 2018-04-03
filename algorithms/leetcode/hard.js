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
  const solutions = [];
  for (let i = 0; i < n; i++) {
    let emptyRow = [];
    for (let j = 0; j < n; j ++) {
      emptyRow.push('.');
    }
    board.push(emptyRow);
  }

  function queenSafe(row, col) {
    for (let i = 0; i < n; i++) {
      let horizontal = board[row][i];
      let vertical = board[i][col];
      if (horizontal === "Q" || vertical === "Q") {
        return false;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
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

        if (row === (n - 1)) { 
          let stringBoard = [];
          board.forEach(function(rw) {
            let stringRow = rw.join('');
            stringBoard.push(stringRow);
          });
          solutions.push(stringBoard);

        } else {
          nQueensBacktrack(row + 1);
        }
        board[row][i] = ".";
      }
    }

    return false;
  }


  nQueensBacktrack(0);
  return solutions;

};

