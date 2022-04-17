const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  for (let val of obj1) {
    if (!obj1[val] === obj2) {
      return false;
    } else {
      for (let item in object1) {
        if (Array.isArray(object1[item]) && Array.isArray(object1[item])) {
          if (eqArrays(object1[item], object2[item]) === false) {
            return false;
          }
        } else {
          if (object1[item] !== object2[item]) {
            return false;
        
          }
        }
      }
    }
    return true;
  }
};

// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};
// assertEqual(eqObjects(ab,ba), true);

// const abc = {a: "1", b: "2", c: "3"};
// assertEqual(eqObjects(ab,abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;