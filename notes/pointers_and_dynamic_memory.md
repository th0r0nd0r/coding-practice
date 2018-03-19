# Pointers and Dynamic Memory

## The Four Segments of Application Memory

----
#### Code (Text)
- stores the instructions for the machine to execute

#### Static/Global
- stores global variables in the application

#### Stack
- stores function calls/local variables
----

- The memory allocated for the above segments is fixed for the entire runtime of an application.
- ex: if the stack size exceeds the allocated stack memory, you get a StackOverflow error

#### Heap (Dynamic Memory)
- dynamically sized store of memory that a programmer can use more freely
- not an implementation of the heap data structure
- "a function can allocate memory to the heap if it wants the data to live longer than itself"

### Stack vs. Heap
- the stack is an actual implementation of a stack data structure
- stack is LIFO and linear
- the top item on the stack must resolve before moving on to items below

- for heaps, there is no enforced pattern to the allocation/deallocation of memory
