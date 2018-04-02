# Heaps

- most use cases are for priority queues

### Priority Queues
- like a regular queue, but some items have priority over others, e.g. with gold, silver and bronze, it could look like:

B => B => S => S => S => G => G

- items with higher priority have to be closer to the front

### Heap Implementation
- Usually represented as binary trees (binary heap)
(the rest of this section will focus on binary heaps)

- Can be either Min or Max Heap (each node's children are greater than/less than itself)

1 - Must be a Complete Tree (nodes fill in each level from left to right with no gaps)
2 - Each node must obey the Heap Property (>= || <= parent)

#### Time Complexity Requirements
- Peek: O(1)
- Insert: O(log n)
- Extract: O(log n)