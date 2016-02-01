function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.  
  var booWho = false;
  
  switch(typeof bool) {
    case "boolean":
      booWho = true;
      break;
    default:
      break;
  }
  
  return booWho;
}

boo(null);

