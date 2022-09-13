// Change array value without any push or unshift operation
// First delete from array first two variables and add new value from deleted values.
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//slice()->Copy new array without reference
//Build new array and can't change original array
//Just create new array.

function forecast(arr) {
  const newArr = arr.slice(2, 4);
  return newArr;
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

//Array elements is in array or not
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
  // Only change code above this line
  /*
        let users = {
        Alan: {
            age: 27,
            online: true
        },
        Jeff: {
            age: 32,
            online: true
        },
        Sarah: {
            age: 48,
            online: true
        },
        Ryan: {
            age: 19,
            online: true
        }
        };

        function isEveryoneHere(userObj) {
            return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
                userObj.hasOwnProperty(name)
            );
        }
    */
}

console.log(isEveryoneHere(users));

//Get all kinds of keys of object
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
