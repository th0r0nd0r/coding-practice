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