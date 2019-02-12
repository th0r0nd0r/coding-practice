

function getMoneySpent(keyboards, drives, b) {
  let maxSkrilla = -1;

  keyboards.forEach(function (board) {
      drives.forEach(function (drive) {
          const combo = board + drive;
          if (combo > maxSkrilla && combo <= b) {
              maxSkrilla = combo;
          }
      });
  });

  return maxSkrilla;
}