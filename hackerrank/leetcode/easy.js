
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



var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode;
  let prev = preHead;
  let nextNode;
  
  while (l1 !== null || l2 !== null) {
      if (l1 === null) {
          nextNode = l2;
          l2 = l2.next;
      } else if (l2 === null) {
          nextNode = l1;
          l1 = l1.next;
      } else if (l1.val < l2.val) {
          nextNode = l1;
          l1 = l1.next;
      } else {
          nextNode = l2;
          l2 = l2.next;
      }

      prev.next = nextNode;
      prev = nextNode;
  }
  
  return preHead.next;
};