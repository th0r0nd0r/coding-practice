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