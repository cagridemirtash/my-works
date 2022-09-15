//Reverse String
function reverseString(str) {
  //Solution 1 -> My Solution
  /*
  let tempArray = [...str];
  let tempVariable = "";
  for (let i = 0; i < tempArray.length / 2; i++) {
    tempVariable = tempArray[i];
    tempArray[i] = tempArray[tempArray.length - i - 1];
    tempArray[tempArray.length - i - 1] = tempVariable;
  }
  str = tempArray.join("");
  return str;
  */
  //Solution 2 -> The best way
  /*
    str.split("").reverse().join("")
  */
  //Solution 3
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverseString("hello"));

// Find longest word -> convert string to array and find longest word length
function findLongestWordLength(str) {
  let newStr = str.split(" ");
  console.log(newStr);
  let max = newStr[0].length;
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i].length > max) {
      max = newStr[i].length;
    }
  }
  console.log(max);
  return max;
  //Solution 2 -> Use map
  //return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Title Uppercase -> Uppercase the first letter whole word in strings.
function titleCase(str) {
  const newStr = str.split(" ");
  const tempArr = [];
  for (let elem in newStr) {
    tempArr[elem] =
      newStr[elem][0].toUpperCase() + newStr[elem].slice(1).toLowerCase();
  }
  console.log(tempArr);
  return tempArr.join(" ");
}

titleCase("I'm a little tea pot");
