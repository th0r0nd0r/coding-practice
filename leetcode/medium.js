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
  const q = [];
  let i = 0;
  let uniqueTasks = [];
  let counts = {};
  
  tasks.forEach(function(task) {
      if (!counts[task]) {
          uniqueTasks.push(task);
          counts[task] = n;
      }
  });
  
  while (tasks.length > 0) {       
      let task = tasks[i];
      if (counts[task] >= n) {
          q.unshift(task);
          tasks.splice(i, 1);
          counts[task] = 0;
          i = 0;
          
      } else if (i === tasks.length - 1) {
          i = 0;  
          uniqueTasks.forEach(function(tsk) {
              counts[tsk]++; 
          });
          q.unshift("idle");
      } else {
          i++;
      }
  }
  
  return q.length;
};