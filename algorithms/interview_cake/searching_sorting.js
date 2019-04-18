// input: a list of words in alphabetical order that has been 'rotated', so that the ordering begins in the middle
// output: the index of the rotation point (the alphabetically first word in the list)
function rotationPoint(words) {
  let i = words.length / 2;
  const first = words[0];
  let maxIdx = words.length - 1;
  let minIdx = 0;

  while (maxIdx > minIdx) {
    if (words[i] < first && words[i-1] > first) {
      return i;
    }

    if (words[i] < first) {
      // point is to the left
      maxIdx = i - 1;
    } else if (words[i] > first) {
      // point is to the right
      minIdx = i + 1;
    }

    i = (maxIdx - minIdx) / 2;
  }


}