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