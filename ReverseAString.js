function reverseString(str) {
  var strArray = str.split("");
  strArray.reverse();
  var newStr = strArray.join('');
  str = newStr;
  return str;
}

reverseString('hello');
