const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let result = array.slice(1);
  console.log(result);
};

const words = ["Yo Yo", "Lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);