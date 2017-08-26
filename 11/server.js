const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.listen(8080);



// 只对于 '/' 目录下的访问才处理 
server.use('/', function (req, res, next) {
    
    
    res.cookie('user', 'admin', {
        path: '/aaa', maxAge: 1*24*60*60*1000
    });


    res.send('ok-->');
});
