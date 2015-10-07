function falsyTest(element) {
    var falsy = element;
    console.log(falsy);
    return falsy;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filterArr = arr.filter(falsyTest);
  console.log(filterArr);
  return filterArr;
}

bouncer([7, "ate", "", false, 9], "");
