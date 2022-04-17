const eqArrays = function(arrayOne, arrayTwo) {
  let sameLength = arrayOne.length === arrayTwo.length;
  let sameValues = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      sameValues = false;
    }
  }

  if (sameValues && sameLength) {
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(array) {
  let newArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let elementTwo of element) {
        newArray.push(elementTwo);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

// flatten([1, 2, [3, 4], 5, [6]]);

module.exports = flatten;