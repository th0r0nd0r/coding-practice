function isSubstring(A, B) {
  if (A.length < B.length) {
      return false;
  }
  
  for (let i = 0; i < A.length; i++) {
      if (A[i] === B[0]) {
          for (let j = 0; j < B.length; j++) {
              if (A[i + j] !== B[j]) {
                  break;
              } else if (j === B.length - 1) {
                  return true;
              }
          }
      }
  }
  
  return false;
}

const a = 'dafsabcddsw';
const b = 'abcd';
const c = 'fsac';

// console.log(isSubstring(a,b));
// console.log(isSubstring(a,c));
// console.log(isSubstring(b, a));

var repeatedStringMatch = function(A, B) {
  let tmp = A;
  let multiples = 1;
  
  while (tmp.length < B.length) {
      tmp += A;
      multiples += 1;
      // console.log("A: ", A);
      // console.log("multiples: ", multiples);
  }

  
  if (!isSubstring(tmp, B)) {
      tmp += A;
      multiples += 1;
  }
  
  if (!isSubstring(tmp, B)) {
      multiples = -1;
  }
  
  return multiples;
};

console.log(repeatedStringMatch("abc", "cabcabca"));