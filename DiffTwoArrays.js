
n diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  // Look for each element in arr1 inside arr2
  for (var i = 0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      // add to newArr if not found
      newArr.push(arr1[i]);
    }
  }
  // Look for each element in arr2 within arr1
  for (var j = 0; j<arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) == -1) {
      // add to newArr if not found
      newArr.push(arr2[j]);
    }
  }  
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

