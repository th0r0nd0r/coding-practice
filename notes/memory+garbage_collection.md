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

#### 1. Accidental Global Variables
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

# Accidental Globals with 'this' Keyword
BIG ONE HERE

in JS, all functions are firstclass objects. You'd think that invoking one would always create a new local scope, and bind the 'this' context to it. Not so!

- 'this' is dynamically assigned whenever a function is invoked
- when a function is invoked as a *method*, _i.e. obj.method_, _'this'_ is bound to _'obj'_
- However, when a funtion is invoked *by itself*, like so: _function()_, _'this'_ becomes the _global namespace_

```javascript
function foo() {
    this.variable = "potential accidental global";
}

foo();
variable //=> "potential accidental global"
```

```javascript
function bar() {
    this.prop = "another accidental global";
}

class SomeClass {
  constructor() {
    this.bar = bar();
  }
}

let cls = new SomeClass();

prop //=> "another accidental global"
```

```javascript
function fizz() {
    this.buzz = "yet another accidental global";
}

class AnotherClass {
  constructor() {
  }

  makeGlobalVariable() {
    fizz();
  }
}

let cls = new AnotherClass();

buzz //=> "yet another accidental global"
```
As you can see, invoking a function on its own will reassign the context to global *even if* the invocation was in a local context.

- this is why we bind the context of a class's instance methods in the constructor, like this:

```javascript
function foo() {
    this.variable = "l o c a l b o y e";
}

class SomeClass {
  constructor() {
    this.foo = foo.bind(this);
    this.makeLocalVariable = this.makeLocalVariable.bind(this);
  }

  makeLocalVariable() {
    this.constructor.variable = this.foo();
  }

}

let cls = new SomeClass();

variable //=> ReferenceError: variable is not defined
```



- global variables won't be garbage collected
- avoid having large global variables, even explicitly
- beware of large caches for this reason


#### 2. Forgotten timers or callbacks

#### 3. Out of DOM References
- if you store DOM nodes in an outside data structure, make sure to delete the data structure if you delete the nodes
- references to inner nodes: if you store a reference to a child node and then remove its parent from the DOM tree, the parent will still remain in memory
- make sure to remove references to a node's children if you want to delete it's entire subtree

