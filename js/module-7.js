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

// function getExtremeElements(array) {
//   // Change code below this line
//   // console.log(array[0]);
//   let firstElement = array[0];
//   let lastElement = array[array.length - 1];
//   let arr = [];

//   arr.push(firstElement, lastElement);
//   return arr;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   // let arr = message.split(' ');
//   return message.split(' ').length * pricePerWord;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   console.log(array.join(delimiter));
//   // Change code above this line
//   return (string = array.join(delimiter));
// }

// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// );
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
// // console.log(makeStringFromArray('best for week', '_'));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let arr = [];

//   if (firstArray.length + secondArray.length <= maxLength) {
//     console.log(arr.concat(firstArray, secondArray));
//   }
//   if (firstArray.length + secondArray.length > maxLength) {
//     console.log(arr.concat(firstArray, secondArray).slice(0, maxLength));
//   }
//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function findLongestWord(string) {
//   // Change code below this line
//   let arrString = string.split(' ');
//   console.log(arrString);

//   let longestWord = arrString[0];

//   console.log(longestWord);

//   for (let word of arrString) {
//     console.log(word);
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;

//   console.log(arrString);
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let arr = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }

//   return arr;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

function includes(array, value) {
  // Change code below this line
  let findToValue = false;
  for (let ell of array) {
    if (ell === value) {
      return (findToValue = true);
    }
    // console.log(findToValue);
  }
  return findToValue;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
