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

