# Binary Search Trees

### Why use them?

- consider the cost of common operations on these different data structures:

#### Array (unsorted)
- search: O(n)
- insertion (at end, or beginning with ring buffer): O(1)
- deletion: O(n)

#### Linked List
- search: O(n)
- insertion: O(1)
- deletion: O(n)

#### Array (sorted)
- search: O(log(n)) (with binary search)
- insertion: O(n) (have to keep it sorted)
- deletion: O(n)