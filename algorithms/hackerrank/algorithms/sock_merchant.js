// Given an array with integers denoting types of socks, count the total number of matching pairs

// first, sort the sock array- n log(n)
// iterate once and count the pairs- n
// Time Complexity: n + n log(n) ~ n log(n)
function sockMerchant(n, ar) {
  const socks = ar.sort();
  let sockCount = 0;
  let currentSock = null;
  let prevSock = null;
  let pairs = 0;

  for (let i = 0; i < socks.length; i++) {
      prevSock = currentSock;
      currentSock = socks[i];

      if (currentSock === prevSock) {
          if (sockCount >= 2) {
              sockCount = 1;
          } else {
              sockCount += 1;
          }
      } else {
          sockCount = 1;
      }

      if (sockCount === 2) {
          pairs += 1;
      }
  }

  return pairs;
}