function FirstFactorial(num) { 
  if (num === 1) {
      return num;
  } else {
      return num * FirstFactorial(num - 1);
  }
}

function FirstReverse(str) { 
  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
      reversed.push(str[i]);
  }
  return reversed.join('');
}