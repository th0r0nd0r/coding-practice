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


// convert from standard to military time

function timeConversion(s) {
  const suffix = s.slice(-2);
  let converted = s;
  let hours = parseInt(s.slice(0,2));
  
  if (suffix === "PM" && hours !== 12) {
      hours += 12;
      
      converted = hours.toString() + s.slice(2);
  } else if (suffix === "AM" && hours === 12) {
      converted = "00" + s.slice(2);  
  }
  
  return converted.slice(0,-2);
}


function kangaroo(x1, v1, x2, v2) {
  if (x2 > x1 && v2 > v1) {
      return "NO";
  }
  
  const remainder = (x1 - x2) % (v2 - v1);
  
  if (remainder === 0) {
      return "YES";
  } else {
      return "NO";
  }
}