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
let n;
let board;

// create this function inside n queens function so it has access to the 2d chess board
function queenSafe(coords) {
    for (let i = 0, j = 0; i < n && j < n; i++, j++) {

    }
}