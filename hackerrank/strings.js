
// determine if a string is a pangram (contains each letter at least once)
function isPangram(input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      
  for (let i = 0; i < input.length; i++) {
      let char = input[i].toLowerCase();
      
      if (alphabet.includes(char)) {
          let idx = alphabet.indexOf(char);
          alphabet.splice(idx, 1);
      }
  }

  if (alphabet.length === 0) {
      console.log("pangram");
  } else {
      console.log("not pangram");
  }
}

// determine how scrambled an sos message is
function marsExploration(s) {
    let scrambled = 0;
    
    let SIdx = 0;
    let OIdx = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (i === OIdx && s[i] !== "O") {
            scrambled++;
        } else if ((i === SIdx || i === SIdx + 2) && s[i] !== "S") {
            scrambled++;
        }
        
        if (i === SIdx + 2) {
            SIdx += 3;
            OIdx += 3;
        }
    }
    
    return scrambled;
}