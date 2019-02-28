var MinStack = {
  createNew: () => (
      {stack: [], trackStack: []}
  )
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
  
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/