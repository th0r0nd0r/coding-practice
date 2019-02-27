# Objects and Weirdness in JavaScript
## (Prototypal Inheritance Explained?)

### [[Prototype]] (prototype chain): a special link to another object
- delegates an alternate object to be referred to if the requested property or method isn't defined on the current object
- indicates an object to delegate behavior to if that behavior isn't defined on the object in question

### Delegation vs Inheritance

- in real Class-based OOP, the 'blueprint' of the class is actually 'copied' and 'flattened-out' onto an instance of said class
- with delegation (like in JS), objects have a special property, called [[Prototype]] which points to another object to delegate methods+properties to if they aren't defined on the current object
- article calls this 'top-down' (inheritance) vs 'bottom-up' (delegation)

**JS doesn't statically analyze what parts of an inheritance chain it can safely flatten out and copy, it maintains links to the entire delegation chain throughout runtime, as distinct objects, which means our code can take advantage of a variety of powerful "late binding" dynamic patterns.**

### instanceof and duck typing
- rather than checking if an object is an instance of a class inherited from a constructor, *instanceof* just asks if one object is in another object's [[Prototype]] chain
- **Duck Typing:** a method of type usage/checking based on the properties and methods important to the task at hand. "If it walks like a duck and quacks like a duck then it must be a duck." 