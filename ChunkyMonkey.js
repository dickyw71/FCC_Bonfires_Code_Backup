function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  for(var i=0; i<arr.length; i += size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);