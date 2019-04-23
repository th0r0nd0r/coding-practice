// input: a list of words in alphabetical order that has been 'rotated', so that the ordering begins in the middle
// output: the index of the rotation point (the alphabetically first word in the list)
// will also return 0 if list is not rotated

function rotationPoint(words) {
  let i = words.length / 2;
  const first = words[0];
  let maxIdx = words.length - 1;
  let minIdx = 0;

  while (maxIdx > minIdx) {
    if (words[maxIdx] < first && words[minIdx] > first) {
      return i;
    }

    if (words[i] < first) {
      // point is to the left
      maxIdx = i;
    } else if (words[i] >= first) {
      // point is to the right
      minIdx = i;
    }

    // use Math.ceil to round up when we get to the end of an unrotated array, making maxIdx === minIdx, and breaking out of the while loop
    i = Math.ceil((maxIdx - minIdx) / 2) + minIdx;
  }

  return 0;
}

// console.log(rotationPoint([
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'asymptote',  
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ]));
// console.log(rotationPoint([
//   'asymptote',  
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist'
// ]));