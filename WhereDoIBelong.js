function where(arr, num) {
  // push num onto arr
  arr.push(num);
  // sort the array
  arr.sort(function(a, b) {
    return a-b;
  });
  // Find my place in this sorted array.
  numIndex = arr.indexOf(num);
  return numIndex;
}

where([40, 60], 50);
