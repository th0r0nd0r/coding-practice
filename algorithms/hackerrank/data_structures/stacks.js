// find max in stack

function processData(input) {
  const lines = input.split("\n");
  lines.shift();

  const stack = [];
  // const maxEl = parseInt(lines[0].slice(2), 10);
  const trackStack = [];
  console.log("lines: ", lines);
  // console.log("max el: ", maxEl);

  lines.forEach(function (line, i, arr) {
      if (line[0] === '1') {
          const el = parseInt(line.slice(2), 10);
          stack.push(el);
          if (trackStack.length === 0 || el > trackStack[trackStack.length - 1]) {
              trackStack.push(el);
          } else if (!!trackStack.length) {
              trackStack.push(trackStack[trackStack.length - 1]);
          }
      } else if (line[0] === '2') {
          const 
      }
  });
} 