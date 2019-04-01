// removes duplicate numbers from a sorted array using an in-place modified filter method.

var removeDuplicates = function(nums) {
  let i = 0, j = 0;
  
  while (i < nums.length) {
      let val = nums[i];
      if (val !== nums[i-1]) {
          nums[j++] = val;
      }
      i++;
  }
  
  nums.length = j;
  console.log(nums);
  return nums;
};