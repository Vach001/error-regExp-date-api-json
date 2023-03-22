//Task 2.1 // Write a function to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9).

function checkStringForChar(string) {
  const regExpChars = /^[a-zA-Z0-9]*$/g;

  return Boolean(string.match(regExpChars));
};

const sentence = "KaJSCNDSJVBIDNjkasbnjsibdsvjsdbv2516454141";

console.log(checkStringForChar(sentence));