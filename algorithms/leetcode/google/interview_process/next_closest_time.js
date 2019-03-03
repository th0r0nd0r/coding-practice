// Strategy:
// try to find the digit that is greater than current, with the smallest delta. Go from right to left, with the following restrictions:
// - rightmost can be any digit
// - third goes 0-5
// - if first digit is 0 or 1: 2nd goes 0-9
// - if first digit is 2: 2nd goes 0-3
// - first goes 0-2, but only change if 2nd digit has decreased
 
var nextClosestTime = function(time) {
  const strippedTime = time.replace(':','');
  const nums = time.slice(0,2) + time.slice(3,5);
  const digits = nums.split('').map(dig => parseInt(dig, 10));
  const sorted = digits.sort();
  const newDigits = [];
  let finished = false;
  
  for (let i = 3; i >= 0; i--) {
      const num = parseInt(strippedTime[i]);
      
      if (finished) {
          newDigits.unshift(num);
      } else {
          let cap = 9;
          switch (i) {
              case 2:
                  cap = 5;
                  break;
              case 1:
                  if (strippedTime[0] === '2') {
                      cap = 3;
                  }
                  break;
              case 0:
                  cap = 2;
                  break;
          }

          for (let j = 0; j < sorted.length; j++) {
              const dig = sorted[j];
              
              if (dig > num) {
                  if (dig <= cap) {
                      newDigits.unshift(dig);
                      finished = true;
                      break;
                  } else {
                      newDigits.unshift(sorted[0]);
                      break;
                  }
              } else if (j === 3) {
                  newDigits.unshift(sorted[0]);
                  break;
              }
          }
      }
      
  }
  
  const newTime = newDigits.reduce((acc, curr, idx) => {
      let newDig = curr.toString();
      if (idx === 1) {
          newDig += ':';
      }
      
      return acc + newDig;
  }, '');
  
  return newTime;
};