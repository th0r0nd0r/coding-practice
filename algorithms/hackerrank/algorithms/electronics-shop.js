// basic O(n*m) solution. A more optimal solution involves sorting both lists and not checking combos greater than budget.

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