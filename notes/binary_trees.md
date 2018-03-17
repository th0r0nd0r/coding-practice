# Binary Trees

## General Properties

- each node has at most 2 children

#### Strict Binary Tree
- each node can have 0 or 2 children

#### Complete Binary Tree
- all levels except (maybe) last are filled
- unfilled nodes are as far left as possible

#### Perfect Binary Tree
- every level totally filled

#### Node Levels/Height
- first node is at level 0
- height of tree = # of edges
- max # of nodes at level i = 2^i

#### Balanced Binary Tree
- difference between height of left and right subtrees for each node is no more than k (k is usually 1)
- helps keep time complexity down

#### Ways to Represent
- dynamically created nodes (like a linked list)
- arrays (usually for complete trees)
  + right child index = 2i + 1
  + left child index = 2i + 2

## Traversing a Binary Tree

#### Preorder
<root><left><right>
#### Inorder
<left><root><right>
#### Post
<left><right><root>