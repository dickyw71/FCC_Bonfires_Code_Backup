function convert(str) {
  // &colon;&rpar;
  var re = /[&<>"']/g;
  
  //var result = re.exec(str);
  
  var newStr = "";

  //  for each matched character 
  //  replace the with the html entity
  function convertHtmlEntity(match) {
    switch(match) {
      case '&':
        return "&amp;";
      case '<':
        return "&lt;";
      case '>':
        return "&gt;";
      case '\"':
        return "&quot;";
      case '\'':
        return "&apos;";
      default:
        return "?";
    }
  }  
  
  newStr = str.replace(re, convertHtmlEntity);
  
  
  return newStr;
}

convert("Dolce & Gabbana");

