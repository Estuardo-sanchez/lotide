const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let results = {};
  for (num of letters) {
    if (num === ' ') {
      continue;
    } else {
      results[num] = (results[num] || 0) + 1;
    }
  }
  return results;
}

console.log(countLetters("my name is Estuardo"));




