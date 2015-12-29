
n sumAll(arr) {
  
  // find the max and min values
  var maxVal = Math.max.apply(null, arr);
  var minVal = Math.min.apply(null, arr);
  console.log("Max: " + maxVal + " Min: " + minVal);
  
  // create new array with all values between min and max
  var sumAllArr = [];
  for (var i=minVal; i<maxVal; i++) {
    sumAllArr[i] = i;
  }
  sumAllArr.push(maxVal);
  console.log(sumAllArr);
  
  // sum all the values in the array
  var total = sumAllArr.reduce(function(a, b) {
    return a + b;
  });
  
  return total;
}

sumAll([1, 4]);

