const logins = ['login1', 'Logins1', 'LoGiN1', 'lOgIn1'];
// const loginToFind = 'LoGiN1';
// let message = '';

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Match ${loginToFind}`;
//     }
//   }

//   return `Not match ${loginToFind}`;
// };

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Match ${loginToFind}`
    : `Not match ${loginToFind}`;
};

console.log(findLogin(logins, 'login119'));
console.log(findLogin(logins, 'Logins1'));
console.log(findLogin(logins, 'LoGiN1'));
console.log(findLogin(logins, 'lOgIn12'));
