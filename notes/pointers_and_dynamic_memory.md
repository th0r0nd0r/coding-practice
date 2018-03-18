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