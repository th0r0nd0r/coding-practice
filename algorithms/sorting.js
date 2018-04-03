const comparator = function(a,b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

function swap(arr, i, j) {
  const el1 = arr[i];
  const el2 = arr[j];
  arr[i] = el2;
  arr[j] = el1;
}


// unoptomized quicksort (extra space, non-optimal pivot choice)
function quickSort(arr, comp) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const leftSide = [];
  const rightSide = [];

  arr.slice(1).forEach(function(el) {
    if (comp(el, pivot) <= 0) {
      leftSide.push(el);
    } else {
      rightSide.push(el);
    }
  });

  return quickSort(leftSide, comp).concat([pivot]).concat(quickSort(rightSide, comp));
}



// in place quicksort, picking first element as pivot
function inPlaceQuicksort(arr, start, end, comp) {
  if ((end - start) < 1) {
    return arr;
  }

  // set the pivot to the first element and partition after it
  const pivot = arr[start];
  let partition = start + 1;

  for (let i = start + 1; i <= end; i++) {
    let el = arr[i];

    // if el < pivot, place el in front of partition, and move partition forward
    // this basically puts el on the left side of the sub-array for recursion
    if (comp(el, pivot) <= 0) {
      swap(arr, partition, i);
      partition++;
    }
  }

  // swap the pivot with the first el left of the partition, locking it into place
  swap(arr, start, partition - 1);

  // sort everything left and right of the pivot
  inPlaceQuicksort(arr, start, partition - 2, comp);
  inPlaceQuicksort(arr, partition, end, comp);

  return arr;
}

// console.log(inPlaceQuicksort([6,4,5,-2,8,3,9], 0, 6, comparator));
// console.log(inPlaceQuicksort([0,0,0,1,0], 0, 4, comparator));
// console.log(inPlaceQuicksort([-3,2.4,5.88, 1, -6], 0, 4, comparator));



// optomized quicksort, in place with random pivot
function optomizedQuicksort(arr, start, end, comp) {
  if ((end - start) < 1) {
    return arr;
  }

  // pick a random pivot and swap it with the first element
  const pivotIdx = Math.floor(Math.random() * (end - start + 1)) + start;
  const pivot = arr[pivotIdx];
  swap(arr, start, pivotIdx);

  let partition = start + 1;

  for (let i = start + 1; i <= end; i++) {
    let el = arr[i];
    if (comp(el, pivot) <= 0) {
      swap(arr, partition, i);
      partition++;
    }
  }

  swap(arr, start, partition - 1);
  inPlaceQuicksort(arr, start, partition - 2, comp);
  inPlaceQuicksort(arr, partition, end, comp);

  return arr;
}

console.log(optomizedQuicksort([6,4,5,-2,8,3,9], 0, 6, comparator));
console.log(inPlaceQuicksort([0,0,0,1,0], 0, 4, comparator));
console.log(inPlaceQuicksort([-3,2.4,5.88, 1, -6], 0, 4, comparator));