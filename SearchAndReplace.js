
n myReplace(str, before, after) {
  // Does the before word start with a capital?
  if (before.search(/^[A-Z]/) === 0) {
    // Set first character of after word to capital
    var strArr = after.split("");
    strArr[0] = strArr[0].toUpperCase();
    after = strArr.join("");
  }
  var newStr = str.replace(before, after);
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

