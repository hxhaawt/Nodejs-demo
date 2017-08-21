const express = require('express');
const bodyParser = require('body-parser');

var server = express();

server.listen(8080);

// 只对于 '/' 目录下的访问才处理 
server.use('/', function (req, res, next) {
    
    console.log('aa');
    // 运行下面的 .use 函数，这是个链式操作 
    next();
});

// 对于 所有访问的都处理
server.use(function (req, res, next) {
    
    console.log('bb');
});



