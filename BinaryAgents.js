function binaryAgent(str) {
  
  // split string into a string array
  // parseInt each element into a Char Code in a new array
  // convert each Char Code into a character array
  // join the character array into a string and return
  var strArr = str.split(" ");
  var charArr = [];
  for(var i=0;i<strArr.length;i++) {
    charArr.push(String.fromCharCode(parseInt(strArr[i], 2)));
  }
  
  return charArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

