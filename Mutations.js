function mutation(arr) {
  console.log(arr);
  // convert elements to lower case strings
  var element1 = arr[0].toString().toLowerCase();
  var element2 = arr[1].toString().toLowerCase();

  // split strings into array of characters
  var arr1 = element1.split("");
  var arr2 = element2.split("");

  var matched = true;
  // each each letter in arr2 test if in arr1
  console.log("arr2 length:" + arr2.length);
  for (var x=0; x<arr2.length; x++) {
    var index = arr1.indexOf(arr2[x])
    if (index == -1)
      return false;
  } 
  return matched;
}

mutation(["hello", "hey"], "");
