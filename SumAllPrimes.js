function sumPrimes(num) {
 
  var numArr = [];
  var primesArr = [];
  var rangeArr = [];
  var FIRST_PRIME = 2;
  var currNum = FIRST_PRIME;
  var sum = 0;
  
  // populate range array
  for (var j=0; j<=num;j++) {
    rangeArr.push(j);
  }
  rangeArr.splice(0, 2);    // remove 0 & 1 from range
  
  
  // while currNum squared is <= num then increment
  while(currNum*currNum <= num) {
    
    numArr.push(currNum);
    currNum++;   
  }
  
  //  remove multiples of each small prime upto sqrt of num in the range 2 to num

  for(var x=0;x<numArr.length;x++) {
    for(var i=0; i<rangeArr.length;i++) {
      if (rangeArr[i] > numArr[x]) {
        if (rangeArr[i] % numArr[x] === 0) rangeArr.splice(i, 1); 
      }   
    }
  }
  
  // sum rangeArr items
  for(var y=0;y<rangeArr.length;y++) {
    sum += rangeArr[y];
  }
  
  return sum;
}

sumPrimes(10);

