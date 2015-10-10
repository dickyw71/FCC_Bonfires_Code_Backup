function removePunctuation(match) {
  return "";
}
function palindrome(str) {
  // Good luck!
  var myStr = str.replace(/[\W+\s]/g , removePunctuation);
 
  
  console.log(myStr);
  var lower = myStr.toLowerCase();
  var reverse = lower.split("").reverse().join(""); 
  if (lower === reverse) {
    return true;
  } else {
    return false;
  } 
}



palindrome("never odd or even");
