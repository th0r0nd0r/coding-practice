# Objects and Weirdness in JavaScript
## (Prototypal Inheritance Explained?)

### [[Prototype]] (prototype chain): a special link to another object
- delegates an alternate object to be referred to if the requested property or method isn't defined on the current object
- indicates an object to delegate behavior to if that behavior isn't defined on the object in question

### Delegation vs Inheritance

- in real Class-based OOP, the 'blueprint' of the class is actually 'copied' and 'flattened-out' onto an instance of said class
- with delegation (like in JS), objects have a special property, called [[Prototype]] which points to another object to delegate methods+properties to if they aren't defined on the current object
- article calls this 'top-down' (inheritance) vs 'bottom-up' (delegation)