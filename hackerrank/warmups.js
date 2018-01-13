// if you can only blow out the tallest candles, 
// given an array of candle heights, how many candles can you blow out?

function birthdayCakeCandles(n, ar) {
  let height = 1;
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
      let candle = ar[i];
      if (candle === height) {
          count++;
      } else if (candle > height) {
          height = candle;
          count = 1;
      }
  }
  
  return count;
}


function timeConversion(s) {
  const suffix = s.slice(-2);
  let converted = s;
  let hours = parseInt(s.slice(0,2));
  
  if (suffix === "PM" && hours !== 12) {
      hours += 12;
      
  } else if (suffix === "AM" && hours === 12) {
      hours -= 12;
  }
  
  converted = hours.toString() + s.slice(2);
  
  return converted.slice(0,-2);
}

console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("11:59:00PM"));
console.log(timeConversion("03:30:00PM"));
console.log(timeConversion("03:30:00AM"));