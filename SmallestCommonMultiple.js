function smallestCommons(arr) {
  
  // sort range in ascending order
  arr.sort(function(a, b) {
    return a-b;
  });
  
  // find product of all primes in range [1, 5]
  // 1*2*3*5 = 30
  // 2*2=4
  // multiply the product of primes by missing extras (2*2=4) 
  // 30 * 2 = 60
  
  // for [1, 13]
  // 1*2*3*5*7*11*13= 30030
  // 2*2=4, (2*3=6), (2*4=8), 3*3=9, (2*5=10), 2*6=12
  // 2 * (2 * 3) = 12
  // 30030 * 12 = 360360
  
  //  for [1, 20]
  // 1*2*3*5*7*9*11*13*17*19= 9699690
  // 2*2=4, (2*3=6), (2*4=8), 3*3=9, (2*5=10), 2*6=12, (2*7=14), (3*5=15), (2*8=16), 2*9=18
  // (2 * (2 * (2 * 3))) = 24
  // 9699690 * 24 = 232792560
  
  var prime = [2,3,5,7,11,13,17,19];
  var k = arr[1];
  var N = 1;
  var i = 0;
  var a = [];
  var check = true;
  var limit = Math.sqrt(k);
  while (prime[i] <= k) {
    a[i] = 1;
    if (check) {
      if (prime[i] <= limit) {
        a[i] = Math.floor( Math.log(k) / Math.log(prime[i]));
      }
      else {
        check = false;
      }
    }
    N = N * (Math.pow(prime[i], a[i]));
    i = i + 1;
  }

  return N;
}


smallestCommons([1,5]);

