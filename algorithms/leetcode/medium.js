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