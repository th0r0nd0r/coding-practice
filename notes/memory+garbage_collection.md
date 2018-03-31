# Memory and Garbage Collection

### Memory Leaks
- Allocated memory that is no longer required by an application,
but hasn't been returned to the OS
- many low-level languages require the developer to allocate and deallocate memory manually (e.g. malloc, dealloc in C)
- finding memory leaks is technically an undecidable problem by machines (how can they know what you're thinking?)
- however, many high-level languages get around this by deallocating *unreachable* memory algorithmically

### Garbage Collection