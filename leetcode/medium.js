// (stacks) inorder binary tree traversal
var inorderTraversal = function(root) {
  const returnArr = [];
  console.log(root);
  
  if (root) {
      if (root.left) {
          const left = inorderTraversal(root.left);
          left.forEach(function(el) {
              returnArr.push(el); 
          });
      }

      returnArr.push(root.val);

      if (root.right) {
          const right = inorderTraversal(root.right);
          right.forEach(function(el) {
              returnArr.push(el); 
          });
      }
  }

  return returnArr;
};