const express = require('express');
const bodyParser = require('body-parser');

var server = express();

server.listen(8080);


server.use('/', function (req, res, next) {
    
    console.log('aa');
    // 运行下面的 .use 函数，这是个链式操作 
    next();
});

server.use('/', function (req, res, next) {
    
    console.log('bb');
});



