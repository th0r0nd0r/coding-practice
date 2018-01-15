// given an array of n birds, whose types can be represented by the digits 1-5,
// print the most common type of bird. If two types are equally common,
// print the lesser digit

function migratoryBirds(n, ar) {
  const counts = [0,0,0,0,0];
  let max = 0;
  let maxIdx;
  
  for (let i = 0; i < ar.length; i++) {
      let type = ar[i];
      counts[type - 1]++;
  }
  
  for (let i = 0; i < 5; i++) {
      if (counts[i] > max) {
          max = counts[i];
          maxIdx = i;
      }
  }
  
  return maxIdx + 1;
}


// 

function makeUnique(str) {
  return String.prototype.concat(...new Set(str))
}

function alternating(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            return false;
        }
    }
    
    return true;
}

function validT(str) {
    if (makeUnique(str).length === 2 && alternating(str)) {
        return true;
    } else {
        return false;
    }
}

function twoCharacters(s) {
  let longestT = 0;
  
  const chars = makeUnique(s);
  
  for (let i = 0; i < chars.length; i++) {
      let regexp = new RegExp(chars[i], "g");
      let testT = s.replace(regexp, '');
      let remainingChars = makeUnique(testT);
      
      if (validT(testT) && testT.length > longestT) {
          longestT = testT.length;
      }
      
      for (let j = i + 1; j < (chars.length - (i + 1)); i++) {
          regexp = new RegExp(chars[j], "g");
          let nextTest = testT.replace(regexp, '');
          let length = nextTest.length
          
          if (validT(nextTest) && length > longestT) {
              longestT = testT.length;
          }
          
      }
  }
}