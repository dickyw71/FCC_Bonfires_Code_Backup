function fearNotLetter(str) {
  
  // find first char code
  var firstCharCode = str.charCodeAt(0);
  
  for(i=1;i<str.length;i++){
  // if next char code is not one higher than last
    if(str.charCodeAt(i) !== firstCharCode+i) {
  //  then return char from code
      return String.fromCharCode(firstCharCode+i);
    } 
  }
  // no missing letters found
  return undefined;
}

fearNotLetter("abce");

