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

// Postorder traversal just changes the order

doRecursion(root.left, arr);
doRecursion(root.right, arr);
arr.push(root.data);

// inOrder goes like this:

doRecursion(root.left, arr);
arr.push(root.data);
doRecursion(root.right, arr);
