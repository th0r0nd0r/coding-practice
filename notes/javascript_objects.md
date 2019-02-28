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

### Type safety
- important in strongly-typed languages like Java that need a type declaration for variable assignment, e.g.
```
String one = 'one'
```
the compiler will throw an error if you try to assign the wrong type:
```
String one = 1
```
operations will also fail if the operator doesn't have a defined meaning for a data type, ex:
```
"hello" * 4
```
JavaScript is not type safe as it is both loosely-typed and does all kinds of type coercion in order to prevent browser crashes.

### scoping of *this* in the prototype chain
"JavaScript provides a this property, but importantly it is always rooted at the bottom of the [[Prototype]] chain, not whatever level of the chain the current function was found at. While it's true that this.foobar() might end up resolving (finding) foobar() at an ancestor level of the chain, inside that call, his this will still be the original rooted this object."

### .constructor property

"So we have to change how we think of what the .constructor property means. It does not mean "the constructor this object was created by". It actually means "the constructor which creates any objects that end up getting [[Prototype]] linked to this object.""