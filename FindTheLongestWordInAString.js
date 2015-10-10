function findLongestWord(str) {
  var strArray = str.split(" ");
  var longestStr = "";
  for (i=0; i<strArray.length; i++ ) {
    if(strArray[i].length > longestStr.length)
      longestStr = strArray[i];
  }
  console.log(longestStr);
  return longestStr.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');