const myString = "My name is 'Cagri'";

//Sonunda ki i eki cagri türünde gönderilen string'in case durumuna(Büyük,küçük ve ya boşluk) durumuna bakmadan kontrol sağlar
//const MY_REG_EX = /cagri/i;
const myRegEx = /cagri/i;
//Birden fazla aynı isme sahip string seçmek istiyorsak /reg-ex-name/gi kullanıyoruz.
console.log(myString.match(myRegEx));

// Find spesific character in a given string
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);

//Match numbers and letters of the alphabet
let quoteSampleSecond = "Blueberry 3.141592653s are delicious.";
let myRegexSecond = /[h-s2-6]/gi; // Change this line
let resultSecond = quoteSampleSecond.match(myRegexSecond); // Change this line
console.log(resultSecond);

//negated character sets.-> Use this symbol -> ^
let quoteSampleThird = "3 blind mice.";
let myRegexThird = /[^aeiou0-9]/gi; // Change this line
let resultThird = quoteSampleThird.match(myRegexThird); // Change this line
console.log(resultThird);
