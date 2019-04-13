// input: flight time and a list of movie runtimes
// output: boolean to determine if any two movie times exactly equal the flight time
function compatibleMovies(flightTime, movieTimes) {
  const times = new Set();

  for (let i = 0; i < movieTimes.length; i++) {
    if (times.has(flightTime - movieTimes[i])) {
      return true;
    }
    times.add(movieTimes[i]);
  }

  return false;
}

// console.log(compatibleMovies(8, [4,3,9,1,2]));
// console.log(compatibleMovies(8, [4,3,9,1,5,2]));

// same but with tolerance window (movie ends within x minutes of flight landing)
// function compatibleMovies2(flightTime, movieTimes, window) {
//   const times = new Set();

//   for (let i = 0; i < movieTimes.length; i++) {
//     if (times.has(flightTime - movieTimes[i])) {
//       return true;
//     }
//     times.add(movieTimes[i]);
//   }

//   return false;
// }



// find if any permutation of a string is a palindrome
function permutationPalindrome(str) {
  const charCounts = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  const counts = Object.values(charCounts);
  let odds = 0;

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 !== 0) {
      odds++;
      if (odds > 1) {
        return false;
      }
    }
  }

  return true;
}

// console.log(permutationPalindrome("ivicc"));
// console.log(permutationPalindrome("civil"));
// console.log(permutationPalindrome("livci"));


// make a word cloud out of a string without using regex
function wordCloud(str) {
  const words = str.split(' ');
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (!letters.includes(word[0])) {
      word = word.slice(1);
    }
    if (!letters.includes(word[word.length - 1])) {
      word = word.slice(0,word.length - 1);
    }

    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;
}

console.log(wordCloud('After beating the eggs, Dana read the next step:'));
console.log(wordCloud('Add milk and eggs, then add flour and sugar.'));
// console.log(wordCloud());