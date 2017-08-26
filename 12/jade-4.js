const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./views/3.jade', {pretty: true});


console.log(str);
