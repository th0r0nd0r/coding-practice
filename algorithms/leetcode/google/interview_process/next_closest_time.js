// Strategy:
// try to find the digit that is greater than current, with the smallest delta. Go from right to left, with the following restrictions:
// - rightmost can be any digit
// - third goes 0-5
// - if first digit is 0 or 1: 2nd goes 0-9
// - if first digit is 2: 2nd goes 0-3
// - first goes 0-2, but only change if 2nd digit has decreased
 
var nextClosestTime = function(time) {
  const digits = [];
  for (let i = 0; i < time.length; i++) {
      const num = parseInt(time[i]);
      if (num.toString() === time[i]) {
          digits.push(num);
      }
  }
  
};

// var nextClosestTime = function(time) {
//     const nums = time.slice(0,2) + time.slice(3,5);
//     const digits parseInt(nums.split(''));
//     const sorted = digits.slice().sort();
//     let newTime = time;
    
//     digits.forEach(function(dig, i, digs)) {
//         sorted.forEach(num, j, arr) {
//             if (sorted[j] > digits[i]) {
//                 if (i === 3) {
//                     if  (sorted[j] < 6) {
//                         newTime[4] = sorted[j]
//                     }
//                 }
//             }
//         }
//     }

//     return newTime;
            
// };