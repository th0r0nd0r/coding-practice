
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