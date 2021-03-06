# Heaps

- most use cases are for priority queues

### Priority Queues
- like a regular queue, but some items have priority over others, e.g. with gold, silver and bronze, it could look like:

B => B => S => S => S => G => G

- items with higher priority have to be closer to the front

### Heap ADT Rules
- Usually represented as binary trees (binary heap)
(the rest of this section will focus on binary heaps)

- Can be either Min or Max Heap (each node's children are greater than/less than itself)

1 - Must be a Complete Tree (nodes fill in each level from left to right with no gaps)
2 - Each node must obey the Heap Property (>= || <= parent)

#### Time Complexity Requirements
- Peek: O(1)
- Insert: O(log n)
- Extract: O(log n)

### Heap DS Implementation (Array)
 
#### Finding Child Indices
- Left Child: 2i + 1
- Right Child: 2i + 2

#### Finding Parent Index (Integer Division)
- Parent: (i - 1) / 2
- Only works for Integer division