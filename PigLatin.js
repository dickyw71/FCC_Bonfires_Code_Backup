function translate(str) {
  
  var vowelIndex = str.search(/[aeiou]/);
  
  switch(vowelIndex) {
    case -1:  // word does not have a vowel!
     break;
    case 0:   //  word starts with a vowel - add 'way'
      str = str + "way";
      break;
    default:  // slice and dice word into pig latin
      var firstConsonants = str.slice(0, vowelIndex);
      var restOfWord = str.slice(vowelIndex);
      str = restOfWord + firstConsonants + "ay";      
      break;
  }

  return str;
}

translate("consonant");

