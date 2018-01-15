function isPalindrome(str) {
  let idx1 = 0;
  let idx2 = str.length - 1;

  while (idx1 < idx2) {
    if (str[idx1] === str[idx2]) {
      idx1++;
      idx2--;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome("abba")); 
// console.log(isPalindrome("radar"));
// console.log(isPalindrome("abcdba"));
// console.log(isPalindrome("abdca"));


function shuffle(arr) {
  // console.log("shuffling");
  const len = arr.length;
  const shuffled = [];
  const picked = [];

  while (shuffled.length < arr.length) {
    let idx = Math.floor(Math.random() * len);
    // console.log("idx: ", idx)
    if (!picked.includes(idx)) {
      shuffled.push(arr[idx]);
      picked.push(idx);
      // console.log("shuffled: ", shuffled);
    }
  }

  return shuffled;
}

console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));