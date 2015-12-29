
n where(collection, source) {
  var arr = [];
  // What's in a name?
  var sourceKeys = Object.keys(source);
  
  for ( var i=0; i<collection.length; i++) {
  //for(var obj in collection) {
    
    var matchedProps = false;
    var obj = collection[i];
        
    // if object has all properties of the source 
    for (var ix=0; ix<sourceKeys.length; ix++) {
      if(obj.hasOwnProperty(sourceKeys[ix])) {
        matchedProps = true;
      }
      else {
        matchedProps = false;
      }      
    }
    
    if(matchedProps) {
      console.log("Got to Matched Props");
      var matchedValues = false;      
      // if all matching props in the object have same value as source
      for (ix=0; ix<sourceKeys.length; ix++) {
        if (obj[sourceKeys[ix]] == source[sourceKeys[ix]]) {     
          matchedValues = true;
        }
        else {
          matchedValues = false;
        }
      }
      
      if (matchedValues) {
        // add matching object to returned array
        arr.push(obj);    
      }
    }
  }

  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
