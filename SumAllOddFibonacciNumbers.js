function sumFibs(num) {
  
  var prevFibNum = 1;
  var currFibNum = 1;
  var nextFibNum;
  var oddSum = 1; // because sum of first 2 Fibonacci numbers in sequence is 0+1 = 1

  while ( currFibNum <= num ) {
    if (currFibNum % 2) {    // Check if Fibonacci number is Odd
      oddSum += currFibNum;
    }
    nextFibNum = prevFibNum + currFibNum; 
    prevFibNum = currFibNum;        
    currFibNum = nextFibNum;       
  }
  
  return oddSum;
}

sumFibs(4);

