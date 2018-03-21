const maxSubsum = (arr) => {
  let max = arr[0];
  let maxIndices = [0,0];
  let currSum = arr[0];
  let indices = [0,0];
  
  for (let i = 1; i < arr.length; i++) {
      currSum += arr[i];
      indices[1] = i;
      if (currSum <= 0) {
          currSum = 0;
          indices[0] = i + 1;
      }
      if (currSum > max) {
          max = currSum;
          maxIndices[0] = indices[0];
          maxIndices[1] = indices[1];
      }

  }
  
  console.log([max, maxIndices]);
  return [max, maxIndices];
};


const arr = [5, 4, -9, 2, 4];
const arr2 = [1, 5, -5, -3, 8, 9, -10];
const arr3 = [1,2,3,4,5];

maxSubsum(arr);
maxSubsum(arr2);
maxSubsum(arr3);

