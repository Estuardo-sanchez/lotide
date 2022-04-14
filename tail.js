const assertEqual = require('./assertEqual');

const tail = function(array) {
  let result = array.slice(1);
  console.log(result);
};

module.exports = tail;