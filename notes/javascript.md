# JavaScript Notes

### Creating Functions

```javascript
// different ways to create functions


// function expressions
const func = function() {
  // some code
};

// - only defined when that line is reached in the code



// function declarations
function f() {
  // some code
}

// - declaration is hoisted



// fat arrows
let a = () => {

};

// - don't have their own this
// - close over this when created and hold onto it anywhere in the code
```

### Modulo Operator

- languages like Python and Ruby treat negative divisors as (n-divisor), where n is the dividend, e.g:
(-5 % 14) ==> 9
- JavaScript just treats them like negative numbers, e.g:
(-5 % 14) ==> -5