const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  
  it("returns ['Lighthouse', 'labs'] for ['yo yo', 'Lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['yo yo', 'Lighthouse', 'labs']), ['Lighthouse', 'labs'])
  });
});