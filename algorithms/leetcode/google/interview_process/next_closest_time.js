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
  
  // go through the digits in reverse order
  for (let i = 3; i >= 0; i--) {
      const num = parseInt(strippedTime[i]);
      
      if (finished) {
          // if we have found a greater number to replace the digit on the last pass, fill out the rest of the number as normal
          // e.g. 12:32 => 12:33, now we just add the 1,2, and 3 to [3]
          newDigits.unshift(num);
      } else {
          // set the cap according to which digit we're on
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

          // iterate through the sorted digits to look for the smallest digit greater than current
          for (let j = 0; j < sorted.length; j++) {
              const dig = sorted[j];
              

              if (dig > num && dig <= cap) {
                      newDigits.unshift(dig);
                      finished = true;
                      break;
              // if we hit a digit greater than the cap, we know to use the smallest we have instead
              } else if (dig > cap || j === 3) {
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