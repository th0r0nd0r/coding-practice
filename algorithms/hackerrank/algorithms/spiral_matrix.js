var spiralOrder = function(matrix) {
  const output = [];
  if (matrix.length === 0) return output;
  // let finished = false;
  
  const nextDirs = {
      'right':'down',
      'down':'left',
      'left':'up',
      'up':'right'
  }
  
  let dir = 'right';
  const visited = [];
  const height = matrix.length;
  const width = matrix[0].length;
  let i = 0, j = 0;
  const nextCoords = {nextI: 0, nextJ: 0};
  
  for (let i = 0; i < matrix.length; i++) {
      visited.push(new Set());
  }
  
  function increment() {
      // console.log("dir: ", dir);
          switch(dir) {
              case 'right':
                  nextCoords.nextJ++;
                  break;
              case 'down':
                  nextCoords.nextI++;
                  break;
              case 'left':
                  nextCoords.nextJ--;
                  break;
              case 'up':
                  nextCoords.nextI--;
                  break;
          }
  }
  
  while (true) {
      output.push(matrix[i][j]);
      visited[i].add(j);
      
      increment();
      
      let dirSwitches = 0;
      while (nextCoords.nextI >= height || nextCoords.nextJ >= width || nextCoords.nextI < 0 || nextCoords.nextJ < 0 || visited[nextCoords.nextI].has(nextCoords.nextJ)) {
      
          if (dirSwitches >= 4) {
              return output;
          }
          
          dir = nextDirs[dir];
          dirSwitches++;
          nextCoords.nextI = i;
          nextCoords.nextJ = j;
          increment();
      } 
      i = nextCoords.nextI;
      j = nextCoords.nextJ;
  }
  
};

































// solved the wrong problem here: printed the matrix alternating forwards and backwards
// function iterateForwards(arr, func, j=0) {
//   for (var i = 0; i < arr.length; i++) {
//       func(arr[i]);
//   }
//   return arr.length - 1;
// }

// function iterateBackwards(arr, func, j) {
//   for (var i = j; i >= 0; i--) {
//       func(arr[i]);
//   }
//   return 0;
// }

// var spiralOrder = function(matrix) {
//   let forwards = true;
//   const output = [];
//   let j = 0;
//   const addNum = (num) => output.push(num);
  
//   matrix.forEach((subArr, i, m) => {
//       if (j === 0) {
//           j = iterateForwards(subArr, addNum);
//       } else {
//           j = iterateBackwards(subArr, addNum, j);
//       }
//   });

//   return output;
// };
