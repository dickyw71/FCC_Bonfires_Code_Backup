function convert(num) {
  
  var romans = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M","M∇","∇"];
  var decimals = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000];
  var romanNum = "";
  
  // Break the num into 1000s, 100s, 10s and 1s
  var tempNum = num;
  var index = decimals.length-1;  //  starting with largest value in arrays (5000 or ∇)
  while (tempNum > 0) {
    if (tempNum >= decimals[index]) {
      romanNum += romans[index];
      tempNum -= decimals[index];
      console.log(romanNum);
    }
    else {
      index--;  //  move to the next smaller value in the arrays
      console.log(index);
    }
  }

 return romanNum;
}

convert(10000);
