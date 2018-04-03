// unoptomized quicksort (extra space, non-optimal pivot choice)
const comparator = function(a,b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

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

// console.log(quickSort([2,4,5,8,3,9], comparator));
// console.log(quickSort([0,0,0,1,0], comparator));
// console.log(quickSort([-3,2.4,5.88, 1, -6], comparator));

function swap(arr, i, j) {
  const el1 = arr[i];
  const el2 = arr[j];
  arr[i] = el2;
  arr[j] = el1;
}

function inPlaceQuicksort(arr, start, end, comp) {
  if ((end - start) < 1) {
    return arr;
  }

  const pivot = arr[start];
  let partition = start + 1;

  for (let i = start + 1; i <= end; i++) {
    let el = arr[i];
    if (comp(el, pivot) <= 0) {
      if (i !== start + 1) {
        swap(arr, partition, i);
      }
      partition++;
    }
  }

  swap(arr, start, partition - 1);
  inPlaceQuicksort(arr, start, partition - 2, comp);
  inPlaceQuicksort(arr, partition, end, comp);

  return arr;
}

console.log(inPlaceQuicksort([6,4,5,-2,8,3,9], 0, 6, comparator));
console.log(inPlaceQuicksort([0,0,0,1,0], 0, 4, comparator));
console.log(inPlaceQuicksort([-3,2.4,5.88, 1, -6], 0, 4, comparator));
