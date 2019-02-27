// find max in stack

// https://www.hackerrank.com/challenges/maximum-element/problem

// Strategy: create a trackStack that maintains the largest element in the stack by:
// if new el is greater than trackStack.last, push it on the trackStack
// else, push the max el again
// pop from both stacks as usual

// Time: O(1)
// Space: O(n)

function processData(input) {
  const lines = input.split("\n");
  lines.shift();

  const stack = [];
  const trackStack = [];

  lines.forEach(function (line, i, arr) {
      if (line[0] === '1') {
          const el = parseInt(line.slice(2), 10);
          stack.push(el);
          if (trackStack.length === 0 || el > trackStack[trackStack.length - 1]) {
              trackStack.push(el);
          } else if (trackStack.length > 0) {
              trackStack.push(trackStack[trackStack.length - 1]);
          }
      } else if (line[0] === '2') {
          stack.pop();
          trackStack.pop();
      } else {
          console.log(trackStack[trackStack.length - 1]);
      }
  });
} 