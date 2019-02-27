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

console.log(isSubstring(a,b));
console.log(isSubstring(a,c));
console.log(isSubstring(b, a));