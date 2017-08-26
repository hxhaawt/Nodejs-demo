const jade = require('jade');

// 调用不同的 jade 文件

var str = jade.renderFile('./views/8.jade', {
    pretty: true,
    a: 10,
    b: 5
});


console.log(str);

