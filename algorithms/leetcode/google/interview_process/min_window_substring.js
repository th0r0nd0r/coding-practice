var minWindow = function(s, t) {
  const charCounts = {};
  const presentChars = new Set();
  const allChars = new Set();
  let minWindow = "";
  let lastJ = 0;
  
  for (let i = 0; i < t.length; i++) {
      charCounts[t[i]] = 0;
      allChars.add(t[i]);
  }
  
  for (let i = 0; i < s.length; i++) {
      // console.log("I: ", i);
      const char = s[i];
      
      if (allChars.has(char)) {
          charCounts[char]++;
          presentChars.add(char);
      }
      
      // console.log(charCounts);
      
      // console.log("present chars: ", presentChars);
      // console.log("all chars: ", allChars);
      // console.log(presentChars.size, allChars.size);
      // console.log(presentChars.size === allChars.size);
      if (presentChars.size === allChars.size) {
          // console.log("WE IN THE J LOOP");
          for (let j = lastJ; j < i; j++) {
              // console.log("j: ", j);
              let jChar = s[j];
              if (allChars.has(jChar)) {
                  charCounts[jChar]--;
                  // console.log(charCounts);
                  if (charCounts[jChar] < 1) {
                      presentChars.delete(jChar);
                      lastJ = j + 1;
                      console.log("")
                      const window = s.slice(j, i+1);
                      if (window.length < minWindow.length || minWindow === "") {minWindow = window};
                      break;
                  }
              }
          }
      } 
  }
  
  return minWindow;
};