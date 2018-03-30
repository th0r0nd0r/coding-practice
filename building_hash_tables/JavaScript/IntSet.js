class MaxIntSet {
  constructor(max) {
    this.max = max;
    this.store = new Array(max).fill(false);

    this.insert = this.insert.bind(this);
  }

  insert(num) {
    if (num < 0 || num > this.max) {
      throw "Out of bounds";
    } 

    this.store[num] = true;
  }
}