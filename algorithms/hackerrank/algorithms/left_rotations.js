// left rotate the array (a) the given number (d) of times.



// general hackerrank bs
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
  return inputString[currentLine++];
}



function main() {
  const nd = readLine().split(' ');

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

  // use mod to find the start index of the rotated array
  let idx = d % n;
  const rotatedArr = [];

  // starting from the new index, add each element consecutively, wrapping over to zero once the index goes out of bounds
  for (let i = 0; i < a.length; i++) {
      if (idx >= a.length) {
          idx = 0;
      }

      rotatedArr.push(a[idx]);
      idx += 1;
  }

  console.log(rotatedArr.join(' '));
}