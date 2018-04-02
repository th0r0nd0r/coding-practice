// "heap" with search functionality to find arbitrary elements

function processData(input) {
  const heap = [];
  const inputArr = input.split('\n');
  inputArr.splice(0,1);
  // console.log(inputArr);
  
  inputArr.forEach(function(el, i) {
      if (el[0] === '3') {
          // shift the first element and heapify down            
      } else if (el[0] === '1') {
          // push the element and heapify up            
      } else {
          // use DFS to find the given element,
          // swap with first element
          // heapify up
      }
  });
} 

class Heap {
  constructor() {
    this.store = [];

    this.count = this.count.bind(this);
    this.peek = this.peek.bind(this);
    this.swap = this.swap.bind(this);
    this.childIndices = this.childIndices.bind(this);

  }

  count() {
    return this.store.length;
  }

  extract() {

  }

  peek() {
    return this.store[0];
  }

  push() {

  }

  swap(i, j) {
    [i,j] = [j,i];
  }

  childIndices(parentIdx) {
    const length = this.count();
    const indices = [];
    for (let i = 1; i < 3; i++) {
      let childIdx = parentIdx * 2 + i;
      if (childIdx < length ) {
        indices.push(childIdx);
      }
    }

    return indices;
  }

  parentIndices() {

  }

  heapifyDown() {

  }

  heapifyUp() {

  }

}