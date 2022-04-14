const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {
  let sameLength = arrayOne.length === arrayTwo.length;
  let sameValues = true;
  for(i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      sameValues = false;
    }
  }

  if(sameValues && sameLength){
    return true;
  } else {
    return false;
  }
}

module.exports = eqArrays;