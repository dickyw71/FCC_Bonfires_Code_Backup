function unite(arr1, arr2, arr3) {
 
  // join all the array arguments together
  var clubbedArray = [];
  for (i=0; i<arguments.length;i++) {
    clubbedArray.push(arguments[i]);
  }
 
  // flatten arrays into one
  var flattened = clubbedArray.reduce(function(a, b) {
    return a.concat(b);
  }, []); 
 
  // remove duplicates from array
  var uniq = flattened.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  
  return uniq;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

