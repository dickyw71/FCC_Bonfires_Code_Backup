function pair(str) {
  // base pairs 
  var bpAT = "AT";  //  guanine-cytosine
  var bpGC = "GC";  //  adenine-thymine
  
  // split the str into an array of DNA singles letters
  var arrSingles = str.split("");
  
  // DNA pairs array
  var arrPairs = [];
  var arrTemp = [];
  
  // form each pair of DNA
  for(var i=0; i<arrSingles.length; i++) {
    
    if(bpAT.indexOf(arrSingles[i]) !== -1) {
      arrPairs.push([arrSingles[i], bpAT.replace(arrSingles[i], "")]);
    }
    else if (bpGC.indexOf(arrSingles[i]) !== -1) {
      arrPairs.push([arrSingles[i], bpGC.replace(arrSingles[i], "")]);      
    }
    
    console.log(arrPairs.toString());
    
  }
  
  return arrPairs;
}

pair("GCG");
