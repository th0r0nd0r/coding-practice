
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

// (stacks) valid brackets
var isValid = function(s) {
    const stack = [];
    const brackets = {
        "{":"}",
        "[":"]",
        "(":")"
    };
    
    for (let i = 0; i < s.length; i++) {
        let bracket = s[i];
        if (brackets[bracket]) {
            stack.push(bracket);
        } else if (stack.length === 0) {
            return false;
        } else {
            let openBracket = stack.pop();
            if (brackets[openBracket] !== bracket) {
                return false;
            }
        }
    }
                   
    if (stack.length === 0) {
            return true;
    } else {
        return false;
    }
};

// reverse a linked list in place, iteratively
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let p, c , h;
    p = head;
    c = head;
    h = head;
    
    if (h === p) {
        c = p.next;
        h = c.next;
        p.next = null;
    }
    
    while (c.next !== null) {
        c.next = p;
        p = c;
        c = h;
        h = h.next;
    }
    
    c.next = p;
    
    return c;
};

//  trim a binary search tree so all values are in [L,R]

