const eqArrays = function(arrayOne, arrayTwo) {
  let sameLength = arrayOne.length === arrayTwo.length;
  let sameValues = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      sameValues = false;
    }
  }

  if (sameValues && sameLength) {
    // console.log('Passed');
    return true;
  } else {
    //console.log('Failed');
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

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (!callback(item)) {
      newArray.push(item);
    } else {
      return newArray;
    }
  }
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, data1.slice(0, 5));
// assertArraysEqual(results2, data2.slice(0, 6) )

module.exports = takeUntil;