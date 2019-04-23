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
  
}