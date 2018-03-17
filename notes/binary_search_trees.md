# Binary Search Trees

### What are they?
- a binary tree in which for each node, the values of all nodes in the left subtree are lesser than or equal to the current node's value, and the values in all nodes of the right subtree are greater than the current value.

### Why use them?

- consider the cost of common operations on these different data structures:

#### Array (unsorted)
- search: O(n)
- insertion (at end, or beginning with ring buffer): O(1)
- deletion: O(n)
 
#### Linked List
- search: O(n)
- insertion (at end of list): O(1)
- deletion: O(n)
- note: linked lists have O(1) insertion/deletion if you're already at the location you want to add/delete at via a pointer.

#### Array (sorted)
- search: O(log(n)) (with binary search)
- insertion: O(n) (have to keep it sorted)
- deletion: O(n)

#### Binary Search Tree (balanced)
- search: O(log(n))
- insertion: O(log(n))
- deletion: O(log(n))
- note: these are average cases.  Worst case for all ops in O(n) for an unbalanced tree.