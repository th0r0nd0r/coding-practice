
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

// Given an SOS message "SOSSOSSOS", return the number of letters that are out of place (e.g "SQSTOS" ==> 2)
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

// how many letters do you have to delete from s1 and s2 to make them anagrams
// of each other?
function makingAnagrams(s1, s2){
    const str1 = s1.split('');
    const str2 = s2.split('');
    let str1Only = 0;
    
    str1.forEach((el, i) => {
        let j = str2.findIndex((el2) => el2 === el);
        if (j >= 0) {
            str2.splice(j,1);
        } else {
            str1Only++;
        }
    });
    
    return str1Only + str2.length;
}


// funny string
function funnyString(s){
    const reverse = s.split('').reverse().join('');
    for (let i = 0; i < s.length - 1; i++) {
        let sDiff = Math.abs((s[i].charCodeAt() - s[i + 1].charCodeAt()));
        let reverseDiff = Math.abs((reverse[i].charCodeAt() - reverse[i + 1].charCodeAt()));
        if (sDiff !== reverseDiff) {
            return "Not Funny";
        }
    }
    
    return "Funny";
}


function super_reduced_string(s){
    let repeating = false;
   const ar = s.split('');
    ar.forEach((el, i) => {
        
    });
}