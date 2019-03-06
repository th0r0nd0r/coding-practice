# Adjacency Matrix vs Adjacency List

## Adjacency Matrix

- 2D array of size V^2 (V = # of vertices), with a binary representation of vertex connections
- combined with a vertex list linking array indices to pointers to real nodes

### Big O

#### Space
- O(V^2)

#### Time
- **Finding Adjacent Nodes:** O(V)
  + you have to scan an entire row of 1s and 0s to find all connections
- **Finding if two nodes are connected:** O(1)
  + Since indices in the 2D array correspond directly to nodes, we can index directly like Matrix[0][3] to find if two nodes are connected

### Benefits

- Good for Dense Graphs:
  + finding connections is optimized at O(1)
  + if |E| ~ |V^2| then we're not using much extra space to build the matrix


## Adjacency List

- a 1 or 2D array (depending on implementation) where the **values** (as opposed to **indices**) represent nodes in the graph 
- rows can be implemented with **arrays**, **linked lists** or **BSTs**
  + **arrays**
    - easy to implement
    - finding if 2 nodes are connected takes O(V), unless maintain sorting
    - not dynamic by default, so adding nodes takes extra time (can amortize)
  + **linked lists**
    - dynamic, adding nodes very easy
    - same problem with lookup time
  + **BSTs**
    - extra overhead to maintain balance
    - BUT can find if 2 nodes are connected in O(log(V)) w/ binary search
    