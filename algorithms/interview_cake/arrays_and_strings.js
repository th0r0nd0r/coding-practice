// input: an array of meeting time ranges, represented as 30-minute blocks starting at 9 am (ex: [[1,3], [4,8], [6,9]])
// output: a condensed array with overlapping meeting times merged together (ex: [[1,3], [4,9]])

// brute-force strategy: 
// nested iteration to compare each time slot to every other slot
// O(n^2)

// strategy 2:
// - sort the sub-arrays by start time (O(n log n))
// - compare their overlaps in order (O(n))
// time complexity: O(n + n log n) = O(n(1 + log n))

function mergeSubRanges(r0, r1) {
  let mergedRange = [r0, r1];

  if (r0[1] >= r1[0]) {
    mergedRange = [[r0[0], Math.max(r0[1], r1[1])]];
  }

  return mergedRange;
}

function mergeRanges(ranges) {
  const sortedRanges = ranges.sort((r1, r2) => (r1[0] - r2[0]));
  const mergedRanges = [];

  let i = 1;
  let currentRange = sortedRanges[0];

  while (i < sortedRanges.length) {
     let mergedRange = mergeSubRanges(currentRange, sortedRanges[i]);

    // push the current range if it can't be combined with the next sorted range
    if (mergedRange.length === 2 || i === sortedRanges.length - 1) {
      mergedRanges.push(mergedRange[0]);
      currentRange = mergedRange[1];

    } else {
      currentRange = mergedRange[0];
    }
    i++;
  }

  return mergedRanges;
}

const ranges0 = [[0,1], [3,5], [4,8], [10,12], [9,10]];
const ranges1 = [[1,5], [2,3]];

console.log(mergeRanges(ranges0));
console.log(mergeRanges(ranges1));