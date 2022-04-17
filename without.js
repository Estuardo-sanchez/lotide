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


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};


// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;