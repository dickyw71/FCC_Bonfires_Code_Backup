function repeat(str, num) {
  // repeat after me
  if(num < 0) {
    return "";
  }

  var repeatedStr;
  repeatedStr = str.concat(str, str); 
  
  console.log(repeatedStr);
 
  return repeatedStr;
}

repeat('abc', 3);