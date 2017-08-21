const express = require('express');

var server = express();

server.listen(8080);

// 对于 所有访问的都处理
server.use(function (req, res, next) {
    
   
    // 运行下面的 .use 函数，这是个链式操作 
    next();
});

// 只对于 '/' 目录下的访问才处理 
server.use('/', function (req, res, next) {
    
    console.log(req.body);
});





