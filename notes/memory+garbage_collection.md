# Memory and Garbage Collection

### Memory Leaks
- Allocated memory that is no longer required by an application,
but hasn't been returned to the OS
- many low-level languages require the developer to allocate and deallocate memory manually (e.g. malloc, dealloc in C)
- finding memory leaks is technically an undecidable problem by machines (how can they know what you're thinking?)
- however, many high-level languages get around this by deallocating *unreachable* memory algorithmically in a process know as:

### Garbage Collection
- garbage collection algorithms generally start a tree with roots at the global level (e.g. JavaScript begins with the "window" object)
- the algorithm recursively checks the trees of globals, marking everything that is still being referenced
- any variables, objects, functions (js) that don't have a reference to them are returned to the OS, or "garbage collected"