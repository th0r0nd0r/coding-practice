function isPalindrome(str) {
  let idx1 = 0;
  let idx2 = str.length - 1;

  while (idx1 > idx2) {
    if (str[idx1] === str[idx2]) {
      idx1++;
      idx2--;
    } else {
      return false;
    }
  }

  return true;
}