const { hello } = require('./hello');
const { expect } = require('chai');

// should return Hello My Sir

// console.log(hello('My Sir'));

describe('hello function', () => {
  it('should return Hello My Sir !!!', () => {
    // Style TDD  assert
    //
    expect(hello('My Sir')).to.equal('Hello My Sir !!!');
  });
});
