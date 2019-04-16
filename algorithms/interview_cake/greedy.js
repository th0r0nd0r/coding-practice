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

// console.log(makeMeRich([10, 7, 5, 8, 11, 9]));
// console.log(makeMeRich([10, 12, 5, 3, 8, 9]));
// console.log(makeMeRich([8,2,4,5]));
// console.log(makeMeRich([8,5,4,2]));


// Given a list of integers, find the highest product you can get from three of the integers.
function largestProduct(nums) {
  const pos = [];
  const neg = [];

  function insertNum(num, top) {
    for (let i = 0; i < top.length; i++) {
      if (num > top[i]) {

        if (top.length < 3) {top.length++;}

        for (let j = top.length - 1; j > i; j--) {
          top[j] = top[j - 1];
        }
        top[i] = num;
        break;
      }
    }

    if (top.length < 3) {top.push(num);}
  }

  function handleNegatives() {
    if (neg.length >= 2) {
      const negProd = neg[0] * neg[1];
      const posProd = pos[1] * pos[2];

      if (negProd > posProd) {
        pos[1] = neg[0];
        pos[2] = neg[1];
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num >= 0) {
      insertNum(num, pos);
    } else {
      insertNum(num, neg);
    }
  }

  handleNegatives();

  return pos.reduce((prev, curr) => (prev * curr));
}

// console.log(largestProduct([1,5,-3,8,2]));
// console.log(largestProduct([1,5,-3,8,-5,2]));
// console.log(largestProduct());
// console.log(largestProduct());


// given a list of integers, find the product of all integers except at the current index, without using division
// time complexity: 
// each pass takes O(n), since we only perform one O(1) multiplication at each num
// total: O(2n) ~ O(n)
function findProducts(nums) {
  const befores = [1];
  const afters = [1];
  let product = 1;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i - 1];
    product *= num;
    befores.push(product);
  }

  product = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    let num = nums[i + 1];
    product *= num;
    afters.unshift(product);
  }

  return befores.map((n, i) => (n * afters[i]));
}

console.log(findProducts([1, 7, 3, 4]));
// console.log(findProducts());