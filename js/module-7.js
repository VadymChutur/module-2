// const fn = function () {
//   const args = Array.from(arguments);
//   console.log(args);
// };

// const fn = function (string, ...args) {
//   console.log(args);
// };

// fn('hello', 1, 2, 3, 4, 5, 6, 7);
// fn('aloha', 5, 6, 7);
// fn('hi', 1, 2, 3, 4);

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6, 7));

const filterNumbers = function (arr, ...args) {
  //   console.log(arr);
  //   console.log(args);

  const uniqueEllements = [];

  for (const ell of arr) {
    // console.log(ell);
    // console.log(args.includes(ell));
    if (args.includes(ell)) {
      //   console.log(`${ell} found`);
      uniqueEllements.push(ell);
    }
  }

  return uniqueEllements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
