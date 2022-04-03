const eqArrays = function(arrayOne, arrayTwo) {
  let sameLength = arrayOne.length === arrayTwo.length;
  let sameValues = true;
  for(i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      sameValues = false;
    }
  }

  if(sameValues && sameLength){
    // console.log('Passed');
    return true;
  } else {
    //console.log('Failed');
    return false;
  }
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    /*console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');*/
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word[1]);
assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o']);