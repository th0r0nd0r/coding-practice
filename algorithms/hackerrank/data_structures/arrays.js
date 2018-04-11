// reverse an array
function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);

  console.log(arr.reverse().join(' '));
}


// sum hourglasses in a 2d array
function sumHourglass(arr, x, y) {
  let sum = 0;
  
  for (let i = x; i < x + 3; i++) {
      let upperVal = arr[y][i];
      sum += upperVal;
      let lowerVal = arr[y + 2][i];
      sum += lowerVal;
      
      
      if (i === x + 1) {
          let middleVal = arr[y + 1][i];
          sum += middleVal;
      } 
  }
  
  return sum;
}

function main() {
  var arr = [];
  for(arr_i = 0; arr_i < 6; arr_i++){
     arr[arr_i] = readLine().split(' ');
     arr[arr_i] = arr[arr_i].map(Number);
  }

  let maxSum;
  let sum;
  
  for (let y = 0; y < arr.length - 2; y++) {
      for (let x = 0; x < arr[y].length - 2; x++) {
          sum = sumHourglass(arr, x, y);
          
          if ((y === 0 && x === 0) || sum > maxSum) {
              maxSum = sum;
          }
      }
  }
  
  console.log(maxSum);
}

// sparse arrays - find the # of occurences of a string in an array of strings

function findSuffix(collections, queryString) {
    let count = 0;
    
    collections.forEach(function(str) {
        if (str === queryString) {
            count++;
        }
    });

    return count;
}

// Array Manipulation - add values to a range in the array and return the max value

function arrayManipulation(n, queries) {
    const list = [];
    const finalValues = [];
    for (let i = 0; i < n; i++) {
        list.push(0);
    }
    
    queries.forEach(function(quer) {
        let start = quer[0] - 1;
        let end = quer[1];
        let val = quer[2];
        
        list[start] += val;
        if (end < list.length) {
            list[end] -= val;   
        }
    });
    
    let accum = 0;
    let max = list[0];
    
    list.forEach(function(el) {
        accum += el;
        max = Math.max(accum, max);
    });

    return max;
}