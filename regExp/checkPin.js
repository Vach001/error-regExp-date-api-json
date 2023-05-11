//Task 2.2 // Create a RegExp myRegExp to test if a string is a valid pin or not.
// A valid pin has:
// -> Exactly 4 or 6 characters.
// -> Only numerical characters (0-9).
// -> No whitespace.

function myRegExpPin(pin) {
  const myRegExp = /^([0-9]{4}|[0-9]{6})*$/g;

  return myRegExp.test(pin);
}
console.log(myRegExpPin("1234"));
console.log(myRegExpPin("45135"));
console.log(myRegExpPin("89abc1"));
console.log(myRegExpPin("900876"));
console.log(myRegExpPin(" 4983"));
