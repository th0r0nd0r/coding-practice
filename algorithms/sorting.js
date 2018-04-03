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
  // console.log(arr, i, j);
  // console.log();
  const el1 = arr[i];
  const el2 = arr[j];
  arr[i] = el2;
  arr[j] = el1;
}

function inPlaceQuicksort(arr, start, end, comp) {
  if ((end - start) < 2) {
    return arr;
  }

  // const pivotIdx = start;
  const pivot = arr[start];
  let partition = start + 1;
  console.log("start: ", start);
  console.log("partition: ", partition);

  for (let i = start + 1; i < end; i++) {
    let el = arr[i];
    if (comp(el, pivot) <= 0) {
      if (i !== start + 1) {
        console.log("array: ", arr);
        console.log("partition: ", partition);
        console.log("i: ", i);
        console.log();
        swap(arr, partition, i);
      }
      partition++;
    }
  }

  swap(pivot, partition - 1);
  inPlaceQuicksort(arr, start, partition - 1, comp);
  inPlaceQuicksort(arr, partition + 1, end, comp);

  return arr;
}

console.log(inPlaceQuicksort([2,4,5,8,3,9], 0, 6, comparator));
// console.log(inPlaceQuicksort([0,0,0,1,0], 0, 5, comparator));
// console.log(inPlaceQuicksort([-3,2.4,5.88, 1, -6], 0, 5, comparator));
