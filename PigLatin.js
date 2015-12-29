function translate(str) {
  
  var vowelIndex = str.search(/[aeiou]/);
  
  if(vowelIndex === 0) {
    str = str + "way";
  }
  else {
    var firstConsonants = str.slice(0, vowelIndex);
    var restOfWord = str.slice(vowelIndex);
    str = restOfWord + firstConsonants + "ay";
  }
  

  return str;
}

translate("consonant");
