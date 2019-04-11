// input: an array of meeting time ranges, represented as 30-minute blocks starting at 9 am (ex: [[1,3], [4,8], [6,9]])
// output: a condensed array with overlapping meeting times merged together (ex: [[1,3], [4,9]])

// brute-force strategy: 
// nested iteration to compare each time slot to every other slot
// O(n^2)

// strategy 2:
// - sort the sub-arrays by start time (O(n log n))
// - compare their overlaps in order (O(n))
// time complexity: O(n + n log n) = O(n(1 + log n))

function mergeSubRanges(r1, r2) {
  let mergedRange = [r1, r2];

  if (r1[1] >= r2[1]) {
    mergedRange = [[r1[0], r2[1]]];
  }

  return mergedRange;
}

function mergeRanges(ranges) {
  // maybe sort by end index
  const sortedRanges = ranges.sort((r1, r2) => (r1[0] - r2[0]));
  const mergedRanges = [];

  let i = 0;
  let currentRange = [];

  while (i < sortedRanges.length - 1) {
    currentRange = mergeSubRanges(sortedRanges[i], sortedRanges[i + 1]);

    if (currentRange.length !== 1) {
      mergedRanges.push(currentRange[0]);
      i++;
    } else {
      mergedRanges.push(currentRange);
    }
  }

  return mergedRanges;
}