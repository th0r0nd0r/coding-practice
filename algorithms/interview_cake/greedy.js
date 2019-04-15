// input: an array of stock prices whose indices correspond to minutes since open
// output: the most $$ I could make from one buy + one sell
function makeMeRich(prices) {
  let lowest = prices[0];
  let maxDiff = prices[1] - lowest;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    const diff = price - lowest;
    if (diff > maxDiff) {
      maxDiff = diff;
    }
    
    if (price < lowest) {
      lowest = price;
      
    } 
  }

  return maxDiff;
}

console.log(makeMeRich([10, 7, 5, 8, 11, 9]));
console.log(makeMeRich([10, 12, 5, 3, 8, 9]));
console.log(makeMeRich([8,2,4,5]));
console.log(makeMeRich([8,5,4,2]));