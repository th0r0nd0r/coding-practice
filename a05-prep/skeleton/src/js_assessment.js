// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function(start, end = this.length) {
  if (end > this.length) {
    end = this.length;
  }

  let sliced = "";
  for (let i = start; i < end; i++) {
    sliced += this[i];
  }
  
  return sliced;
};

// write Array.prototype.myReduce (analogous to Ruby's Array#inject).

Array.prototype.myReduce = function(op) {
  let accum = this[0];
  for (let i = 1; i < this.length; i++) {
    accum = op(accum, this[i]);
  }

  return accum;
};

// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

const myFind = function (array, callback) {
  let value = undefined;

  array.forEach(
    function(el) {
      if (callback(el)) {
        value = el;
        return;
      }
    }
  );

  return value;
};

// write sumNPrimes(n)
const isPrime = (n) => {
  for (let i = 2; i <= (n / 2); i++) {
    if ((n / i) === 0) {
      return false;
    }
  }

  return true;
};

const sumNPrimes = (n) => {
  if (n === 0) {
    return 0;
  }

  let i = 0;
  const primes = [];

  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }

    i++;
  }

  const spy = {
    sum: (accum, el) => accum + el
  };

  return primes.myReduce(spy.sum);
};

// write Function.prototype.myBind.

// write Function.prototype.inherits.
