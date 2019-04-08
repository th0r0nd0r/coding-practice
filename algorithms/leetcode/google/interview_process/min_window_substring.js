var findMinWindow = function(s, t) {
  if (s === t) {return s;}

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
      const char = s[i];
      
      if (allChars.has(char)) {
          charCounts[char]++;
          presentChars.add(char);
      }

      console.log(presentChars, allChars);
      if (presentChars.size === allChars.size) {
        if (presentChars.size === 1) {
          return char;
        }
          for (let j = lastJ; j < i; j++) {
            console.log('in the j loop');
              let jChar = s[j];
              if (allChars.has(jChar)) {
                  charCounts[jChar]--;
                  if (charCounts[jChar] < 1) {
                      presentChars.delete(jChar);
                      lastJ = j + 1;
                      console.log("i: ", i);
                      console.log("j: ", j);
                      const window = s.slice(j, i+1);
                      console.log("window: ", window);
                      if (window.length < minWindow.length || minWindow === "") {minWindow = window;}
                      break;
                  }
              }
          }
      } 
  }
  
  return minWindow;
};

console.log("starting file");

findMinWindow('ab','a');