function destroyer(arr) {
  // Remove all the values

  // put the function arguments into an array
  var args = Array.prototype.slice.call(arguments);
  // Remove the first argument 
  args.splice(0, 1);
  var newArr = arr.filter(function(element) {
    return (args.indexOf(element) === -1);
  });
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");