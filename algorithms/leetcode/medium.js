// (stacks) inorder binary tree traversal
var inorderTraversal = function(root) {
  const returnArr = [];
  console.log(root);
  
  if (root) {
      if (root.left) {
          const left = inorderTraversal(root.left);
          left.forEach(function(el) {
              returnArr.push(el); 
          });
      }

      returnArr.push(root.val);

      if (root.right) {
          const right = inorderTraversal(root.right);
          right.forEach(function(el) {
              returnArr.push(el); 
          });
      }
  }

  return returnArr;
};

// (queues) find the smallest interval in which a CPU can complete the given tasks
var leastInterval = function(tasks, n) {
  let q = 0;
  let i = 0;
  let uniqueTasks = [];
  let counts = {};
  
  tasks.forEach(function(task) {
      if (!counts[task]) {
          uniqueTasks.push(task);
          counts[task] = n + 1;
      }
  });
  
  while (tasks.length > 0) {       
      let task = tasks[i];
      console.log("tasks: ", tasks);
      console.log("i: ", i);
      console.log("current task: ", task);
      console.log("counts: ", counts);
      console.log();
      if (counts[task] > n) {
          q++;
          console.log("pushing task...");
          console.log("queue: ", q);
          console.log();
          tasks.splice(i, 1);
          uniqueTasks.forEach(function(tsk) {
            counts[tsk]++; 
          });
          counts[task] = 1;
          i = 0;

          
      } else if (i === tasks.length - 1) {
          i = 0;  
          uniqueTasks.forEach(function(tsk) {
              counts[tsk]++; 
          });
          q++;
          console.log("pushing task...");
          console.log("queue: ", q);
          console.log();
      } else {
          i++;
      }
  }
  
    // console.log(q);
    return q;
};

leastInterval(["A","A","A","B","B","B"], 2);

// reverse a linked list between positions m and n (start indexing from 1 for some reason)
// doesn't work yet
var reverseBetween = function(head, m, n) {
    if (head === null || head.next === null || m === n || m > n) {
        return head;
    }
    
    let i = 1;
    let c = head;
    let headCheck = head.next;
    let p, h;
    // let test = head;
    
    
    // while (test !== null) {
    //     console.log("test: ", test);
    //     test = test.next;
    // }
    
    while (i < m - 1) {
        c = head.next;
        i++;
    }
    let lastNonReversed = c;
    let firstReversed = c.next;
    if (i > 1 || m > 1) {
        p = firstReversed;
        c = p.next;
    } else {
        p = c;
        c = p.next;
    }
    
    h = c.next;
    
    // console.log("i: ", i);
    if (i > 1 || m > 1) {
        i++;
    }
    
    while (i < n) {
        // console.log("i: ", i);
        // console.log("c: ", c);
        c.next = p;
        p = c;
        c = h;
        if (h !== null) {
            h = h.next;   
        }
        i++;
    }
    
    lastNonReversed.next = c;
    if (c !== null && c.next !== null) {   
        firstReversed.next = c.next;    
    } 
    if (headCheck === head.next) {
        return head;   
    } else {
        return p;
    }
};

// find a peak element in an array.  Redo with binary search (this method is still worst case O(n))
var findPeakElement = function(nums) {
    let i = 0;
function checkPeak(idx) {
    let num = nums[idx];
    let left = nums[idx - 1];
    let right = nums[idx + 1];

    if (idx === 0) {
        left = num - 1;
    }
    
    if (idx === nums.length - 1) {
        right = num - 1;
    } 
    // console.log(num, left, right);
    
    if (Math.max(num, left, right) === num) {
        return idx;
    }

    if (right > num) {
        return checkPeak(idx + 1);
    } else {
        return -1;
    }
}

return checkPeak(i);
};



// binary search in rotated sorted array

var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = Math.trunc((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
            
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    
    return -1;
};




// merge intervals

function findOverlap(int1, int2) {
    const overlap = [];
    let i1 = int1;
    let i2 = int2;
    
    if (int2.start <= int1.start) {
        [i1, i2] = [i2, i1];
    }
    
    const start = i1.start;
    let end = null;
    
    if (i1.end >= i2.start) {
        if (i1.end > i2.end) {
            end = i1.end
        } else {
            end = i2.end;
        }
    }
    
    if (end) {
        overlap.push(new Interval(start,end));
    } else {
        overlap.push(int1,int2);
    }
    
    return overlap;
}

var merge = function(intervals) {
    const intSet = new Set();
    let merged = false;
    
    for (let i = 0; i < intervals.length; i++) {
        let int1 = intervals[0];
        for (let j = i + 1; j < intervals.length; j++) {
            let int2 = intervals[j];
            let overlap = findOverlap(int1,int2);
            if (overlap.length === 1) {
                intervals.splice(intervals.indexOf(int1),1);
                intervals.splice(intervals.indexOf(int2),1);
                intervals.push(overlap[0]);
                return merge(intervals);
            }
        }
    }
    
    return intervals;
};

// ~ 3x faster (still not fast)

function compare(int1, int2) {
    if (int1.start < int2.start) {
        return -1;
    } else if (int1.start === int2.start) {
        return 0;
    } else {
        return 1;
    }
}

var merge = function(intervals) {
    const ints = intervals.sort(compare);
    for (let i = 1; i < ints.length; i++) {
        let int = ints[i];
        let overlap = findOverlap(ints[i - 1], ints[i]);
        
        if (overlap.length === 1) {
            ints.splice(i - 1, 2, overlap[0]);
            i--;
        }
    }
    
    return ints;
};


// group shifted strings


function charDistance(c1, c2) {
    const dist = c2 - c1;
    if (dist < 0) {
        // note: ruby interprets negative modulo divisor as (n-1), js doesn't
        return dist + 26;
    } else {
        return dist % 26;
    }
}

var groupStrings = function(strings) {
    const strs = {};
    strings.forEach(function(str) {
        let distances = [];
        for (let i = 0; i < str.length - 1; i++) {
            let char1 = str.charCodeAt(i);
            let char2 = str.charCodeAt(i + 1);
            distances.push(charDistance(char1,char2));
        } 
        
        if (strs[distances]) {
            strs[distances].push(str);
        } else {
            strs[distances] = [str];
        }
    });
    
    return Object.values(strs);
};




// Wiggle Sort


// Note: Don't need to sort it at the start, 
// you can just iterate through once and compare/swap elements with their neighbors
var wiggleSort = function(nums) {
    nums = nums.sort();
    let partition = 1;
    let store = nums.length - 1;
    let wiggle = true;
    while (partition < nums.length) {
        let inStore = nums[store];
        let first = nums[partition];
        
        if (wiggle) {
            if (inStore > first) {
                nums[store] = first;
                nums[partition] = inStore;
            } 
            wiggle = false;
        } else {
            if (inStore < first) {
                nums[store] = first;
                nums[partition] = inStore;
            }
            wiggle = true;
        }
        partition++;
    }
};



// Binary Tree Longest Consecutive Sequence

function findPath(root, len) {
    if (root === null) {
        return len;
    }

    let leftLen = 1;
    let rightLen = 1;

    if (root.left) {
        if (root.left.val === root.val + 1) {
            leftLen = len + 1;
        }
    }
    if (root.right) {
        if (root.right.val === root.val + 1) {
            rightLen = len + 1;
        }
    }

    const leftPath = findPath(root.left, leftLen)
    const rightPath = findPath(root.right, rightLen);

    return Math.max(leftPath,rightPath, len);
}

var longestConsecutive = function(root) {
    if (root === null) {
        return 0;
    }
    
    return findPath(root, 1);
};