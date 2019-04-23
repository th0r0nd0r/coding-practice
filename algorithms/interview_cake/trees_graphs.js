class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(value) {
    this.left = new BinaryTreeNode(value);
  }

  addRight(value) {
    this.right = new BinaryTreeNode(value);
  }

}

// determine if the max difference between lengths of binary tree branches is <= 1
function isSuperBalanced(baseNode) {
  let maxHeight = 0, minHeight = 0;
  let currHeight = 0;
  // the stack also stores the height of each node
  const stack = [{node: baseNode, height: 0}];

  while (stack.length) {
    if (maxHeight - minHeight > 1) {return false;
    }
    const nodeObj = stack.pop();
    currHeight = nodeObj.height;
    const node = nodeObj.node;

    if (!node.left && !node.right) {
      if (currHeight > maxHeight) {
        maxHeight = currHeight;
      }
      if (currHeight < minHeight) {
        minHeight = currHeight;
      }
    } else {
      if (node.right) {stack.push({node: node.right, height: currHeight + 1});}
      if (node.left) {stack.push({node: node.left, height: currHeight + 1});}
    }
  }

  return (maxHeight - minHeight <= 1);
}