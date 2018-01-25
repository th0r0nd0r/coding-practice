var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      let first = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          let second = nums[j];
          if (first + second === target) {
              return [i, j];
          }
      }
  }
};

var isPalindrome = function(x) {
  const digits = x.toString();
  
  let i = 0;
  let j = digits.lengnth - 1;
  
  while (i < j) {
      if (digits[i] !== digits[j]) {
          return false;
      }
  }
  
  return true;
};