const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

const calculateTotalPrice = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }

  return total;
};

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));
