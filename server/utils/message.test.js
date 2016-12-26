var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct Message object', () => {
    var from = 'Ken';
    var text = 'Should create message object'
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct Location object', () => {
    var from = 'Anna';
    var latitude = 15;
    var longitude = 19;
    var url = `https://www.google.com/maps?q=15,19`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
