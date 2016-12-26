var moment = require('moment');

var date = moment();
console.log(date.format('MMM Do YYYY'));

var date = moment();
console.log(date.format('h:mm a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createAt = 123128;
var date = moment(createAt);
console.log(date.format('h:mm a'));
