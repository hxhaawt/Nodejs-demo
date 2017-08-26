const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();


server.use(cookieParser('adfke1113w3'));

// 只对于 '/' 目录下的访问才处理 
server.use('/', function (req, res, next) {
    
    res.clearCookie('user');

    res.send('ok-->');
});




server.listen(8080);

