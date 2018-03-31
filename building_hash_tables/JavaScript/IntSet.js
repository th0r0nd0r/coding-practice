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

class IntSet {
  constructor(numBuckets = 20) {
    this.store = new Array();
    while (this.store.length < numBuckets) {
      this.store.push([]);
    }
    this.numBuckets = this.store.length;

    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
    this.include = this.include.bind(this);
    this._bucket = this._bucket.bind(this);
  }

  insert(num) {
    this._bucket(num).push(num);
  }

  remove(num) {
    let bucket = this._bucket(num);
    let idx = bucket.indexOf(num);
    if (idx !== -1) {
      bucket.splice(idx, 1);
    }
  }

  include(num) {
    let bucket = this._bucket(num);
    return bucket.indexOf(num) !== -1;
  }

  _bucket(num) {
    return this.store[Math.abs(num % this.numBuckets)];
  }
}

class ResizingIntSet {
  constructor(numBuckets = 20) {
    this.store = new Array();
    while (this.store.length < numBuckets) {
      this.store.push([]);
    }
    this.numBuckets = this.store.length;
    this.count = 0;
  }

  insert(num) {
    if (this.count >= this.numBuckets) {
      this._resize();
    }

    this._bucket(num).push(num);
    this.count++;
  }

  remove(num) {
    let bucket = this._bucket(num);
    let idx = bucket.indexOf(num);
    if (idx !== -1) {
      bucket.splice(idx, 1);
    }

    this.count--;
  }

  include(num) {
    let bucket = this._bucket(num);
    return bucket.indexOf(num) !== -1;
  }

  _bucket(num) {
    return this.store[Math.abs(num % this.numBuckets)];
  }

  _resize() {
    let newSize = this.numBuckets * 2;
    let newStore = new Array();
    while (newStore.length < newSize) {
      newStore.push([]);
    }

    this.store.forEach(function(bucket) {
      bucket.forEach(function(num) {
        newStore[Math.abs(num % newSize)].push(num);
      });
    });

    this.store = newStore;
    this.numBuckets = this.store.length;
  }
}

const set = new ResizingIntSet(2);



