function findLongestWord(str) {
  var strArray = str.split(" ");
  var longestStr = "";
  for (var ele in strArray) {
    if( strArray[ele].length > longestStr.length)
      longestStr = strArray[ele];
  }
  return longestStr.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
