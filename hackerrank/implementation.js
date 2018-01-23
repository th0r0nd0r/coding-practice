// given an array of n birds, whose types can be represented by the digits 1-5,
// print the most common type of bird. If two types are equally common,
// print the lesser digit

function migratoryBirds(n, ar) {
  const counts = [0,0,0,0,0];
  let max = 0;
  let maxIdx;
  
  for (let i = 0; i < ar.length; i++) {
      let type = ar[i];
      counts[type - 1]++;
  }
  
  for (let i = 0; i < 5; i++) {
      if (counts[i] > max) {
          max = counts[i];
          maxIdx = i;
      }
  }
  
  return maxIdx + 1;
}


// given a string of lowercase letters, return the length of the longest string of
// two alternating letters that can be made by removing all other letters.

function makeUnique(str) {
  return String.prototype.concat(...new Set(str))
}

function alternating(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            return false;
        }
    }
    
    return true;
}

function validT(str) {
    if (makeUnique(str).length === 2 && alternating(str)) {
        return true;
    } else {
        return false;
    }
}

function twoCharacters(s) {
  let longestT = 0;
  
  const chars = makeUnique(s);
  
  
  for (let i = 0; i < chars.length; i++) {
      
      for (let j = (i + 1); j < chars.length; j++) {
          
          
          let testChars = `[^${chars[i]}${chars[j]}]`;
          let regexp = new RegExp(testChars, "g");
       
          
          let testT = s.replace(regexp, '');
          
          
          if (validT(testT) && testT.length > longestT) {
   
              longestT = testT.length;
          }
          
      }
  }
  
  return longestT;
}


// return the area of a highlighted word
function designerPdfViewer(h, word) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let width = 0;
    let height = 0;
    
    for (let i = 0; i < word.length; i++) {
        width++;
        
        let letter = word[i];
        let ltrIdx = alph.indexOf(letter);
        let letterHeight = h[ltrIdx];
        
        if (letterHeight > height) {
            height = letterHeight;
        }
    }

    const area = width * height;
    
    return area;
}