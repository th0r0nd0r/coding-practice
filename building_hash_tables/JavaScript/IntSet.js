class MaxIntSet {
  constructor(max) {
    this.max = max;
    this.store = new Array(max).fill(false);

    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
    this.include = this.include.bind(this);
    this._inBounds = this._inBounds.bind(this);
  }

  insert(num) {
    if (!this._inBounds(num)) {
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
    return (this._inBounds(num) && this.store[num]);
  }

  _inBounds(num) {
    return (num > 0 && num < this.max);
  }
}

