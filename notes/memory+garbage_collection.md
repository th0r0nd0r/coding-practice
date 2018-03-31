# Memory and Garbage Collection

### Memory Leaks
- Allocated memory that is no longer required by an application,
but hasn't been returned to the OS
- many low-level languages require the developer to allocate and deallocate memory manually (e.g. malloc, dealloc in C)
- finding memory leaks is technically an undecidable problem by machines (how can they know what you're thinking?)
- however, many high-level languages get around this by deallocating *unreachable* memory algorithmically in a process known as:

### Garbage Collection
- garbage collection algorithms generally start a tree with roots at the global level (e.g. JavaScript begins with the "window" object)
- this "mark-and-sweep" algorithm recursively checks the trees of globals, marking everything that is still being referenced
- any variables, objects, functions (js) that don't have a reference to them are returned to the OS, or "garbage collected"

##### The main cause for leaks in garbage collected languages is unwanted references
- an unwanted reference is a pointer to a piece of memory that is no longer needed in a program
- this is basically the dearth between deterministic garbage collection algorithms, and the undecidable (mostly human) element of finding memory leaks

### 3 Common Leak Types in JavaScript

##### Accidental Global Variables
- if you don't declare with let, const, or var, the variable is implicitly declared in the global scope (on the window), eg:

```javascript
function someFunc() {
  a = "hidden global variable"
}
```
is equivalent to: 
```javascript
function someFunc() {
  window.a = "hidden global variable"
}
```

- global variables won't be garbage collected
- avoid having large global variables, even explicitly
- beware of large caches for this reason
