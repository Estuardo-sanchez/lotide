const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  for (val of obj1) {
    if (!obj1[val] === obj2) {
      return false;
    } else {
      for (let item in object1) {
        if (Array.isArray(object1[item]) && Array.isArray(object1[item])) {
          if (eqArrays(object1[item], object2[item]) === false) {
            return false
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

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('until').inspect;
    if (eqObjects(actual === expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
    
  };

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
 