function add() {
  
  for(var i=0; i<arguments.length;i++) {  
    if (typeof arguments[i] !== "number") {  
      return undefined;   
    }
  }

  if(arguments.length < 2) {
    var operand1 = arguments[0];
    return function(operand2) {
      if(typeof operand2 === "number") {
        return operand1 + operand2;
      }
      else {
        return undefined;
      }
    };
  }
  else {  
    return arguments[0] + arguments[1];  
  }
}

add(2,3);

var sumTwoAnd = add(2);
console.log(sumTwoAnd(8));

