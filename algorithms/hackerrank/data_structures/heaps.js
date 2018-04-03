class Heap {
  constructor() {
    this.store = [];

    this.count = this.count.bind(this);
    this.peek = this.peek.bind(this);
    this.swap = this.swap.bind(this);
    this.childIndices = this.childIndices.bind(this);
    this.parentIndex = this.parentIndex.bind(this);
    this.heapifyUp = this.heapifyUp.bind(this);
    this.heapifyDown = this.heapifyDown.bind(this);

  }

  count() {
    return this.store.length;
  }

  extract() {
    const extracted = this.store.shift();
    this.store.unshift(this.store.pop());
    this.heapifyDown(0);

    return extracted;
  }

  peek() {
    return this.store[0];
  }

  push(val) {
    this.store.push(val);
    self.heapifyUp(this.count() - 1);
  }

  swap(i, j) {
    if (i < this.count() && j < this.count()) {
      const el1 = this.store[i];
      const el2 = this.store[j];
      this.store[i] = el2;
      this.store[j] = el1;
    }
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

  parentIndex(childIdx) {
    if (childIdx === 0) {
      throw "root has no parent";
    }

    return Math.trunc((childIdx - 1) / 2);
  }

  heapifyDown(parentIdx) {
    const childIdcs = this.childIndices(parentIdx);
    if (childIdcs.length > 0) {
      let minChildIdx;
      if (childIdcs.length === 2) {
        const leftChild = this.store[childIdcs[0]];
        const rightChild = this.store[childIdcs[1]]; 
        if (leftChild <= rightChild) {
          minChildIdx = childIdcs[0];
        } else {
          minChildIdx = childIdcs[1];
        }
      } else if (childIdcs.length === 1) {
        minChildIdx = 0;
      }

      const minChild = this.store[minChildIdx];
      const parent = this.store[parentIdx];

      if (parent > minChild) {
        this.swap(parentIdx, minChildIdx);
        this.heapifyDown(minChildIdx);
      }
    }
  }

  heapifyUp(childIdx) {
    if (childIdx !== 0) {
      let parentIdx = this.parentIndex(childIdx);
      let parent = this.store[parentIdx];
      let child = this.store[childIdx];

      if (child < parent) {
        this.swap(childIdx, parentIdx);
        if (parentIdx !== 0) {
          this.heapifyUp(parentIdx);
        }
      }
    }
  } 

}


// test function shows that it's ok to use const in recursion
function testRecursion(arr, count) {
  const firstEl = arr[0];
  arr.push(firstEl);
  arr.shift();
  if (count === 0) {
    return arr;
  } else {
    return testRecursion(arr, count - 1);
  }
}


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