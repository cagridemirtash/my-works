"use strict";
/* Function */
function arrManipulation(...args) {
  return args.reduce((a, b) => a * b, 1);
}
/* FunctionEnd */

// const user = {
//   name: "Cagri",
//   firstName: "Demirtas",
// };
// Object.freeze(user);
// console.log((user.firstName = "HANIFI"));
// console.log(user.firstName);

console.log(arrManipulation(1, 2, 3, 4, 5));
