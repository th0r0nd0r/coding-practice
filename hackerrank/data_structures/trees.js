// Preorder Traversal meeting hackerrank's stupid dumb
// requirements for output as space-separated integers
// with a recursive function

function doRecursion(root, arr) {
  if (root === null) {
     return;
 }
  arr.push(root.data);
  doRecursion(root.left, arr);
  doRecursion(root.right, arr);
}

function preOrder(root) {
  const dumbArray = [];
  doRecursion(root, dumbArray);
  console.log(dumbArray.join(' '));
}

// postOrder traversal just changes the order

doRecursion(root.left, arr);
doRecursion(root.right, arr);
arr.push(root.data);

// inOrder goes like this:

doRecursion(root.left, arr);
arr.push(root.data);
doRecursion(root.right, arr);


// Find height of a binary tree

function treeHeight(root) {
  // console.log(root);
if (root === null) {
      return -1;
  }
  let leftHeight = treeHeight(root.left);
  console.log("leftHeight: ", leftHeight);
  let rightHeight = treeHeight(root.right);
  console.log("rightHeight: ", rightHeight);
  let maxHeight = Math.max(leftHeight, rightHeight) + 1;
  console.log("maxHeight: ", maxHeight);
  return maxHeight;
}