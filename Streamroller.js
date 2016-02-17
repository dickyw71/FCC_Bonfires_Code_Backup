// flatten is called recursively
// for each element that is an array 
function flatten(a, b) {
  var c;
  if(Array.isArray(b)) {
     c = b.reduce(flatten, []);
  } 
  else {
    c = b;
  }
  return a.concat(c);
}

function steamroller(arr) {
  // I'm a steamroller, baby
  // flatten arrays into one
  return arr.reduce(flatten, []);     
}

steamroller([1, [2], [3, [[4]]]]);

