const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();


server.use(cookieParser('adfke1113w3'));

// 只对于 '/' 目录下的访问才处理 
server.use('/', function (req, res, next) {
    
    req.secret="adfke1113w3";
    res.cookie('user', 'vuexx', {
        // 签名，显示加密的cookie，但是会耗空间
        signed: true
    });

    console.log("签名cookie", req.signedCookies);
    console.log("没有签名" , req.cookies);

    res.send('ok-->');
});




server.listen(8080);

