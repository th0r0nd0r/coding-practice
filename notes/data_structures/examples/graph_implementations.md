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

### Drawbacks

- Bad for Sparse Graphs:
  + most real world graphs are sparse
  + uses a TON of extra space
  + Ex: scanning one row of connections in a social network w/ a billion people will take over *16 minutes*


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

### Big O

#### Space
- O(E)

#### Time
- **Finding Adjacent Nodes:** O(V) (worst case), but in real world will be much smaller
- **Finding if two nodes are connected:** O(V) (unsorted rows) or O(log(V)) (sorted rows)

### Benefits

- good for Sparse Graphs
  + most real world graphs are sparse
  + if a graph is sparse, finding adjacent + connected nodes will take *much* less than O(V)
  + for example, if we assume a social network user has maximum 1,000 friends, both operations will take ~10ms, since a row's length will never approach the max of V length

### Drawbacks

- bad for Dense Graphs
  + in a graph where |E| ~ |V^2|, both operations will take close to the worst-case (linear) time

# Conclusion

- For sparse graphs (most real world scenarios), choose the Adjacency List implementation
- For dense graphs, go for the Adjacency Matrix