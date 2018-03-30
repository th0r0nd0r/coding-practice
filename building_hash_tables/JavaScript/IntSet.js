class MaxIntSet {
  constructor(max) {
    this.max = max;
    this.store = new Array(max).fill(false);

    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
    this.include = this.include.bind(this);
  }

  insert(num) {
    if (num < 0 || num > this.max) {
      throw "Out of bounds";
    } 

    this.store[num] = true;
  }

  remove(num) {
    if (0 <= num || num < this.max) {
      this.store[num] = false;
    }
  }

  include(num) {
    return this.store[num];
  }
}