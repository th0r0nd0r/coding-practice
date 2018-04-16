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


class Heap {
  constructor() {
    this.store = [];

    this.count = this.count.bind(this);
    this.peek = this.peek.bind(this);
    this.swap = this.swap.bind(this);
    this.childIndices = this.childIndices.bind(this);
    this.parentIndex = this.parentIndex.bind(this);
    this.heapifyUp = this.heapifyUp.bind(this);
    this.heapifyDown = this.heapifyDown.bind(this);

  }

  count() {
    return this.store.length;
  }

  extract() {
    const extracted = this.store.shift();
    this.store.unshift(this.store.pop());
    this.heapifyDown(0);

    return extracted;
  }

  peek() {
    return this.store[0];
  }

  push(val) {
    this.store.push(val);
    this.heapifyUp(this.count() - 1);
  }

  swap(i, j) {
    if (i < this.count() && j < this.count()) {
      const el1 = this.store[i];
      const el2 = this.store[j];
      this.store[i] = el2;
      this.store[j] = el1;
    }
  }

  childIndices(parentIdx) {
    const length = this.count();
    const indices = [];
    for (let i = 1; i < 3; i++) {
      let childIdx = parentIdx * 2 + i;
      if (childIdx < length ) {
        indices.push(childIdx);
      }
    }

    return indices;
  }

  parentIndex(childIdx) {
    if (childIdx === 0) {
      throw "root has no parent";
    }

    return Math.trunc((childIdx - 1) / 2);
  }

  heapifyDown(parentIdx) {
    const childIdcs = this.childIndices(parentIdx);
    if (childIdcs.length > 0) {
      let minChildIdx;
      if (childIdcs.length === 2) {
        const leftChild = this.store[childIdcs[0]];
        const rightChild = this.store[childIdcs[1]]; 
        if (leftChild >= rightChild) {
          minChildIdx = childIdcs[0];
        } else {
          minChildIdx = childIdcs[1];
        }
      } else if (childIdcs.length === 1) {
        minChildIdx = childIdcs[0];
      }

      const minChild = this.store[minChildIdx];
      const parent = this.store[parentIdx];

      if (parent < minChild) {
        this.swap(parentIdx, minChildIdx);
        this.heapifyDown(minChildIdx);
      }
    }
  }

  heapifyUp(childIdx) {
    if (childIdx !== 0) {
      let parentIdx = this.parentIndex(childIdx);
      let parent = this.store[parentIdx];
      let child = this.store[childIdx];

      if (child > parent) {
        this.swap(childIdx, parentIdx);
        if (parentIdx !== 0) {
          this.heapifyUp(parentIdx);
        }
      }
    }
  } 

}

class Point {
    constructor(l,r,h) {
        this.left = l;
        this.right = r;
        this.height = h;
    }
}

class SortedPoints {
    constructor() {
        this.compare = function compare(a,b) {
            if (a.right < b.right) {
                return -1;
            } else if (a.right === b.right) {
                return 0;
            } else {
                return 1;
            };
        }   
        this.points = [];
        
        this.push = this.push.bind(this);
        this.sort = this.sort.bind(this);
        this.extract = this.extract.bind(this);
    }
    
    push(val) {
        this.points.push(val);
        this.sort();
    }
    
    sort() {
        this.points.sort(this.compare);
    }
    
    extract() {
        const val = this.points.shift();
        this.sort();
        return val;
    }
    
    first() {
        return this.points[0];
    }
    
    length() {
        return this.points.length;
    }
}

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