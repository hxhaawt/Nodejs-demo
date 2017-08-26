const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

let keysArr = [];
for(let i=0; i<10000; i++){
    keysArr.push('sig_' + Math.random());
}

server.use(cookieParser());
// 要放在 cookieParser后面
server.use(cookieSession({
    name: 'sess',
    // keys: ['aaak', 'bbbd', 'cccce'],
    keys: keysArr,
    // 保留 2 小时
    maxAge: 2*3600*1000
}));


// 只对于 '/' 目录下的访问才处理 
server.use('/', function (req, res, next) {
    
    if (req.session['count'] === null){
        req.session['count'] = 1;
    }else {
        req.session['count']++;
    }
    // delete res.session['xxx'] 删除 session
    console.log(req.session['count']);

    res.send('cookie-session--ok>');
});




server.listen(8080);

