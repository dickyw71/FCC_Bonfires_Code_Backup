function titleCase(str) {
  // make string lower case and split the string into array of words
  var words = str.toLowerCase().split(" ");
  // captialise each word in the array
  for(var word in words) {
    words[word] = (words[word].charAt(0).toUpperCase() + 
                   words[word].substr(1));
    console.log(words[word]);
  }
  // join the string
  var myCappedStr = words.join(" ");
  console.log(myCappedStr);
  return myCappedStr;
}

titleCase("I'm a little tea pot");