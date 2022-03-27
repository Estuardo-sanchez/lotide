const assertEqual = function(actual, expected) {
  
};

const eqArrays = function(arrayOne, arrayTwo) {
  let sameLength = arrayOne.length === arrayTwo.length;
  let sameValues = true;
  for(i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      sameValues = false;
    }
  }

  if(sameValues && sameLength){
    console.log('Passed');
  } else {
    console.log('Failed');
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2 ,3], [3, 2, 1])
eqArrays(['1', '2', '3'], ['1', '2', '3'])
eqArrays(['1', '2', '3'], ['1', '2', 3])