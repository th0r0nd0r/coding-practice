
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


// create a bst insert function that only adds nodes as leaves
function insert(root, data) {
    if (root === null) {
        return new TreeNode(data);
    }
    
    if (data <= root.data) {
        let child = root.left;
    } else {
        let child = root.right;
    }
    
    if (!!child) {
        child = new TreeNode(data);
    } else {
        insert(child, data);
    }
    
    return root;
}

//  trim a binary search tree so all values are in [L,R]
var trimBST = function(root, L, R) {
    if (!root) {
        return null;
    }
    
    if (root.val < L) {
        return trimBST(root.right, L, R);
    } else if (root.val > R) {
        return trimBST(root.left, L, R);
    }
    
    if (root) {
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
    }
    
    return root;
};



// Strobogrammatic number

var isStrobogrammatic = function(num) {
    const couples = {
        "6": "9",
        "9": "6",
        "8": "8",
        "1": "1",
        "0": "0"
    };
    
    for (let i = 0; i <= Math.trunc(num.length / 2 - 1); i++) {
        let n = num[i];
    
        if (!couples[n]) {
            return false;
        } else if (num[num.length - i - 1] !== couples[n]) {
            return false;
        }
        
        if (num.length > 1 && num.length % 2 !== 0) {
            if (!couples[num[i+1]]) {
                return false;
            }
        }
    }
    
    return true;
};