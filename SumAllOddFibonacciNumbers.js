function sumFibs(num) {
  
  // calculate all Fibonacci Numbers upto and including num
  //  Starting with 0,1,1 : Fn = Fn-1 + Fn-2
  var fibArr = [0,1,1];
  while(num > fibArr[fibArr.length-1]) {
    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
  }
  
  console.log(fibArr.length);
  console.log(fibArr);
  
  // calculate sum of all odd Fibonacci Numbers in fibArr
  var oddSum = 0;
  var evenSum = 0;
  var index = 0;

  while (fibArr[index] <= num ) {
    
    if(fibArr[index] % 2) {
      // Odd Fib# Value
      oddSum += fibArr[index];
    }
    else {
      evenSum += fibArr[index];
    }
    
    index++;  // next Fib# in array
  }
  
  console.log("Odd Sum: " + oddSum);
  console.log("Even Sum: " + evenSum);
  
  return oddSum;
}

sumFibs(4);

