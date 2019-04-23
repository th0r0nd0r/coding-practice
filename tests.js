// input: 2 strings
// outpus: Boolean determining if permutation

// failure cases:
// - DONE one str has 1 or more chars not in str 2 
// - DONE have same chars, but different amounts
// - DONE fn returns a boolean
// - NVM inputs unchanged after function
// - DONE whitespace check
// - DONE capitalization same

// length check
// iterate through first string, incrementing chars in obj
// iterate through second string, if obj val is negative, exit early
// one pass through obj, check all 0s

function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {return false;}
  const charCounts = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (charCounts[char]) {
      charCounts[char]--;
    } else {
      return false;
    }

    if (charCounts[char] < 0) {
      return false;
    }
  }

  const remainingChars = Object.keys(charCounts);
  for (let i = 0; i < remainingChars.length; i++) {
    const char = str1[i];

    if (charCounts[char] !== 0) {
      return false;
    }
  }

  return true;
}

function runTests() {
  // empty strings are equal
  if (isPermutation('','') !== true) {
    console.log('test1');
    return false;

  // wrong number of a character
  } else if (isPermutation('aabcd','abcdd') !== false) {
    console.log('test2');
    return false;

  // contains wrong character
  } else if (isPermutation('okk12','okk13') !== false) {
    console.log('test3');
    return false;

  // ensure same capitalization
  } else if (isPermutation('aBc','abc') !== false) {
    console.log('test4');
    return false;

  // no trim
  } else if (isPermutation('  asd   ', 'asd') !== false) {
    console.log('test5');
    return false;
  } 

  if (isPermutation('  abcd@[]  ','  dcba@[]  ') !== true) {
    console.log('test6');
    return false;
  } 

  return true;
} 

console.log(runTests());