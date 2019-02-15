function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // console.log(s,t,a,b, apples, oranges);

  let houseApples = { fruits: 0 };
  let houseOranges = { fruits: 0 };

  function doCount(fruits, fruitCount) {
      fruits.forEach(function (fruit) {
          const fruitSpot = a + fruit;
          if (s <= fruitSpot && t >= fruitSpot) {
              fruitCount.fruits += 1;
          }
      });
  }

  doCount(apples, houseApples);
  doCount(oranges, houseOranges);

  console.log(houseApples.fruits);
  console.log(houseOranges.fruits);
}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);

console.log();

countApplesAndOranges(2,3,1,5,[2],[-2]);