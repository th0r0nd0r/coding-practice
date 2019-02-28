/**
 * initialize your data structure here.
 */
function MinStack() {
  this.stack = []; 
  this.trackStack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.trackStack.length < 1 || x < this.trackStack[this.trackStack.length - 1]) {
      this.trackStack.push(x);
  } else {
      this.trackStack.push(this.trackStack[this.trackStack.length -1]);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.trackStack.pop();
  return this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.trackStack[this.trackStack.length - 1];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/