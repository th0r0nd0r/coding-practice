function divisibleSumPairs(n, k, ar) {
  const arr = ar.sort();
  let numCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if ((arr[i] + arr[j]) % k === 0) {numCount += 1;}
      }
  }

  return numCount;
}

// divisibleSumPairs(2,2,[8,10]);