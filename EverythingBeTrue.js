function every(collection, pre) {
  // Is everyone being true?
  var truthy = true;
  for(var i=0;i<collection.length;i++) {
    
    if (collection[i].hasOwnProperty(pre) === false) {
      return false;
    }
    else {
      if ((collection[i][pre] === null) || 
           (collection[i][pre] === 0) ||
           (collection[i][pre] === undefined) ||
           (collection[i][pre] === "") ||
           (Number.isNaN(collection[i][pre]))) {
        return false;
      }
    }
  }
  return truthy;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

