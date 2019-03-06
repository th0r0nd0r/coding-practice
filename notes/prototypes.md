# FINALLY THE DIFFERENCE BETWEEN PROTOTYPES

- there are two different things called prototype because why the heck not

- Constructor functions have a .prototype property
  + this is **NOT** the prototype of the constructor function (in the inheritance sense)
  + it is simply a normal object property that references what the prototype **WILL BE** of an object **CREATED BY** the constructor function
  + the constructor's .prototype object also has a .constructor property referencing back to the constructor function

- all objects have a *special* [[Prototype]] property:
  + this is what the object *actually* "inherits" from
  + this represents the object that will be looked to for methods/properties that aren't defined on the current object, going on up the inheritance chain
  + for objects created by a constructor function, this special **[Prototype]]** will be set to the **constructor's** **.prototype** property
  + access this *"real"* prototype with the .__proto__ method (or Object.getPrototypeOf(obj))

## EXAMPLE

