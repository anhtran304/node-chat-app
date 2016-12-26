var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct Message object', () => {
    var from = 'Ken';
    var text = 'Should create message object'
    var message = generateMessage(from, text);

    expect(message).toInclude({from,text});
  });
});
