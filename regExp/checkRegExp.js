function changeSentence(string) {
  const regExp = /<[^<>]+>/g;

  return string.match(regExp);
};

let str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(changeSentence(str)); // '<a href="/">', '<input type="radio" checked>', "<b>";
