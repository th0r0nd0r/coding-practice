
// twoSum O(n^2)
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

// O(n)
var twoSum = function(nums, target) {
  const hash = {};
  
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let ans = target - num;
      if (hash.hasOwnProperty(ans)) {
          return [hash[ans], i];
      }
                  
      hash[num] = i;
  }
};


var isPalindrome = function(x) {
  const a = x;
  const digits = a.toString().split("");

  let i = 0;
  let j = digits.length - 1;
  
  while (i < j) {
      if (digits[i] !== digits[j]) {
          return false;
      }
      
      i++;
      j--;
  }
  
  return true;
};