//This function use for if add two element or two dimension adding by functional programming
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  //This if increase the arguments length and reach the last return statement
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

addTogether(2, 3);
console.log(addTogether(2)(3));
console.log(addTogether(5)(7));
