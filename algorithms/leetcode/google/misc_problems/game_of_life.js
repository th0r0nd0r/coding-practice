const board = [
[0,1,0],
[0,0,1],
[1,1,1],
[0,0,0]
];

var gameOfLife = function(board) {
  const nextBoard = [];
  for (let i = 0; i < board.length; i++) {
      board.push(new Array(board[0].length));
  }
  console.log(nextBoard);
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          // let neighbors = 0;
//             check all adjacent blocks
      }
  }
  
  return nextBoard;
};


