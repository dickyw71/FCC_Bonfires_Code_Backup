function largestOfFour(arr) {
  // You can do this!
  var hiArr = [0,0,0,0];
  // for each array
  for (var i=0;i<4;i++){
    // find highest value
    for (var j=0; j<4; j++) {
      if ( arr[i][j] > hiArr[i])
        hiArr[i] = arr[i][j];
    }
  }
  return hiArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);