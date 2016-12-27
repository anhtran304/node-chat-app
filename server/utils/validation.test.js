const expect = require('expect');

var {isRealString} = require('./validation');

var test = '    Real string';
var testSpace = '    ';
var testNonString = 1234;

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(testNonString)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString(testSpace)).toBe(false);
  });

  it('should allow string values', () => {
    expect(isRealString(test)).toBe(true);
  });
});
