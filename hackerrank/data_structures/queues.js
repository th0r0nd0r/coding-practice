// 2 stack queue
// NOTE: this fn uses global variables so I didn't have to make a new class
// in hackerrank
const s1 = [];
const s2 = [];

function processData(input) {
  const inputArr = input.split('\n');
  inputArr.splice(0,1);
  
  inputArr.forEach(function(cmd, i) {
      // console.log("command: ", cmd);
      if (cmd[0] === '1') {
          let num = parseInt(cmd.slice(2));
          s1.push(num);
      } else if ((cmd[0] === '2' || cmd[0] === '3') && s2.length === 0) {
          while (s1.length > 0) {
              s2.push(s1.pop());
          }
      }
      
      if (cmd[0] === '2') {
          s2.pop();
      } else if (cmd[0] === '3') {
          console.log(s2[s2.length -1]);
      }
  });
} 