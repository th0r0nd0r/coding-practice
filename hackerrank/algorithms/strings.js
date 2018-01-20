// return the number of words in a camelCase string
function camelcase(s) {
  let words = 1;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
          words++;
      }
  }
  
  return words;
}


// return whether or not the given string contains "hackerrank" in order
function hackerrankInString(s) {
  const chars = ["h","a","c","k","e","r","r","a","n","k"];
  let idx = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === chars[idx]) {
          idx++;
      }
  }
  
  if (idx === 10) {
      return "YES";
  } else {
      return "NO";
  }
}