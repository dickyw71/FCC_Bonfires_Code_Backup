function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins  
  var re = /([ _])/g; 
  
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  str = str.replace(re, "-").toLowerCase();
  
  return str;
}

spinalCase('This Is Spinal Tap');

