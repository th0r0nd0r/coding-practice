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


// the skyline problem




// initialize points array
// create sorted array/list to store rightside and height (sorted by rightside)
// create binary max heap to store building heights (pre-filled with 0 for the ground)

// iterate through coords
// push first into points
// - for each coord:
//      - push rightside + height onto sorted list
//      - if MaxHeap.max == 0:
//          - push new coord with x = l, y = h
//      - add height to MaxHeap
// - if left > min el on sorted list || if just added the final el:
//      - remove els from list until left < min el (or until empty if last el added)
//      - for every el removed from list:
//            - if height of el == MaxHeap.max:
//                  - remove from maxheap
//                  - if maxheap height changes:
//                      - push new point to array with x = r (from sorted list), y = new max height

// if h > hprev:
//     - push coords into array





var getSkyline = function(buildings) {
    const critPoints = [];
    const sortedPoints = new SortedPoints();
    const heap = new Heap();
    heap.push(0);
    
    for (let i = 0; i < buildings.length; i++) {
        let b = buildings[i];
        let pt = new Point(b[0],b[1],b[2]);
        sortedPoints.push(pt);
        // console.log(sortedPoints.points);
        if (pt.height > heap.peek()) {
            critPoints.push([
                pt.left,
                pt.height
            ]);
            console.log("new highest");
            console.log(critPoints);
            console.log();
        }
        heap.push(pt.height);
        
        if (pt.left > sortedPoints.first() || i === buildings.length - 1) {
            while (pt.left > sortedPoints.first() || (i === buildings.length - 1 && sortedPoints.length() > 0)) {
                let el = sortedPoints.extract();
                let maxHeight = heap.peek();
                
                
                
//                 BUG IS HERE:
//                 NEED TO EXTRACT THE POINT FROM THE HEAP REGARDLESS OF IF IT WAS MAX
//                 NEED TO ADD METHOD TO EXTRACT ARBITRARY POINT FROM HEAP
                
                
                
                if (el.height === maxHeight) {
                    heap.extract();
                    let newHeight = heap.peek();
                    if (newHeight !== maxHeight) {
                        critPoints.push([
                            el.right,
                            newHeight
                        ])
                        console.log("height decrease");
                        console.log(critPoints);
                        console.log();
                    }
                }
            }
        }
    }
    console.log(sortedPoints);
    return critPoints;
};