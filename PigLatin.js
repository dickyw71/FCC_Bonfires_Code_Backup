function translate(str) {

  // find the first vowel in str using indexOf()
  // if word starts with a vowel 
  //    append 'way' to str and return
  // else
  //   extract substr() of consonants before first vowel from str
  //   append consonant(s) to word
  //   append 'ay' to word and return it
  
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelFirstIndex = [-1, -1, -1, -1, -1];
  
  for (var ix=0; ix<vowels.length;ix++) {
    vowelFirstIndex[ix] = str.indexOf(vowels[ix]); 
  }
  
  //console.log("Index of o " +  str.indexOf('o') );
  //console.log("Value of o in array " +  vowelFirstIndex[3] );
              
  if (vowelFirstIndex.indexOf(0) !== -1) {
    str = str + "way";    
  }
  else {
    // find lowest value greater than 0
    var filtered = vowelFirstIndex.filter(function(value) {
       return value >= 0;
    });
    // sort the values incrementally
    filtered.sort(function(a, b) {
      return a - b;
    });

    //console.log(filtered);
    
    var firstConsonants = str.slice(0, filtered[0]);
    console.log("First Bit: " + firstConsonants);
    var restOfWord = str.slice(filtered[0]);
    console.log("Rest of it: " + restOfWord);
    str = restOfWord + firstConsonants + "ay";
  }
  
 console.log(str);

 return str;
}

translate("glove");
