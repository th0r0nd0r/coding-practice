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
  const len = arr.length;
  const shuffled = [];
  const picked = [];

  while (shuffled.length < arr.length) {
    let idx = Math.floor(Math.random() * len);
    if (!picked.includes(idx)) {
      shuffled.push(arr[idx]);
      picked.push(idx);
    }
  }

  return shuffled;
}

// console.log(shuffle([1,2,3,4,5]));
// console.log(shuffle([1,2,3,4,5]));
// console.log(shuffle([1,2,3,4,5]));
// console.log(shuffle([1,2,3,4,5]));
// console.log(shuffle([1,2,3,4,5]));

function isWeird(year) {
  const yr = year.toString();
  const firstTwo = parseInt(yr.slice(0,2));
  const lastTwo = parseInt(yr.slice(2));
  const middleTwo = parseInt(yr.slice(1,3));

  if (firstTwo + lastTwo === middleTwo) {
    return true;
  }

  return false;
}

function years(year) {
  const yrs = [];
  let newYear = year + 1;

  while (yrs.length < 10) {
    if (isWeird(newYear)) {
      yrs.push(newYear);
    }

    newYear++;
  }

  return yrs;
}

console.log(years(1));