function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if ( str.substr(str.length-target.length, target.length) == target)
    return true;
  else
    return false;
}

end('Bastian', 'n');