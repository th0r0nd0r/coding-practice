

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