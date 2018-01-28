function FirstFactorial(num) { 
  if (num === 1) {
      return num;
  } else {
      return num * FirstFactorial(num - 1);
  }
}