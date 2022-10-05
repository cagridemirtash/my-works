function palindrome(str) {
  //Find special char in str like .," etc.
  let checkSpecialCharachter = /[\W_]/g;
  //The after changing we find the special char
  let checkSpec = str.toLowerCase().replace(checkSpecialCharachter, "");
  //The whole string without any space or special char
  //First we destructure this string like :
  /*
    never odd or even => neveroddoreven => ['n', 'e', etc]
  */
  let reverseStr = checkSpec.split("").reverse().join("");
  //After splitting reverse all
  //And then join like:
  /*
    EXAMPLE : 
    ['n','e','v'] => nev
  */
  return checkSpec === reverseStr;
}

palindrome("nope");
palindrome("never odd or even");
palindrome("A man, a plan, a canal. Panama");

//Ceasers Cipher
function rot13(str) {
  //Creating regex and find in string variable
  //replace() => It take two parameter
  /*
    First (String, String)
    Second (Regex String, Function or String)
    The second one use more than first.
  */
  //So what we do ?
  return str.replace(/[A-Z]/g, (ceaserPiece) =>
    String.fromCharCode((ceaserPiece.charCodeAt(0) % 26) + 65)
  );
  //This return push String when the replace method execute finished.
  //When find the regex /[A-Z]/g in str, change by the function
  //Which is called ceaser cipher encryption
  //Every char in str taking by charCodeAt() built-in func
  //fromCharCode() built-in is get charcode from
}

rot13("SERR YBIR?");

//Last Solution

function checkCashRegister(price, cash, cid) {
  /* Changeable Code Start */
  let difference = cash - price;
  const originalDiff = difference;
  var objectReturn = {
    status: "",
    change: [],
  };

  let CONSTANT_CURRENCY = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];
  /* Changeable Code End */

  /* Calculate Cid Sum Start */
  cid = cid.reverse();
  var cidSum = 0;
  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }
  /* Calculate Cid Sum End */

  /* Calculate difference from original to cid Start*/
  let result = [...CONSTANT_CURRENCY];
  for (let i = 0; i < CONSTANT_CURRENCY.length; i++) {
    let returnMoney = 0;
    let bill = cid[i][1] / CONSTANT_CURRENCY[i][1];
    bill.toFixed(2);
    while (difference.toFixed(2) >= CONSTANT_CURRENCY[i][1] && bill >= 1) {
      difference = difference - CONSTANT_CURRENCY[i][1];
      returnMoney = returnMoney + CONSTANT_CURRENCY[i][1];
      bill--;
    }
    if (returnMoney > 0) {
      if (returnMoney - Math.floor(returnMoney) !== 0) {
        result[i][1] = returnMoney.toFixed(2);
        result[i][1] = parseFloat(result[i][1]);
      } else {
        result[i][1] = returnMoney;
      }
    } else {
      result[i][1] = returnMoney;
    }
  }
  /* Calculate difference from original to cid End*/

  /*Calculate Sum of Result Array When copy from CONSTANT_CURRENCY Start*/
  let sumResult = 0;
  for (let i = 0; i < cid.length; i++) {
    sumResult = sumResult + result[i][1];
  }
  sumResult = sumResult.toFixed(2);
  if (cidSum < originalDiff || sumResult < originalDiff) {
    objectReturn.status = "INSUFFICIENT_FUNDS";
  } else if (cidSum == originalDiff) {
    objectReturn.status = "CLOSED";
    object.change = cid.reverse();
  } else {
    let resultFilter = [];
    for (let index = 0; index < result.length; index++) {
      if (result[index] !== 0) {
        resultFilter.push(result[index]);
      }
    }
    objectReturn.status = "OPEN";
    objectReturn.change = resultFilter;
  }
  /*Calculate Sum of Result Array When copy from CONSTANT_CURRENCY End*/
  return objectReturn;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
