const findSmallesNumber = function (numbers) {
  let smallesNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallesNumber) {
      smallesNumber = number;
    }
  }

  return smallesNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15]));
console.log(findSmallesNumber([100, 54, 8, 12, 47]));
console.log(findSmallesNumber([7, 21, 84, 15, 4]));
