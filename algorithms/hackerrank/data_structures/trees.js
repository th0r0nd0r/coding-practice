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
// hackerrank throws an error but the solution works

function treeHeight(root) {
if (root === null) {
      return -1;
  }
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);
  let maxHeight = Math.max(leftHeight, rightHeight) + 1;
  return maxHeight;
}

// level order binary tree traversal

function levelOrder(root) {
  let nodeQueue = [root];
  const nodes = [root.data];
 while (nodeQueue.length > 0) {
     let node = nodeQueue.pop();
     if (node.left) {
         nodeQueue.unshift(node.left);
         nodes.push(node.left.data);
     }
     if (node.right) {
         nodeQueue.unshift(node.right);
         nodes.push(node.right.data);
     }
 }
  
  console.log(nodes.join(' '));
}