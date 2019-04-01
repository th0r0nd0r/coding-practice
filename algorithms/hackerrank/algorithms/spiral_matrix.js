

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