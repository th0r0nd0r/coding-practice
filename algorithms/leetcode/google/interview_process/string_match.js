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

function longEnough(A, B) {
  for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] === B[0]) {
          if (A.slice(i).length >= B.length) {
              return true;
          } else {
              return false;
          }
      }
  }
  
  return true;
}

const A = 'sdfs';
const B = 'asd';
console.log(longEnough(A, B));