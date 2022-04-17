const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];

  } else if (array.length % 2 === 0) {
    let one = array.length / 2 - 1;
    let two = array.length / 2;
    return [array[one], array[two]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;